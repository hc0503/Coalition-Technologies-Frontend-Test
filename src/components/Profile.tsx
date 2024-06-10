import { ProfileItem } from "./InfoItem";

import type { User } from "../App";

type ProfileProps = Pick<
  User,
  | "name"
  | "age"
  | "gender"
  | "date_of_birth"
  | "phone_number"
  | "emergency_contact"
  | "profile_picture"
  | "insurance_type"
>;

export const Profile: React.FC<ProfileProps> = ({
  name,
  age,
  gender,
  date_of_birth,
  profile_picture,
  phone_number,
  emergency_contact,
  insurance_type
}) => {
  return (
    <div className="bg-white py-8 px-5 mt-5 rounded-2xl">
        <img src={profile_picture} alt={name} className="w-52 h-52 mx-16" />
        <h1 className="text-center text-2xl font-extrabold mt-6 mb-8">{name}</h1>
        <div className="grid gap-6">
            <ProfileItem type="date_of_birth" value={date_of_birth} />
            <ProfileItem type="gender" value={gender} />
            <ProfileItem type="phone" value={phone_number} />
            <ProfileItem type="emergency_contact" value={emergency_contact} />
            <ProfileItem type="insurance_type" value={insurance_type} />
        </div>
        <div className="flex justify-center mt-10">
          <button className="font-bold text-sm px-10 py-3 rounded-full bg-[#01F0D0]">Show All Information</button>
        </div>
    </div>
  );
};
