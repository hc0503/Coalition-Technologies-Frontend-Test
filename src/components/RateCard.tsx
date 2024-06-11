import type { Rate } from "../App";

type RateCardProps = Rate & {
  type: "heart" | "respiratory" | "temperature";
};

export const RateCard: React.FC<RateCardProps> = ({ type, value, levels }) => {
  let iconPath = "/icons/temperature.png";
  let title = "Temperature";
  let unit = "°F";
  let bgColor = "#FFE6E9";
  switch (type) {
    case "heart":
      title = "Heart Rate";
      iconPath = "/icons/HeartBPM.png";
      unit = "bpm";
      bgColor = "#FFE6F1";
      break;
    case "respiratory":
      title = "Respiratory Rate";
      iconPath = "/icons/respiratory.png";
      unit = "bpm";
      bgColor = "#E0F3FA";
      break;
    default:
      title = "Temperature";
      iconPath = "/icons/temperature.png";
      unit = "°F";
      bgColor = "#FFE6E9";
  }
  return (
    <div className="p-4 rounded-xl w-full" style={{ backgroundColor: bgColor }}>
      <img src={iconPath} alt={title} className="w-24 h-24 mb-4" />
      <p className="font-medium text-base">{title}</p>
      <p className="font-extrabold text-3xl">
        {value} {unit}
      </p>
      <div className="flex items-center mt-4 gap-2">
        {levels === "Higher than Average" && (
          <img src="/icons/ArrowUp.png" alt={levels} className="w-3 h-2" />
        )}
        {levels === "Lower than Average" && (
          <img src="/icons/ArrowDown.png" alt={levels} className="w-3 h-2" />
        )}
        <p className="text-sm">{levels}</p>
      </div>
    </div>
  );
};
