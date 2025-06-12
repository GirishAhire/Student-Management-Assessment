import { useState } from "react";

const StudentForm = ({ onSubmit }) => {

    const studentData = {
        name: "",
        age: "",
        mark1: "",
        mark2: "",
        mark3: "",
        mark4: "",
        mark5: "",
    }

    const [student, setStudent] = useState(studentData);

    const handleChange = (event) => {

        const inputName = event.target.name;
        const inputValue = event.target.value;

        setStudent({ ...student, [inputName]: inputValue });
    };

    const marks = [

        Number(student.mark1),
        Number(student.mark2),
        Number(student.mark3),
        Number(student.mark4),
        Number(student.mark5),
    ];

    const totalMarks = marks.filter(m => !isNaN(m)).length;
    const total = marks.reduce((sum, mark) => sum + (isNaN(mark) ? 0 : mark), 0);
    const percentage = totalMarks === 5 ? (total / 5).toFixed(2) : "";

    let division = "";

    if (percentage) {
        const percent = parseFloat(percentage);
        if (percent >= 60) division = "First Division";
        else if (percent >= 45) division = "Second Division";
        else if (percent >= 33) division = "Third Division";
        else division = "Fail";
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        


        const newStudent = {
            ...student,
            id: Date.now(),
            percentage,
            division,
        };

        console.log(newStudent);

        onSubmit(newStudent);
        handleClear();
    };

    const handleClear = () => {
        setStudent(studentData)
    };

    return (
        <div className="dark:bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 text-white">
                <h2 className="text-2xl font-bold text-center mb-2">Enter Student Record:</h2>

                <label>Student Name:</label>

                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <label>Student Age:</label>
                <input
                    type="number"
                    name="age"
                    value={student.age}
                    onChange={handleChange}
                    min="5"
                    max="100"
                    className="w-full px-6 py-2 rounded-md bg-white/10 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i}>

                        <label>Mark {i}:</label>

                        <input
                            type="number"
                            name={`mark${i}`}
                            value={student[`mark${i}`]}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md font-semibold hover:from-blue-600 hover:to-indigo-700 transition duration-200"
                >
                    Submit
                </button>

                <button
                    type="button"
                    onClick={handleClear}
                    className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition duration-200"
                >
                    Clear
                </button>

                <div>
                    <label>Percentage:</label>
                    <input
                        type="text"
                        value={percentage ? `${percentage}%` : ""}
                        readOnly
                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-md border border-gray-500"
                    />
                </div>

                <div>
                    <label>Division:</label>
                    <input
                        type="text"
                        value={division}
                        readOnly
                        className="w-full px-4 py-2 bg-gray-600 text-white rounded-md border border-gray-500"
                    />
                </div>
            </form>
        </div>
    );
};

export default StudentForm;
