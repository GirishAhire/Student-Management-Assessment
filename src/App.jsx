import { useState } from "react";
import StudentForm from "./component/StudentForm";
import StudentTable from "./component/StudentTable";

function App() {
  const [students, setStudents] = useState([]);

  const handleStudentSubmit = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  console.log(students);

  return (
    <div className="min-h-screen bg-[#111827] text-white p-4">
      <h1 className="text-4xl font-semibold mb-6 text-center">Student Management</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <StudentForm onSubmit={handleStudentSubmit} />

        <StudentTable students={students} />
      </div>
    </div>
  );
}

export default App;
