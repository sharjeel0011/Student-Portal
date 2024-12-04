// import React from "react";

// const RegistrationPage = () => {
//   return (
//     <div className="bg-gray-100 p-4">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <div className="flex justify-between items-center border-b pb-4 mb-4">
//           <div>
//             <p className="font-semibold">Name: M Talha Haider</p>
//             <p>Roll: 200XXXXXX</p>
//             <p>Course: B.Tech</p>
//             <p>Batch: 2020-24</p>
//             <p>Branch: CSE</p>
//           </div>
//           <div className="text-right">
//             <p className="font-semibold">Registration Status</p>
//             <p>Current Semester: 6th (2023 Spring)</p>
//             <p>Fee Payment: Completed</p>
//             <p>Active Backlog: 0</p>
//             <p className="text-red-500">Current Registration Status: Incomplete</p>
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <p className="font-semibold mb-4">Complete your Registration:</p>
//           <div className="mb-4">
//             <label htmlFor="semester" className="block mb-2">
//               Choose Semester:
//             </label>
//             <select id="semester" className="w-full p-2 border rounded">
//               <option>7th Semester (2023 - 24 Autumn)</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <p className="mb-2">Electives Subjects: (Choose Priority Wise)</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//               <select className="w-full p-2 border rounded">
//                 <option>A. Choose</option>
//               </select>
//               <select className="w-full p-2 border rounded">
//                 <option>B. Choose</option>
//               </select>
//               <select className="w-full p-2 border rounded">
//                 <option>C. Choose</option>
//               </select>
//               <select className="w-full p-2 border rounded">
//                 <option>D. Choose</option>
//               </select>
//             </div>
//           </div>
//           <div className="mb-4">
//             <p className="mb-2">Apply for Minor:</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               <select className="w-full p-2 border rounded">
//                 <option>A. Choose</option>
//               </select>
//               <select className="w-full p-2 border rounded">
//                 <option>B. Choose</option>
//               </select>
//               <select className="w-full p-2 border rounded">
//                 <option>C. Choose</option>
//               </select>
//             </div>
//           </div>
//           <p className="text-xs text-gray-500 mb-4">
//             *By clicking on submit button you agree that all the information
//             provided by you is True. If it's found to be false your registration
//             will not be considered.
//           </p>
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded">
//             Submit Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;











import React, { useState } from "react";

const RegistrationPage = () => {
  // State for storing user data dynamically
  const [studentData, setStudentData] = useState({
    name: "M Talha Haider",
    roll: "200XXXXXX",
    course: "B.Tech",
    batch: "2020-24",
    branch: "CSE",
    currentSemester: "6th (2023 Spring)",
    feeStatus: "Completed",
    backlog: 0,
    registrationStatus: "Incomplete",
    semester: "7th Semester (2023 - 24 Autumn)",
    electives: {
      elective1: "A. Choose",
      elective2: "B. Choose",
      elective3: "C. Choose",
      elective4: "D. Choose",
    },
    minors: {
      minor1: "A. Choose",
      minor2: "B. Choose",
      minor3: "C. Choose",
    },
  });

  // Handle change for dynamic fields
  const handleFieldChange = (field, value) => {
    setStudentData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Handle change for nested fields (electives, minors)
  const handleNestedChange = (field, nestedField, value) => {
    setStudentData((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        [nestedField]: value,
      },
    }));
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <p className="font-semibold">Name: {studentData.name}</p>
            <p>Roll: {studentData.roll}</p>
            <p>Course: {studentData.course}</p>
            <p>Batch: {studentData.batch}</p>
            <p>Branch: {studentData.branch}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">Registration Status</p>
            <p>Current Semester: {studentData.currentSemester}</p>
            <p>Fee Payment: {studentData.feeStatus}</p>
            <p>Active Backlog: {studentData.backlog}</p>
            <p className="text-red-500">Current Registration Status: {studentData.registrationStatus}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="font-semibold mb-4">Complete your Registration:</p>
          
          {/* Semester Selection */}
          <div className="mb-4">
            <label htmlFor="semester" className="block mb-2">
              Choose Semester:
            </label>
            <select
              id="semester"
              className="w-full p-2 border rounded"
              value={studentData.semester}
              onChange={(e) => handleFieldChange("semester", e.target.value)}
            >
              <option>7th Semester (2023 - 24 Autumn)</option>
            </select>
          </div>

          {/* Electives Selection */}
          <div className="mb-4">
            <p className="mb-2">Electives Subjects: (Choose Priority Wise)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Object.keys(studentData.electives).map((electiveKey, index) => (
                <select
                  key={index}
                  className="w-full p-2 border rounded"
                  value={studentData.electives[electiveKey]}
                  onChange={(e) =>
                    handleNestedChange("electives", electiveKey, e.target.value)
                  }
                >
                  <option>{studentData.electives[electiveKey]}</option>
                  <option>{`New Option ${index + 1}`}</option>
                </select>
              ))}
            </div>
          </div>

          {/* Minors Selection */}
          <div className="mb-4">
            <p className="mb-2">Apply for Minor:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.keys(studentData.minors).map((minorKey, index) => (
                <select
                  key={index}
                  className="w-full p-2 border rounded"
                  value={studentData.minors[minorKey]}
                  onChange={(e) =>
                    handleNestedChange("minors", minorKey, e.target.value)
                  }
                >
                  <option>{studentData.minors[minorKey]}</option>
                  <option>{`New Minor ${index + 1}`}</option>
                </select>
              ))}
            </div>
          </div>

          {/* Disclaimer Text */}
          <p className="text-xs text-gray-500 mb-4">
            *By clicking on submit button you agree that all the information
            provided by you is True. If it's found to be false your registration
            will not be considered.
          </p>

          {/* Submit Button */}
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
