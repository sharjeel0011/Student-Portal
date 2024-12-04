
// import React from "react";

// const LinksSection = () => {
//   const links = [
//     { title: "Fee Structure and Payments", subtitle: "Pay Now" },
//     { title: "Subjects and Electives", subtitle: "Complete Registration" },
//     { title: "Check Result", subtitle: "Coming Soon..." },
//     { title: "Documents and Forms", subtitle: "Available 24/7" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
//       {links.map((link, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//         >
//           <div className="text-blue-500 text-lg font-semibold">{link.title}</div>
//           <div className="text-gray-500 mt-2">{link.subtitle}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LinksSection;












import React from "react";

const LinksSection = () => {
  const links = [
    { title: "Fee Structure and Payments", subtitle: "Pay Now" },
    { title: "Subjects and Electives", subtitle: "Complete Registration" },
    { title: "Check Result", subtitle: "Coming Soon..." },
    { title: "Documents and Forms", subtitle: "Available 24/7" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      {links.map((link, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
        >
          <div className="bg-blue-100 rounded-lg w-full h-32 flex items-center justify-center">
            <p className="text-blue-600 text-center text-lg font-semibold">
              {link.title.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <p className="text-green-500 mt-2">{link.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default LinksSection;
