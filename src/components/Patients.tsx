import classNames from "classnames";

import type { User } from "../App";

type PatientsProps = {
  users: User[];
};

export const Patients: React.FC<PatientsProps> = ({ users = [] }) => {
  return (
    <div className="bg-white rounded-2xl flex flex-col mt-8 overflow-hidden">
      <div className="flex justify-between m-5">
        <h1 className="font-extrabold text-2xl">Patients</h1>
        <button>
          <img src="/icons/search.png" alt="Search" className="w-5" />
        </button>
      </div>
      <ul className="overflow-y-auto flex-1 my-5">
        {users.map((user) => (
          <li
            className={classNames("hover:bg-[#D8FCF7]", {
              "bg-[#D8FCF7]": user.name === "Jessica Taylor",
            })}
          >
            <a href="/" className="flex justify-between px-5 py-4">
              <div className="flex gap-3">
                <img
                  src={user.profile_picture}
                  alt={user.name}
                  className="h-12 w-12"
                />
                <div className="grid gap-1">
                  <p className="font-bold text-sm">{user.name}</p>
                  <p className="text-sm">
                    {user.gender}, {user.age}
                  </p>
                </div>
              </div>
              <button>
                <img src="/icons/more_horiz.png" alt="More" className="w-5" />
              </button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
