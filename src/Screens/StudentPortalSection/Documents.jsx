import React, { useState } from "react";
import { FaCalendarAlt, FaFileAlt, FaFileInvoiceDollar, FaIdCard } from "react-icons/fa"; // Importing React Icons

const RegistrationPage = () => {
  // Dynamic data for sections
  const [latestItems, setLatestItems] = useState([
    { icon: <FaCalendarAlt className="text-yellow-500 text-2xl mb-2" />, title: "Academic Calendar/Schedule" },
    { icon: <FaFileAlt className="text-yellow-500 text-2xl mb-2" />, title: "Request for Results/Certificates" },
    { icon: <FaFileInvoiceDollar className="text-yellow-500 text-2xl mb-2" />, title: "Institute Fee structure" },
    { icon: <FaIdCard className="text-yellow-500 text-2xl mb-2" />, title: "Student Bonafide" },
  ]);

  const [formItems, setFormItems] = useState([
    "Scholarship Form",
    "Different type of forms 1",
    "Different type of forms 2",
    "Different type of forms 3",
    "Different type of forms 4",
    "Different type of forms 5",
    "Different type of forms, etc.",
  ]);

  const [documentItems, setDocumentItems] = useState([
    "Other documents",
    "Other documents 2",
    "Other documents 3",
    "Other documents 4",
    "Other documents 5",
    "Other documents 6",
    "Other documents, etc.",
  ]);

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Latest Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Latest:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {latestItems.map((item, index) => (
              <div
                key={index}
                className="bg-blue-100 p-4 rounded-lg flex items-center justify-center"
              >
                <div className="text-center">
                  {item.icon} {/* React Icon component */}
                  <p className="text-blue-700 font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forms and Documents Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Forms Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Forms:</h2>
            <ul>
              {formItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-blue-100 p-2 rounded-lg mb-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Documents Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Documents:</h2>
            <ul>
              {documentItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-blue-100 p-2 rounded-lg mb-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
