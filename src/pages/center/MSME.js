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
    'Department': 'Hm',
    'Course Name': 'Advanced MDP',
    'Duration': '12 Feb 2024 - Feb 16 2024',
    'No. of Students': '11',
    'Link': '',
  },
  {
    'S.No': '2',
    'Department': 'Hm',
    'Course Name': 'Advanced MDP',
    'Duration':'29 Jan 2024 - Feb 2 2024',
    'No. of Students': '20',
    'Link': '',
  },
  {
    'S.No': '3',
    'Department': 'CY',
    'Course Name': 'Advanced E-SDP',
    'Duration': '29 Jan 2023 - 03 Feb 2024',
    'No. of Students': '25',
    'Link': '',
  }
  ,
  {
    'S.No': '4',
    'Department': 'IPE',
    'Course Name': 'Advanced MDP',
    'Duration': '25 Jan 2024 - 30 January 2024',
    'No. of Students': '18',
    'Link': '',
  }
  ,
  {
    'S.No': '5',
    'Department': 'Ch',
    'Course Name': 'Advanced E-SDP',
    'Duration': '27 Nov 2023 - 01 Dec 2023',
    'No. of Students': '25',
    'Link': '',
  }
  ,
  {
    'S.No': '6',
    'Department': 'EE',
    'Course Name': 'Advanced E-SDP',
    'Duration': '07 December 2023 - 11 December 2023',
    'No. of Students': '20',
    'Link': '',
  }
  ,
  {
    'S.No': '7',
    'Department': 'ICE',
    'Course Name': 'Advanced E-SDP',
    'Duration': '04 Dec 2023 - 06 Dec 2024',
    'No. of Students': '28',
    'Link': '',
  }
  ,
  {
    'S.No': '8',
    'Department': 'IPE',
    'Course Name': 'Advanced E-SDP',
    'Duration': '16 Dec 2023 - 20 Dec 2023',
    'No. of Students': '11',
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