import React from 'react';
import Heading from '../../components/Heading';
import BaseTable from '../BaseTable';

const table = {
  Title: "Journal Publications",
  thead: ["S.No","Deparment", "Course Name", , "Duration","No. of Students","Link"],
  feild:["S.No","Deparment", "Course Name", , "Duration","No. of Students","Link"],
}

const data = [
  {
    type: 'MSME',
    title: 'Web Development Course',
    image: 'image1.jpg',
    _id: '1',
  }
];


function MSME() {
  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
      <Heading name="MSME" />
      <BaseTable tablehead={table.thead} feild={table.feild} data={data}/>
    </div>
  );
}

export default MSME;
