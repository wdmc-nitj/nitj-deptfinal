import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Heading from '../components/Heading';
import Loading from '../components/Loading';

function VisionandMission() {
  const dept = useLocation().pathname.split('/')[2];
  const { data, loading } = useFetch(`/dept/${dept}/messageofHOD`);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderPoints = (pointsArray) => {
    if (!pointsArray) return null;
    
    return (
        <ul className='list-disc list-inside'>
          {pointsArray.map((point, index) => (
            <li key={index} className='px-2 sm:px-4 text-sm sm:text-base text-justify list-none'>
               <i className="fas fa-lightbulb mx-2"></i> 
            {point}
            </li>
          ))}
        </ul>
    );
  };

  return (
    <div className='flex flex-col justify-center items-center mb-4 w-full'>
      <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
        <Heading name='Vision' />
        <div className='w-full'>
          {!loading ? renderPoints(data?.vision) : <Loading />}
        </div>
      </div>
      <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
        <Heading name='Missions' />
        <div className='w-full'>
          {!loading ? renderPoints(data?.mission) : <Loading />}
        </div>
      </div>
      <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
        <Heading name='Quality Policy' />
        <div className='w-full'>
          {!loading ? renderPoints(data?.QualityStatements) : <Loading />}
        </div>
      </div>
    </div>
  );
}

export default VisionandMission;
