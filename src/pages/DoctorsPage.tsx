import { useState } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import DoctorCard from "@/components/DoctorCard";
import SearchBar from "@/components/SearchBar";
import DoctorFilter from "@/components/DoctorFilter";
import AppointmentModal from "@/components/AppointmentModal";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  specialtyId: string;
  experience: number;
  appointmentDate: string;
  isFree: boolean;
  imageUrl: string;
}

const DoctorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const allDoctors: Doctor[] = [
    {
      id: "1",
      name: "Ломагин Валерий Викторович",
      specialty: "Хирург",
      specialtyId: "surgeon",
      experience: 17,
      appointmentDate: "18.03.2021",
      isFree: true,
      imageUrl: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Сычева Лариса Викторовна",
      specialty: "Офтальмолог",
      specialtyId: "ophthalmologist",
      experience: 21,
      appointmentDate: "18.03.2021",
      isFree: true,
      imageUrl: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Петров Андрей Иванович",
      specialty: "Терапевт",
      specialtyId: "therapist",
      experience: 12,
      appointmentDate: "19.03.2021",
      isFree: false,
      imageUrl: "/placeholder.svg",
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (specialty: string) => {
    setActiveSpecialty(specialty);
  };

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowAppointmentModal(true);
  };

  const handleAppointmentSubmit = (data: { date: Date; time: string }) => {
    if (selectedDoctor) {
      // В реальном приложении здесь был бы API-запрос
      toast({
        title: "Запись на прием создана",
        description: `Вы записаны к врачу ${selectedDoctor.name} на ${data.date.toLocaleDateString()} в ${data.time}`,
      });
      setShowAppointmentModal(false);
    }
  };

  const filteredDoctors = allDoctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = activeSpecialty === "all" || doctor.specialtyId === activeSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 px-4 py-4 pb-24">
        <h1 className="text-xl font-bold mb-4">Наши врачи</h1>
        
        <SearchBar onSearch={handleSearch} />
        
        <DoctorFilter 
          activeSpecialty={activeSpecialty} 
          onFilterChange={handleFilterChange} 
        />
        
        <div className="mt-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} onClick={() => handleDoctorSelect(doctor)}>
                <DoctorCard
                  name={doctor.name}
                  specialty={doctor.specialty}
                  experience={doctor.experience}
                  appointmentDate={doctor.appointmentDate}
                  isFree={doctor.isFree}
                  imageUrl={doctor.imageUrl}
                />
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              Врачи не найдены
            </div>
          )}
        </div>
      </main>
      
      {showAppointmentModal && selectedDoctor && (
        <AppointmentModal
          doctorName={selectedDoctor.name}
          specialty={selectedDoctor.specialty}
          onClose={() => setShowAppointmentModal(false)}
          onSubmit={handleAppointmentSubmit}
        />
      )}
      
      <BottomNavigation />
      <Toaster />
    </div>
  );
};

export default DoctorsPage;
