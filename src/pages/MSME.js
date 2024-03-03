import React from 'react';
import Heading from '../components/Heading';

const staticData = [
  {
    type: 'MSME',
    title: 'Web Development Course',
    image: 'image1.jpg',
    _id: '1',
  },
  {
    type: 'MSME',
    title: 'AI/ML course',
    image: 'image2.jpg',
    _id: '2',
  },
];

function MSME() {
  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
      <Heading name="MSME" />
      <div className='w-full'>
        Micro, Small, and Medium Enterprises (MSMEs) play a crucial role in fostering economic growth and employment opportunities. These enterprises, characterized by their relatively smaller scale of operations, contribute significantly to innovation, entrepreneurship, and inclusive development. MSMEs encompass a diverse range of industries, from manufacturing to services, and serve as the backbone of many economies worldwide. Governments often implement policies and initiatives to support the growth of MSMEs, recognizing their vital role in driving economic prosperity and sustainability.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 sm:m-4 sm:p-2 place-items-center gap-4 antialiased text-gray-900">
        {
          staticData.map((item, i) => (
            <div key={i} className='w-full my-4 sm:mx-4 p-2'>
              <div className="w-full h-60 sm:h-72 border-2 object-cover object-center relative rounded-lg shadow-md bg-grey overflow-hidden group" >
                <img
                  src={item.image}
                  alt="Courses"
                  className="w-full h-full object-cover object-center rounded-lg shadow-md duration-500"
                />
                {item.title && <div className="absolute z-10 p-2 inset-0 flex items-center justify-center text-xl font-bold text-white bg-black bg-opacity-40 opacity-0 duration-300 transition">
                  {item.title}
                </div>}
              </div>

              <div className=" z-20 relative px-4 -mt-7 md:-mt-9">
                <div className="max-w-fit mx-auto bg-white flex items-center  justify-center p-4 sm:p-6 rounded-lg shadow-lg">
                  <h4 title={item.title} className="text-xl font-semibold uppercase leading-tight truncate">{item.title}</h4>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MSME;
