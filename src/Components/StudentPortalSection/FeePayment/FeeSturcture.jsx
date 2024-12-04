// FeeStructure.js
import React from 'react';

const FeeStructure = () => (
  <div className="bg-gray-100 p-4 rounded-lg mb-6">
    <h2 className="text-lg font-semibold mb-4">Fee Structure</h2>
    <div className="flex space-x-4 mb-4">
      <div>
        <label className="block text-sm font-medium" htmlFor="year">Select Year:</label>
        <select className="mt-1 block w-full border-gray-300 rounded-md" id="year">
          <option>3rd Year</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="semester">Select Semester:</label>
        <select className="mt-1 block w-full border-gray-300 rounded-md" id="semester">
          <option>6th (Spring)</option>
        </select>
      </div>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-6">Search</button>
    </div>
    <table className="w-full bg-white rounded-lg shadow-lg">
      <thead className="bg-yellow-500 text-white">
        <tr>
          <th className="p-2">Type</th>
          <th className="p-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* Fee rows */}
        <tr className="border-b">
          <td className="p-2">Tuition Fee</td>
          <td className="p-2">63,000.00</td>
        </tr>
        <tr className="border-b">
          <td className="p-2">Other Institute Fee</td>
          <td className="p-2">11,000.00</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
    <div className="flex justify-between items-center mt-4">
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Pay Now</button>
      <button className="bg-gray-300 text-black px-4 py-2 rounded-md">Receipt Upload</button>
    </div>
  </div>
);

export default FeeStructure;
