import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

function StudentTable({ students }) {
    const [nameFilter, setNameFilter] = useState("");
    const [divisionFilter, setDivisionFilter] = useState("");

    const filteredStudents = students.filter((student) => {
        const nameMatch = student.name.toLowerCase().includes(nameFilter.toLowerCase());
        const divisionMatch = divisionFilter ? student.division === divisionFilter : true;
        return nameMatch && divisionMatch;
    });

    return (
        <div className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                Student Records
            </h2>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
                {/* Name Filter */}
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm w-full md:w-1/3">
                    <FaSearch className="text-gray-600 dark:text-gray-300" />
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                        className="bg-transparent outline-none text-sm w-full text-gray-900 dark:text-white placeholder:text-gray-400"
                    />
                </div>

                {/* Division Filter */}
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm w-full md:w-1/3">
                    <FaFilter className="text-gray-600 dark:text-gray-300" />
                    <select
                        value={divisionFilter}
                        onChange={(e) => setDivisionFilter(e.target.value)}
                        className="bg-gray-100 dark:bg-gray-700 border-none rounded-full px-3 py-1 text-sm w-full text-gray-900 dark:text-white appearance-none focus:outline-none"
                    >
                        <option className="bg-white dark:bg-gray-800 text-black dark:text-white" value="">
                            All Divisions
                        </option>
                        <option className="bg-white dark:bg-gray-800 text-black dark:text-white" value="First Division">
                            First Division
                        </option>
                        <option className="bg-white dark:bg-gray-800 text-black dark:text-white" value="Second Division">
                            Second Division
                        </option>
                        <option className="bg-white dark:bg-gray-800 text-black dark:text-white" value="Third Division">
                            Third Division
                        </option>
                        <option className="bg-white dark:bg-gray-800 text-black dark:text-white" value="Fail">
                            Fail
                        </option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-hidden">
                <table className="w-full text-sm text-left table-auto border-collapse">
                    <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base font-bold">
                        <tr className="text-center">
                            <th className="px-4 py-3 whitespace-nowrap rounded-tl-xl">Name</th>
                            <th className="px-4 py-3 whitespace-nowrap">Age</th>
                            <th className="px-4 py-3 whitespace-nowrap">Mark 1</th>
                            <th className="px-4 py-3 whitespace-nowrap">Mark 2</th>
                            <th className="px-4 py-3 whitespace-nowrap">Mark 3</th>
                            <th className="px-4 py-3 whitespace-nowrap">Mark 4</th>
                            <th className="px-4 py-3 whitespace-nowrap">Mark 5</th>
                            <th className="px-4 py-3 whitespace-nowrap">Percentage</th>
                            <th className="px-4 py-3 whitespace-nowrap">Division</th>
                            <th className="px-4 py-3 text-center whitespace-nowrap">Edit</th>
                            <th className="px-4 py-3 text-center whitespace-nowrap rounded-tr-xl">Delete</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                                    <td className="px-4 py-3">{student.name}</td>
                                    <td className="px-4 py-3">{student.age}</td>
                                    <td className="px-4 py-3">{student.mark1}</td>
                                    <td className="px-4 py-3">{student.mark2}</td>
                                    <td className="px-4 py-3">{student.mark3}</td>
                                    <td className="px-4 py-3">{student.mark4}</td>
                                    <td className="px-4 py-3">{student.mark5}</td>
                                    <td className="px-4 py-3">{student.percentage}%</td>
                                    <td className="px-4 py-3">{student.division}</td>
                                    <td className="px-4 py-3 text-center">
                                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-xs">
                                            Edit
                                        </button>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="11" className="text-center text-gray-500 py-6 dark:text-gray-300">
                                    No matching student records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentTable;
