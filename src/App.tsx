import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Profile } from "./components/Profile";

export type User = {
  name: string;
  gender: "Male" | "Female";
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  let username = "coalition";
  let password = "skills-test";
  let auth = btoa(`${username}:${password}`);

  useEffect(() => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [auth]);

  const jessica = users.find(user => user.name === 'Jessica Taylor') as User;

  return (
    <>
      <Navbar />
      <div className="flex justify-between gap-8">
        <Sidebar />
        <Profile {...jessica} />
      </div>
    </>
  );
}

export default App;
