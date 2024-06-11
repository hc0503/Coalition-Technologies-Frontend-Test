import type { User } from "../App";

type DiagnosticListProps = Pick<User, "diagnostic_list">;

export const DiagnosticList: React.FC<DiagnosticListProps> = ({
  diagnostic_list = [],
}) => {
  return (
    <div className="bg-white py-8 px-5 rounded-2xl text-sm overflow-hidden flex flex-col mt-8">
      <h1 className="text-2xl font-extrabold mb-10">Diagnostic List</h1>
      <div className="grid-main gap-2 rounded-full bg-gray-500 mb-5">
        <div className="p-4 font-bold">Problem/Diagnosis</div>
        <div className="p-4 font-bold">Description</div>
        <div className="p-4 font-bold">Status</div>
      </div>
      <div className="overflow-auto">
        {diagnostic_list.map((diagnostic) => (
          <div className="grid-main gap-2 border-b-2 border-gray-500">
            <div className="p-4">{diagnostic.name}</div>
            <div className="p-4">{diagnostic.description}</div>
            <div className="p-4">{diagnostic.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
