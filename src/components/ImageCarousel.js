import React, { useEffect, useState } from 'react';

function ImageCarousel({ images }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, images]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    
  };

  const currentImage = images && images.length > 0 ? images[currentIndex] : null;
  
  return (
    <>
      <div className='xl:flex'>
        <div className='mt-0 m-2 w-full rounded-md flex overflow-hidden'>
          <div className='relative w-full overflow-hidden'>
            <div className='relative bg-gradient-to-b from-accent to-transparent bg-cover bg-center w-full items-center transition-all justify-center'>
              {currentImage && (
                <img
                  src={currentImage?.link}
                  className='w-full h-auto aspect-video sm:max-h-[450px] block align-middle rounded-md'
                  alt=''
                />
                )}
                
              <div className='top-0 absolute w-full h-full flex items-center justify-between p-2'>
                <button
                  className='w-5 h-5 active:translate-y-1  rounded-full'
                  onClick={handlePrevClick}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'>
                    <path d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z' />
                  </svg>
                </button>
                <button
                  className='w-5 h-5 active:translate-y-1  rounded-full'
                  onClick={handleNextClick}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'>
                    <path d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='container  m-auto flex justify-center items-center'>
          <div className='px-4 xl:flex items-center rounded-lg overflow-hidden border w-full'>
            <div className='xl:w-full'>
              <div className='text-center p-5'>
                {currentImage?.heading && (
                  <div className='bg-[rgba(0,105,140,1)]  rounded-full mb-4 p-2 inline-block'>
                    <h1 className='text-xl px-3 xl:text-left font-bold text-white'>
                      {currentImage.heading}
                    </h1>
                  </div>
                )}
                {currentImage?.desc && (
                  <p className='text-left text-gray-700'>{currentImage.desc}</p>
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
