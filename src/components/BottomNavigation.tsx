import { Users, MessageCircle, User, FileText } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-3">
      <div className="flex justify-around items-center">
        <a href="#" className="flex flex-col items-center">
          <div className="p-1 text-gray-500">
            <Users size={20} />
          </div>
          <span className="text-xs text-gray-500">Врачи</span>
        </a>
        
        <a href="#" className="flex flex-col items-center">
          <div className="p-1 text-gray-500">
            <MessageCircle size={20} />
          </div>
          <span className="text-xs text-gray-500">Консультации</span>
        </a>
        
        <a href="#" className="flex flex-col items-center">
          <div className="p-1 text-gray-500">
            <User size={20} />
          </div>
          <span className="text-xs text-gray-500">Мой кабинет</span>
        </a>
        
        <a href="#" className="flex flex-col items-center">
          <div className="p-1 text-gray-500">
            <FileText size={20} />
          </div>
          <span className="text-xs text-gray-500">Файлы</span>
        </a>
      </div>
    </div>
  );
};

export default BottomNavigation;
