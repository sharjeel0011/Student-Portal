// FeeStructurePage.js
import React from 'react';
import StudentDetails from '../../Components/StudentPortalSection/FeePayment/StudentsDetails';
import FeeStructure from '../../Components/StudentPortalSection/FeePayment/FeeSturcture';
import PastPayments from '../../Components/StudentPortalSection/FeePayment/Pastpayments';
import BankLogos from '../../Components/StudentPortalSection/FeePayment/BankLogs';

const FeeStructurePage = () => (
  <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <StudentDetails />
    <FeeStructure />
    <PastPayments />
    <BankLogos />
  </div>
);

export default FeeStructurePage;
