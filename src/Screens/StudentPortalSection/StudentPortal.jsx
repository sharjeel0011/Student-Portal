// import React from "react";
// import ProfileSection from "../../Components/StudentPortalSection/ProfileScection";
// import StatusSection from "../../Components/StudentPortalSection/StatusSection Component";
// import LinksSection from "../../Components/StudentPortalSection/LinksSection Component";

// const ProfilePage = () => {
//   return (
//    <>
//         <ProfileSection />
//         <div className="col-span-2 grid grid-cols-2 gap-4">
//           <StatusSection />
//           <LinksSection />
//         </div>
  
//   </>
//   );
// };

// export default ProfilePage;
















import React from "react";
import ProfileSection from "../../Components/StudentPortalSection/ProfileScection";
import StatusSection from "../../Components/StudentPortalSection/StatusSection Component";
import LinksSection from "../../Components/StudentPortalSection/LinksSection Component";

const ProfilePage = () => {
  return (
    <div className="max-w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 min-h-screen">
      {/* Profile Section */}
      <div className="md:col-span-1 bg-white rounded-lg p-4 shadow-sm">
        <ProfileSection />
      </div>

      {/* Right Section with Status and Links */}
      <div className="md:col-span-2 grid grid-cols-1 gap-4">
        {/* Status Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <StatusSection />
        </div>
        {/* Links Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <LinksSection />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
