import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DoctorFilterProps {
  activeSpecialty: string;
  onFilterChange: (specialty: string) => void;
}

const DoctorFilter = ({ activeSpecialty, onFilterChange }: DoctorFilterProps) => {
  const specialties = [
    { id: "all", label: "Все" },
    { id: "therapist", label: "Терапевты" },
    { id: "surgeon", label: "Хирурги" },
    { id: "ophthalmologist", label: "Офтальмологи" }
  ];

  return (
    <div className="mb-4 overflow-x-auto">
      <Tabs defaultValue={activeSpecialty} onValueChange={onFilterChange}>
        <TabsList className="bg-white p-1 flex w-full">
          {specialties.map((specialty) => (
            <TabsTrigger
              key={specialty.id}
              value={specialty.id}
              className={`flex-1 data-[state=active]:bg-doctor-secondary data-[state=active]:text-doctor-primary ${
                activeSpecialty === specialty.id ? "font-medium" : ""
              }`}
            >
              {specialty.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default DoctorFilter;
