import type { User } from "../App"

type LabResultsProps = Pick<User, 'lab_results'>;

export const LabResults: React.FC<LabResultsProps> = ({lab_results = []}) => {
    return (
        <div className="bg-white py-8 px-5 mt-8 rounded-2xl flex flex-col overflow-hidden">
            <h1 className="font-extrabold text-2xl">
                Lab Results
            </h1>
            <ul className="grid gap-1 overflow-y-auto flex-1">
                {lab_results.map(item => (
                    <li key={item} className="flex justify-between px-4 py-3 hover:bg-[#F6F7F8]">
                        {item}
                        <button>
                            <img src="/icons/download.png" alt="Download" className="w-5 h-5" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}