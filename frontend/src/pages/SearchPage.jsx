import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import CompanyCard from "../components/CompanyCard";
import axios from "axios";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const queryRef = useRef(query);

  useEffect(() => {
    queryRef.current = query;
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const cleanedQuery = queryRef.current.trim();

      if (!cleanedQuery) {
        setResults([]);
        return;
      }

      const searchCompanies = async () => {
        setLoading(true);
        try {
          const res = await axios.get(
            `/api/companies?q=${encodeURIComponent(cleanedQuery)}`
          );
          setResults(res.data);
        } catch (err) {
          console.error("Error fetching companies", err);
        } finally {
          setLoading(false);
        }
      };

      searchCompanies();
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 font-inter">
      <div className="w-full max-w-xl mt-16 mb-8">
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      {loading && (
        <p className="text-gray-400 text-lg mt-4">Loading companies...</p>
      )}

      {!loading && results.length > 0 && (
        <div className="w-full max-w-xl px-2 sm:px-0 space-y-3">
          {results.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      )}

      {!loading && query.trim() && results.length === 0 && (
        <p className="text-gray-400 text-lg mt-4">
          No companies found for "{query}".
        </p>
      )}

      {!loading && !query.trim() && results.length === 0 && (
        <p className="text-gray-500 text-lg mt-4">
          Start typing to search for companies!
        </p>
      )}
    </div>
  );
}
