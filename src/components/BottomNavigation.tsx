import { Users, MessageCircle, User, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  const getActiveClass = (path: string) => {
    return isActive(path) ? "text-doctor-primary" : "text-gray-500";
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-3">
      <div className="flex justify-around items-center">
        <Link to="/doctors" className="flex flex-col items-center">
          <div className={`p-1 ${getActiveClass("/doctors")}`}>
            <Users size={20} />
          </div>
          <span className={`text-xs ${getActiveClass("/doctors")}`}>Врачи</span>
        </Link>
        
        <Link to="/consultations" className="flex flex-col items-center">
          <div className={`p-1 ${getActiveClass("/consultations")}`}>
            <MessageCircle size={20} />
          </div>
          <span className={`text-xs ${getActiveClass("/consultations")}`}>Консультации</span>
        </Link>
        
        <Link to="/profile" className="flex flex-col items-center">
          <div className={`p-1 ${getActiveClass("/profile")}`}>
            <User size={20} />
          </div>
          <span className={`text-xs ${getActiveClass("/profile")}`}>Мой кабинет</span>
        </Link>
        
        <Link to="/files" className="flex flex-col items-center">
          <div className={`p-1 ${getActiveClass("/files")}`}>
            <FileText size={20} />
          </div>
          <span className={`text-xs ${getActiveClass("/files")}`}>Файлы</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
