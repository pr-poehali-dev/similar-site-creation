import { Search, HelpCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center mr-2">
          <div className="w-8 h-8 bg-doctor-primary rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.66667 2.66667L4 8.66667H8L7.33333 13.3333L12 7.33333H8L8.66667 2.66667Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="font-bold text-lg text-gray-800">ДОКТОР ЛЕЧИТ</div>
      </div>
      <div className="flex items-center">
        <button className="mr-2 p-2">
          <Search className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2">
          <HelpCircle className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
