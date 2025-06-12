import { useState } from "react";
import StudentForm from "./component/StudentForm";
import StudentTable from "./component/StudentTable";

function App() {

  const initialStudentRecords = [
    {
      id: 1,
      name: "Rahul Sharma",
      age: 20,
      mark1: 78,
      mark2: 82,
      mark3: 74,
      mark4: 80,
      mark5: 85,
      percentage: "79.80",
      division: "First Division"
    },
    {
      id: 2,
      name: "Priya Verma",
      age: 21,
      mark1: 65,
      mark2: 59,
      mark3: 70,
      mark4: 68,
      mark5: 72,
      percentage: "66.80",
      division: "First Division"
    }
  ];

  const [students, setStudents] = useState(initialStudentRecords);
  const [editStudent, setEditStudent] = useState(null);

  const handleFormSubmit = (studentData) => {
    if (editStudent) {
      const updatedList = students.map((s) =>
        s.id === editStudent.id ? studentData : s
      );
      setStudents(updatedList);
      setEditStudent(null);
    } else {
      setStudents([...students, studentData]);
    }
  };

  const handleEdit = (student) => {
    setEditStudent(student);
  };

  const handleDelete = (id) => {
    const updatedList = students.filter((s) => s.id !== id);
    setStudents(updatedList);
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white p-4">
      <h1 className="text-4xl font-semibold mb-6 text-center">Student Management</h1>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Form Section */}
        <div className="w-full lg:w-[40%]">
          <StudentForm onSubmit={handleFormSubmit} editData={editStudent} />
        </div>

        {/* Table Section with scroll and responsiveness */}
        <div className="w-full lg:w-[60%] overflow-x-auto">
          <StudentTable
            students={students}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
