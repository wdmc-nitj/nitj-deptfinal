import React from 'react'
// import vision from './../components/Img/vision.gif'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Heading from '../components/Heading';
import Loading from '../components/Loading';
function VisionandMission() {
  const dept = useLocation().pathname.split('/')[2];
  const { data, loading } = useFetch(`/dept/${dept}/messageofHOD`);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col justify-center items-center mb-4 w-full'>
      <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
        <Heading name="Vision" />
        <div className='w-full'>
          {!loading ?
            <p className='px-2 sm:px-4 text-sm sm:text-base text-justify justify-center'>
              {data?.vision}
            </p>
            : <Loading />}
        </div>
      </div>
      <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
        <Heading name="Missions" />
        <div className='w-full'>
          {!loading ?
            <p className='px-2 sm:px-4 text-sm sm:text-base text-justify justify-center'>
              {data?.mission}
            </p>
            : <Loading />}
        </div>
      </div>
      <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
        <Heading name="Quality Policy" />
        <div className='w-full'>
          {!loading ?
            <p className='px-2 sm:px-4 text-sm sm:text-base text-justify justify-center'>
              {data?.QualityStatements}
            </p>
            : <Loading />}
        </div>

      </div>


    </div>

  )
}

export default VisionandMission