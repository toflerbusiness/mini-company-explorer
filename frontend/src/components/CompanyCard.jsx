import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";

export default function CompanyCard({ company }) {
  return (
    <Link to={`/company/${company.id}`} className="block">
      <div
        className="bg-gray-800 p-1 rounded-lg shadow-md border border-gray-700 
                   flex items-center justify-between space-x-4 
                   hover:bg-gray-700 hover:border-purple-500 transition duration-200 ease-in-out"
      >
        <div className="flex items-center flex-grow">
          <Search className="text-gray-400 mr-3 flex-shrink-0" size={20} />{" "}
          <div>
            <p className="text-lg font-medium text-white">{company.name}</p>
            <p className="text-sm text-gray-400">{company.industry}</p>
          </div>
        </div>
        <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />{" "}
      </div>
    </Link>
  );
}
