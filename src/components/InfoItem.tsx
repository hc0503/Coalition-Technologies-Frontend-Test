type InfoItemProps = {
  type:
    | "date_of_birth"
    | "gender"
    | "phone"
    | "emergency_contact"
    | "insurance_type";
  value: string;
};

export const ProfileItem: React.FC<InfoItemProps> = ({ type, value }) => {
  let title = "";
  let iconPath = "";

  switch (type) {
    case "date_of_birth":
      title = "Date Of Birth";
      iconPath = "/icons/BirthIcon.png";
      break;
    case "gender":
      title = "Gender";
      iconPath = "/icons/FemaleIcon.png";
      break;
    case "phone":
      title = "Contact Info";
      iconPath = "/icons/PhoneIcon.png";
      break;
    case "emergency_contact":
      title = "Emergency Contacts";
      iconPath = "/icons/PhoneIcon.png";
      break;
    default:
      title = "Insurance Provider";
      iconPath = "/icons/InsuranceIcon.png";
      break;
  }

  return (
    <div className="flex items-center gap-4">
      <img src={iconPath} alt={title} className="h-11 w-11" />
      <div>
        <p className="text-sm">{title}</p>
        <p className="font-bold text-sm">{value}</p>
      </div>
    </div>
  );
};
