import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Briefcase, Users, ArrowLeft } from "lucide-react";

export default function CompanyDetail() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [error, setError] = useState(null);
  console.log(id);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get(`/api/companies/${id}`);
        const data = res.data;
        setCompany(data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError("Company not found");
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchCompany();
  }, [id]);

  if (error) {
    return <div className="text-red-400 p-6">{error}</div>;
  }

  if (!company) {
    return <div className="text-white p-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center">
      <div className="bg-gray-800 px-10 py-12 rounded-xl shadow-lg max-w-2xl w-full border border-gray-700">
        {/* Company Name */}
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-10 text-blue-300">
          {company.name}
        </h2>

        {/* Divider starts after the heading */}
        <div className="space-y-2 divide-y divide-gray-600">
          <div className="flex items-center text-xl pb-2"></div>
          {/* Row 1 */}
          <div className="flex items-center text-2xl pt-4 pb-2">
            <MapPin className="mr-3 text-red-400 flex-shrink-0" size={26} />
            <strong className="font-semibold text-gray-200 w-32">
              Location:
            </strong>
            <span className="text-white">{company.location}</span>
          </div>

          {/* Row 2 */}
          <div className="flex items-center text-2xl pt-4 pb-2">
            <Briefcase
              className="mr-3 text-green-400 flex-shrink-0"
              size={26}
            />
            <strong className="font-semibold text-gray-200 w-32">
              Industry:
            </strong>
            <span className="text-white">{company.industry}</span>
          </div>

          {/* Row 3 */}
          <div className="flex items-center text-2xl pt-4 pb-2">
            <Users className="mr-3 text-purple-400 flex-shrink-0" size={26} />
            <strong className="font-semibold text-gray-200 w-32">
              Employees:
            </strong>
            <span className="text-white">
              {company.employees.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="absolute bottom-6 w-full text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white 
                 font-bold rounded-full shadow-md transition-colors duration-200 
                 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:ring-opacity-75 group"
        >
          <ArrowLeft
            className="mr-2 group-hover:-translate-x-1 transition-transform duration-200"
            size={25}
          />
          Back to Search
        </Link>
      </div>
    </div>
  );
}
