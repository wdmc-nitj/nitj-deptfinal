import React from 'react';
import { useEffect } from 'react';
import Heading from '../Heading';

function CenterVisionAndMission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center mb-4 w-full'>
      <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
        <Heading name='Vision' />
        <div className='w-full'>
        SDC at NIT Jalandhar is proposed to fulfill the need of skilled workers across all industries and to close the skills supply and demand gap. Launching a top-notch skill development programme in mission mode is essential to tackle the problem of transferring the skills needed by a developing economy. The programme structure and management may be set up quickly throughout the entire nation.
        </div>
      </div>
      <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
        <Heading name='Missions' />
        <div className='w-full'>
        1.	Through strong industry participation, skills can be raised to worldwide norms, and the appropriate structures for standards, curriculum, and quality assurance can be created.<br></br>
        2.	Generate funds and take on the role of a "market maker," especially in the industries with weak or nonexistent market processes.<br></br>
        3.	Initiatives with a multiplier or catalytic effect should be prioritized over those with a one-time impact.

        </div>
      </div>
    </div>
  );
}

export default CenterVisionAndMission;
