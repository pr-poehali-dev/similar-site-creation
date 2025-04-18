import Header from "@/components/Header";
import ConsultationCard from "@/components/ConsultationCard";
import DoctorCard from "@/components/DoctorCard";
import BottomNavigation from "@/components/BottomNavigation";

const HomePage = () => {
  const doctors = [
    {
      name: "Ломагин Валерий Викторович",
      specialty: "Хирург",
      experience: 17,
      appointmentDate: "18.03.2021",
      isFree: true,
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Сычева Лариса Викторовна",
      specialty: "Офтальмолог",
      experience: 21,
      appointmentDate: "18.03.2021",
      isFree: true,
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 px-4 py-4 pb-24">
        <ConsultationCard />
        
        <div className="mt-2">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience}
              appointmentDate={doctor.appointmentDate}
              isFree={doctor.isFree}
              imageUrl={doctor.imageUrl}
            />
          ))}
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
