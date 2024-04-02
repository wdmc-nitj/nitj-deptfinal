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
        The vision of the E-SDP is to facilitate the transition towards sustainable energy practices by empowering individuals to become proficient in the installation and commissioning of solar plants. By providing high-quality training and practical experiences, the program envisions a future where participants play a key role in promoting renewable energy solutions and contributing to the development of net-zero energy buildings. The ultimate goal is to inspire and enable a generation of skilled professionals who are capable of harnessing solar power effectively, thus contributing to environmental conservation and energy independence.

        </div>
      </div>
      <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
        <Heading name='Missions' />
        <div className='w-full'>
        The mission of the MSME Sponsored Entrepreneurship and Skill Development Training Programme (E-SDP) on "Installation and Commissioning of Solar Plant for Net-Zero Energy Buildings" is to equip participants with the necessary skills and knowledge required for the effective installation and commissioning of solar power systems. The program aims to empower individuals with the technical expertise needed to contribute to the adoption of renewable energy solutions, particularly in the context of net-zero energy buildings. Through comprehensive lectures, hands-on sessions, and industrial visits, the mission is to foster a deep understanding of solar power technology and its integration into sustainable energy systems.
        </div>
      </div>
    </div>
  );
}

export default CenterVisionAndMission;
