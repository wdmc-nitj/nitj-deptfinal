import React, { useEffect, useState } from 'react';

function ImageCarousel({ data }) {

  
  return (
    <>
      <div className='flex flex-col my-[100px] border p-[20px]'>
        <div className='mt-0 m-2 w-full rounded-md flex overflow-hidden'>
          <div className='relative w-full overflow-hidden'>
            <div className='relative px-[200px] bg-center flex items-center transition-all justify-center'>
              { (
                <img
                  src={"http://localhost:3000/static/media/logo.f2c76d0937070ba81dc0.png"}
                  className=' h-auto aspect-video sm:max-h-[450px] block align-middle rounded-md'
                  alt=''
                />
                )}
            </div>
          </div>
        </div>
        <div className='container  m-auto flex justify-center items-center'>
          <div className='px-4 xl:flex items-center rounded-lg overflow-hidden w-full'>
            <div className='xl:w-full'>
              <div className='text-center p-5'>
                { (
                  <div className='bg-[rgba(0,105,140,1)]  rounded-full mb-4 p-2 inline-block'>
                    <h1 className='text-xl px-3 xl:text-left font-bold text-white'>
                      {data?.heading}
                    </h1>
                  </div>
                )}
                {(
                  <p className='text-left text-gray-700'>{data?.desc}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
