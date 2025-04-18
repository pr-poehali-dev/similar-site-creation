import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative mb-4">
      <Input
        type="text"
        placeholder="Поиск врача или услуги"
        className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-200"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        onClick={handleSearch}
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;
