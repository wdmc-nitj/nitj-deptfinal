import React from 'react';
import Heading from '../../components/Heading';
import BaseTable from '../BaseTable';

const table = {
  Title: "Journal Publications",
  thead: ["S.No","Department", "Course Name", , "Duration","No. of Students","Link"],
  feild:["S.No","Department", "Course Name", , "Duration","No. of Students","Link"],
}

const data = [
  {
    'S.No': '1',
    'Department': 'IT',
    'Course Name': 'Associate Data Entry Operater',
    'Duration': '6 July 2023 - 20 October 2023',
    'No. of Students': '11',
    'Link': '',
  },
  {
    'S.No': '1',
    'Department': 'CSE',
    'Course Name': 'Web Developer Course',
    'Duration': '20 October 2023 - 12 January 2024',
    'No. of Students': '20',
    'Link': '',
  }
];

function MSME() {
  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
      <Heading name="PMKVY" />
      
      <BaseTable tablehead={table.thead} feild={table.feild} data={data}/>
    </div>
  );
}

export default MSME;