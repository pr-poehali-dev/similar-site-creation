import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarClock, X } from "lucide-react";
import { ru } from "date-fns/locale";

interface AppointmentModalProps {
  doctorName: string;
  specialty: string;
  onClose: () => void;
  onSubmit: (data: { date: Date; time: string }) => void;
}

const AppointmentModal = ({
  doctorName,
  specialty,
  onClose,
  onSubmit,
}: AppointmentModalProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");

  const availableTimes = [
    "09:00", "10:00", "11:00", "12:00", 
    "14:00", "15:00", "16:00", "17:00"
  ];

  const handleSubmit = () => {
    if (date && time) {
      onSubmit({ date, time });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Запись на прием</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <h3 className="font-medium text-gray-800">{doctorName}</h3>
            <p className="text-sm text-gray-600">{specialty}</p>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Выберите дату
            </label>
            <div className="border rounded-md p-2">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={ru}
                className="w-full"
                disabled={(date) => {
                  // Disable weekends and past dates
                  const now = new Date();
                  now.setHours(0, 0, 0, 0);
                  return (
                    date < now ||
                    date.getDay() === 0 ||
                    date.getDay() === 6
                  );
                }}
              />
            </div>
          </div>
          
          {date && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Выберите время
              </label>
              <div className="grid grid-cols-4 gap-2">
                {availableTimes.map((t) => (
                  <button
                    key={t}
                    className={`py-2 px-1 text-sm rounded-md ${
                      time === t
                        ? "bg-doctor-primary text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => setTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <Button
            className="w-full bg-doctor-primary hover:bg-doctor-accent"
            disabled={!date || !time}
            onClick={handleSubmit}
          >
            <CalendarClock className="h-4 w-4 mr-2" />
            Записаться на прием
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
