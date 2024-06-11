import type { Rate } from "../App";

type RecentBloodProps = Rate & {
  type: "systolic" | "diastolic";
};

export const RecentBlood: React.FC<RecentBloodProps> = ({
  type,
  value,
  levels,
}) => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-2">
        <div className="w-3.5 h-3.5 bg-pink rounded-full" />
        <p className="capitalize font-bold text-sm">{type}</p>
      </div>
      <p className="font-bold text-[22px]">{value}</p>
      <div className="flex items-center mt-2 gap-2">
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
