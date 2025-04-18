import { Button } from "@/components/ui/button";

const ConsultationCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-4">
      <h2 className="text-xl font-medium text-doctor-accent mb-2">Срочная консультация</h2>
      <p className="text-sm text-gray-600 mb-3 border-b pb-3">В течение 5 минут врач с Вами свяжется</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="font-medium text-gray-800">Терапевты ДокторЛечит</div>
        <div className="text-doctor-accent font-medium">Бесплатно</div>
      </div>
      
      <Button className="w-full bg-doctor-primary hover:bg-doctor-accent text-white font-medium py-2 rounded-full">
        Начать консультацию
      </Button>
      
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="relative">
          <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md appearance-none text-gray-700">
            <option>Для всех</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 5L11 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="relative">
          <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md appearance-none text-gray-700">
            <option>Все</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 5L11 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCard;
