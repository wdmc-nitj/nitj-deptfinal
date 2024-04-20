import React from 'react';
import Heading from '../../components/Heading';

const MSMEData = [
  { 'S.No': 1, FY: '2023-24', 'City Name': 'Jalandhar', 'Type of Programme': 'Programme Type', 'Proposed Start Date': 'Jan25, 2024', 'Target Group':'General', 'Partner Institution':'', 'Participation Fee':'0.00', 'Quarter':'Q4', 'State Name':'Punjab', 'District Name':'Jalandhar', 'Proposed End Date':'Jan25, 2024', 'Eligibility Criteria':'', 'Participation No':'0', 'Total Fees':'0.00' },
  { 'S.No': 1, FY: '2023-24', 'City Name': 'Jalandhar', 'Type of Programme': 'Programme Type', 'Proposed Start Date': 'Jan25, 2024', 'Target Group':'General', 'Partner Institution':'', 'Participation Fee':'0.00', 'Quarter':'Q4', 'State Name':'Punjab', 'District Name':'Jalandhar', 'Proposed End Date':'Jan25, 2024', 'Eligibility Criteria':'', 'Participation No':'0', 'Total Fees':'0.00' },
  { 'S.No': 1, FY: '2023-24', 'City Name': 'Jalandhar', 'Type of Programme': 'Programme Type', 'Proposed Start Date': 'Jan25, 2024', 'Target Group':'General', 'Partner Institution':'', 'Participation Fee':'0.00', 'Quarter':'Q4', 'State Name':'Punjab', 'District Name':'Jalandhar', 'Proposed End Date':'Jan25, 2024', 'Eligibility Criteria':'', 'Participation No':'0', 'Total Fees':'0.00' },
  { 'S.No': 1, FY: '2023-24', 'City Name': 'Jalandhar', 'Type of Programme': 'Programme Type', 'Proposed Start Date': 'Jan25, 2024', 'Target Group':'General', 'Partner Institution':'', 'Participation Fee':'0.00', 'Quarter':'Q4', 'State Name':'Punjab', 'District Name':'Jalandhar', 'Proposed End Date':'Jan25, 2024', 'Eligibility Criteria':'', 'Participation No':'0', 'Total Fees':'0.00' },
  { 'S.No': 1, FY: '2023-24', 'City Name': 'Jalandhar', 'Type of Programme': 'Programme Type', 'Proposed Start Date': 'Jan25, 2024', 'Target Group':'General', 'Partner Institution':'', 'Participation Fee':'0.00', 'Quarter':'Q4', 'State Name':'Punjab', 'District Name':'Jalandhar', 'Proposed End Date':'Jan25, 2024', 'Eligibility Criteria':'', 'Participation No':'0', 'Total Fees':'0.00' },
  { 'S.No': 1, FY: '2023-24', 'City Name': 'Jalandhar', 'Type of Programme': 'Programme Type', 'Proposed Start Date': 'Jan25, 2024', 'Target Group':'General', 'Partner Institution':'', 'Participation Fee':'0.00', 'Quarter':'Q4', 'State Name':'Punjab', 'District Name':'Jalandhar', 'Proposed End Date':'Jan25, 2024', 'Eligibility Criteria':'', 'Participation No':'0', 'Total Fees':'0.00' },
  { 'S.No': 1, FY: '2023-24', 'City Name': 'Jalandhar', 'Type of Programme': 'Programme Type', 'Proposed Start Date': 'Jan25, 2024', 'Target Group':'General', 'Partner Institution':'', 'Participation Fee':'0.00', 'Quarter':'Q4', 'State Name':'Punjab', 'District Name':'Jalandhar', 'Proposed End Date':'Jan25, 2024', 'Eligibility Criteria':'', 'Participation No':'0', 'Total Fees':'0.00' },
  { 'S.No': 1, FY: '2023-24', 'City Name': 'Jalandhar', 'Type of Programme': 'Programme Type', 'Proposed Start Date': 'Jan25, 2024', 'Target Group':'General', 'Partner Institution':'', 'Participation Fee':'0.00', 'Quarter':'Q4', 'State Name':'Punjab', 'District Name':'Jalandhar', 'Proposed End Date':'Jan25, 2024', 'Eligibility Criteria':'', 'Participation No':'0', 'Total Fees':'0.00' },
];

const MSME = () => {
  return (
    <div className='w-full max-w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px]'>
      <Heading name="MSME" />
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-blue-500 py-2 px-4">S.No</th>
              <th className="border border-blue-500 py-2 px-4">FY</th>
              <th className="border border-blue-500 py-2 px-4">City Name</th>
              <th className="border border-blue-500 py-2 px-4">Type of Programme</th>
              <th className="border border-blue-500 py-2 px-4">Target Group</th>
              <th className="border border-blue-500 py-2 px-4">Partner Institution</th>
              <th className="border border-blue-500 py-2 px-4">Participation Fee</th>
              <th className="border border-blue-500 py-2 px-4">Quarter</th>
              <th className="border border-blue-500 py-2 px-4">State Name</th>
              <th className="border border-blue-500 py-2 px-4">District Name</th>
              <th className="border border-blue-500 py-2 px-4">Proposed End Date</th>
              <th className="border border-blue-500 py-2 px-4">Eligibility Criteria</th>
              <th className="border border-blue-500 py-2 px-4">Participation Number</th>
              <th className="border border-blue-500 py-2 px-4">Total Fees</th>
            </tr>
          </thead>
          <tbody>
            {MSMEData.map((data, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="border border-blue-500 py-2 px-4">{data['S.No']}</td>
                <td className="border border-blue-500 py-2 px-4">{data.FY}</td>
                <td className="border border-blue-500 py-2 px-4">{data['City Name']}</td>
                <td className="border border-blue-500 py-2 px-4">{data['Type of Programme']}</td>
                <td className="border border-blue-500 py-2 px-4">{data['Target Group']}</td>
                <td className="border border-blue-500 py-2 px-4">{data['Partner Institution']}</td>
                <td className="border border-blue-500 py-2 px-4">{data['Participation Fee']}</td>
                <td className="border border-blue-500 py-2 px-4">{data.Quarter}</td>
                <td className="border border-blue-500 py-2 px-4">{data['State Name']}</td>
                <td className="border border-blue-500 py-2 px-4">{data['District Name']}</td>
                <td className="border border-blue-500 py-2 px-4">{data['Proposed End Date']}</td>
                <td className="border border-blue-500 py-2 px-4">{data['Eligibility Criteria']}</td>
                <td className="border border-blue-500 py-2 px-4">{data['Participation No']}</td>
                <td className="border border-blue-500 py-2 px-4">{data['Total Fees']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MSME;
