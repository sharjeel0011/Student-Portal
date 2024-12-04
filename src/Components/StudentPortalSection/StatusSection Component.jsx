// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const StatusSection = () => {
//   const statuses = [
//     { title: "Current Semester", value: "6th" },
//     { title: "Registration Status", icon: <FaCheckCircle className="text-yellow-500 text-2xl" /> },
//     { title: "Payment Status", icon: <FaCheckCircle className="text-green-500 text-2xl" /> },
//     { title: "Current CGPA", value: "7.52" },
//   ];

//   return (
//     <div className="col-span-2 grid grid-cols-4 gap-4">
//       {statuses.map((status, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
//         >
//           {status.value ? (
//             <div className="text-2xl font-bold">{status.value}</div>
//           ) : (
//             status.icon
//           )}
//           <div className="text-gray-600">{status.title}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatusSection;




import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const StatusSection = () => {
  const statuses = [
    { title: "Current Semester", value: "6th" },
    { title: "Registration Status", icon: <FaCheckCircle className="text-yellow-500 text-2xl" /> },
    { title: "Payment Status", icon: <FaCheckCircle className="text-green-500 text-2xl" /> },
    { title: "Current CGPA", value: "7.52" },
  ];

  return (
    <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Status Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        {statuses.map((status, index) => (
          <div key={index} className="flex flex-col items-center">
            {status.value ? (
              <div className="text-2xl font-bold">{status.value}</div>
            ) : (
              status.icon
            )}
            <div className="text-gray-600 text-center">{status.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusSection;
