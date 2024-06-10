import { useEffect, useState } from "react";
// @ts-ignore
import { CgSpinnerTwo } from '@react-icons/all-files/cg/CgSpinnerTwo';

import { Navbar } from "./components/Navbar";
import { Patients } from "./components/Patients";
import { Profile } from "./components/Profile";
import { LabResults } from "./components/LabResults";
import { DiagnosisHistory } from "./components/DiagnosisHistory";
import { DiagnosticList } from "./components/DiagnosticList";

export type User = {
  name: string;
  gender: "Male" | "Female";
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  lab_results: string[];
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
      {users.length > 0 && <div className="flex flex-1 overflow-hidden justify-between gap-8">
        <Patients users={users} />
        <div className="flex-1 mt-8">
          <DiagnosisHistory />
          <DiagnosticList />
        </div>
        <div className="flex flex-col">
          <Profile {...jessica} />
          <LabResults {...jessica} />
        </div>
      </div>}
      {users.length === 0 && (
        <CgSpinnerTwo size={50} className="h-full text-green animate-spin m-auto" />
      )}
    </>
  );
}

export default App;
