import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: number;
  appointmentDate: string;
  isFree: boolean;
  imageUrl?: string;
  onClick?: () => void;
}

const DoctorCard = ({
  name,
  specialty,
  experience,
  appointmentDate,
  isFree = true,
  imageUrl = "/placeholder.svg",
  onClick
}: DoctorCardProps) => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <div className="border-b border-gray-200 pb-4 mb-4 cursor-pointer" onClick={handleButtonClick}>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-sm text-gray-600">
            {specialty}, {experience} лет опыта
          </div>
          <div className="font-medium text-gray-800">{name}</div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 mb-3">
        <div className="flex items-center text-doctor-accent">
          <span className="text-sm">Ближайший прием: {appointmentDate}</span>
        </div>
        <div className="text-doctor-accent font-medium">
          {isFree ? "Бесплатно" : "Платно"}
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full border-doctor-accent text-doctor-accent hover:bg-doctor-secondary flex items-center justify-center gap-2"
        onClick={handleButtonClick}
      >
        <CalendarClock className="h-4 w-4" />
        <span>Записаться на прием</span>
      </Button>
    </div>
  );
};

export default DoctorCard;
