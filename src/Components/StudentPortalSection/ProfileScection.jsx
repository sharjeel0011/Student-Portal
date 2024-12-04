// import React from "react";

// const ProfileSection = () => {
//   return (
//     <div className="col-span-1 bg-white p-4 rounded-lg shadow-md">
//       <div className="flex flex-col items-center">
//         <img
//           src="https://storage.googleapis.com/a1aa/image/jWgTeOHdMjX4OChAkG5Vu98TTEEUVBplYJ5OPkcoenXsGfunA.jpg"
//           alt="Profile"
//           className="rounded-full w-24 h-24 mb-4"
//         />
//         <h2 className="text-xl font-semibold">M Talha Haider</h2>
//         <p className="text-gray-600">Course: B.Tech</p>
//         <p className="text-gray-600">Batch: 2020 - 24</p>
//         <p className="text-gray-600">Branch: CSE</p>
//         <p className="text-gray-600">Roll: 200XXXX</p>
//         <p className="text-gray-600">Phone: +92XXXXXXXXXX</p>
//         <p className="text-gray-600">Email: example@example.com</p>
//         <p className="text-gray-600 text-center">
//           Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Integer nec odio.
//         </p>
//         <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full">
//           Request Edit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;












import React from "react";

const ProfileSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col justify-between">
        <div className="flex flex-col items-center flex-grow">
          <img
            src="https://storage.googleapis.com/a1aa/image/jWgTeOHdMjX4OChAkG5Vu98TTEEUVBplYJ5OPkcoenXsGfunA.jpg"
            alt="Profile"
            className="rounded-full w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-semibold">M Talha Haider</h2>
          <p className="text-gray-600">Course: B.Tech</p>
          <p className="text-gray-600">Batch: 2020 - 24</p>
          <p className="text-gray-600">Branch: CSE</p>
          <p className="text-gray-600">Roll: 200XXXX</p>
          <p className="text-gray-600">Phone: +92XXXXXXXXXX</p>
          <p className="text-gray-600">Email: example@example.com</p>
          <p className="text-gray-600 text-center">
            Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio.
          </p>
        </div>

        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full self-center">
          Request Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
