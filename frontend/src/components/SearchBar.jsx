import { Search } from "lucide-react";
export default function SearchBar({ query, setQuery }) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative flex items-center w-full max-w-xl">
        {/* Gray background for icon area */}
        <div className="absolute left-0 h-full w-15 flex items-center justify-center bg-gray-700 rounded-l-xl">
          <Search className="text-white" size={26} />
        </div>

        <input
          type="text"
          placeholder="Search companies..."
          className="w-full pl-16 pr-6 py-5 text-3xl rounded-xl bg-zinc-900 border border-zinc-700 text-white 
       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 
       focus:border-transparent shadow-[0_0_10px_rgba(0,0,0,0.5)] 
       focus:shadow-[0_0_15px_#a855f7] transition duration-200 ease-in-out"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
