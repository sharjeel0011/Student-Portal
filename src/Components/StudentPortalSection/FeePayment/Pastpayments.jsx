// PastPayments.js
import React from 'react';

const PastPayments = () => (
  <div className="bg-gray-100 p-4 rounded-lg mb-6">
    <h2 className="text-lg font-semibold mb-4">Past Payments</h2>
    <div className="flex space-x-4 mb-4">
      <div>
        <label className="block text-sm font-medium" htmlFor="past-year">Select Year:</label>
        <select className="mt-1 block w-full border-gray-300 rounded-md" id="past-year">
          <option>2022-23</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="filter">Add Filter:</label>
        <select className="mt-1 block w-full border-gray-300 rounded-md" id="filter">
          <option>All Payments</option>
        </select>
      </div>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-6">Search</button>
    </div>
    <table className="w-full bg-white rounded-lg shadow-lg">
      <thead className="bg-yellow-500 text-white">
        <tr>
          <th className="p-2">Date</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Type</th>
          <th className="p-2">Transaction ID</th>
          <th className="p-2">Verification Status</th>
          <th className="p-2">Receipt</th>
        </tr>
      </thead>
      <tbody>
        {/* Payment rows */}
        <tr className="border-b">
          <td className="p-2">10/12/22</td>
          <td className="p-2">63,000.00</td>
          <td className="p-2">Bank</td>
          <td className="p-2">UBT 102934534</td>
          <td className="p-2">Pending</td>
          <td className="p-2">S 202201.pdf</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
);

export default PastPayments;
