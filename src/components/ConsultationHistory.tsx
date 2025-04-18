import { Calendar, Clock } from "lucide-react";

interface ConsultationData {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: "completed" | "scheduled" | "cancelled";
}

interface ConsultationHistoryProps {
  consultations: ConsultationData[];
}

const ConsultationHistory = ({ consultations }: ConsultationHistoryProps) => {
  if (consultations.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        У вас пока нет консультаций
      </div>
    );
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Завершена";
      case "scheduled":
        return "Запланирована";
      case "cancelled":
        return "Отменена";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "scheduled":
        return "text-doctor-accent";
      case "cancelled":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="space-y-4">
      {consultations.map((consultation) => (
        <div key={consultation.id} className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-800">{consultation.doctorName}</h3>
              <p className="text-sm text-gray-600">{consultation.specialty}</p>
            </div>
            <div className={`text-sm font-medium ${getStatusColor(consultation.status)}`}>
              {getStatusText(consultation.status)}
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 mt-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{consultation.date}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{consultation.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsultationHistory;
