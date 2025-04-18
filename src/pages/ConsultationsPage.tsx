import { useState } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import ConsultationHistory from "@/components/ConsultationHistory";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ConsultationsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingConsultations = [
    {
      id: "1",
      doctorName: "Ломагин Валерий Викторович",
      specialty: "Хирург",
      date: "18.03.2021",
      time: "14:00",
      status: "scheduled",
    },
  ];

  const pastConsultations = [
    {
      id: "2",
      doctorName: "Сычева Лариса Викторовна",
      specialty: "Офтальмолог",
      date: "10.03.2021",
      time: "11:30",
      status: "completed",
    },
    {
      id: "3",
      doctorName: "Петров Андрей Иванович",
      specialty: "Терапевт",
      date: "05.03.2021",
      time: "10:00",
      status: "completed",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 px-4 py-4 pb-24">
        <h1 className="text-xl font-bold mb-4">Мои консультации</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
          <TabsList className="w-full grid grid-cols-2 bg-white mb-4">
            <TabsTrigger 
              value="upcoming" 
              className="data-[state=active]:bg-doctor-secondary data-[state=active]:text-doctor-primary"
            >
              Предстоящие
            </TabsTrigger>
            <TabsTrigger 
              value="past"
              className="data-[state=active]:bg-doctor-secondary data-[state=active]:text-doctor-primary"
            >
              Прошедшие
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            <ConsultationHistory consultations={upcomingConsultations} />
          </TabsContent>
          
          <TabsContent value="past">
            <ConsultationHistory consultations={pastConsultations} />
          </TabsContent>
        </Tabs>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default ConsultationsPage;
