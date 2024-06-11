import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

import { RecentBlood } from "./RecentBlood";
import { RateCard } from "./RateCard";

import type { User } from "../App";

type DiagnosticHistoryProps = Pick<User, "diagnosis_history">;

Chart.register(...registerables);

export const DiagnosisHistory: React.FC<DiagnosticHistoryProps> = ({
  diagnosis_history,
}) => {
  const rate = diagnosis_history[0];
  const commonStyle = {
    tension: 0.38,
    fill: false,
    borderWidth: 2,
    pointStyle: "circle",
    pointRadius: 5,
    pointHoverRadius: 7,
    pointBackgroundColor: "#fff",
  };

  const data = {
    labels: diagnosis_history
      .map((item) => `${item.month.slice(0, 3)}, ${item.year}`)
      .slice(0, 6),
    datasets: [
      {
        label: "Systolic",
        data: diagnosis_history
          .map((item) => item.blood_pressure.systolic.value)
          .slice(0, 6),
        ...commonStyle,
        borderColor: "#C26EB4",
        pointBackgroundColor: "#E66FD2",
      },
      {
        label: "Diastolic",
        data: diagnosis_history
          .map((item) => item.blood_pressure.diastolic.value)
          .slice(0, 6),
        ...commonStyle,
        borderColor: "#7E6CAB",
        pointBackgroundColor: "#8C6FE6",
      },
    ],
  };
  return (
    <div className="bg-white py-8 px-5 rounded-2xl">
      <h1 className="text-2xl font-extrabold">Diagnosis History</h1>
      <div className="flex gap-9 w-full bg-blue p-4 rounded-xl mt-10">
        <div className="w-2/3">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-lg">Blood Pressure</h2>
            <button className="flex justify-between items-center gap-4 p-2">
              Last 6 months
              <img
                src="/icons/expand_more.png"
                alt="Expand More"
                className="w-3 h-1.5"
              />
            </button>
          </div>
          <Line
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            data={data}
            height={190}
          />
        </div>
        <div className="flex flex-col gap-4 mt-3 w-1/3">
          <RecentBlood type="systolic" {...rate.blood_pressure.systolic} />
          <hr className="text-gray-400" />
          <RecentBlood type="diastolic" {...rate.blood_pressure.diastolic} />
        </div>
      </div>
      <div className="flex gap-5 w-full mt-5">
        <RateCard type="respiratory" {...rate.respiratory_rate} />
        <RateCard type="temperature" {...rate.temperature} />
        <RateCard type="heart" {...rate.heart_rate} />
      </div>
    </div>
  );
};
