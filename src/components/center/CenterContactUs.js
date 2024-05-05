import React from 'react';
import Heading from '../Heading';

const CenterContactUs = () => {
  const instagramUrl = 'https://www.instagram.com/nitjofficial/';
  const twitterUrl = 'https://twitter.com/NITJofficial';
  const linkedinUrl = 'https://www.linkedin.com/school/dr-b-r-ambedkar-national-institute-of-technology-jalandhar-official/mycompany/';

  const openInNewWindow = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
      <Heading name='Contact Us' />
      <div className='flex-1 shadow p-8 rounded-md'>
      <h1 className='text-2xl w-11/12 mx-16'> Head : Dr. Praveen Malik </h1>
        <div className=' w-11/12 mx-auto'>
          <div className='w-full bg-white relative flex flex-wrap py-6 rounded'>
            <div className='lg:w-1/2 px-6 '>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest'>Address</h2>
              <p className={`mt-1`}>Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar, Punjab 144008</p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>Office Email</h2>
              <span className='text-indigo-500 leading-relaxed'>malikp@nitj.ac.in</span>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>Phone</h2>
              <p className='leading-relaxed'>+91-9888382021</p>
            </div>

            <div className='mt-2'>
              <div className='pt-2 flex items-center justify-center text-lg text-white'>
                <div onClick={() => openInNewWindow(instagramUrl)} className='w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center'>
                  <i className='fa-brands fa-instagram'></i>
                </div>
                <div onClick={() => openInNewWindow(twitterUrl)} className='w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center'>
                  <i className='fa-brands fa-twitter'></i>
                </div>
                <div onClick={() => openInNewWindow(linkedinUrl)} className='w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center'>
                  <i className='fa-brands fa-linkedin'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterContactUs;
