import React, { useEffect, useState } from 'react';

function ImageCarousel({ image }) {
    console.log(image);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => ((prevValue === (image ? image.length - 1 : -1) ? 0 : prevValue + 1)));
    }, 6000);
    return () => clearInterval(interval);
  }, [value, image]);

  return (
    <>
      <div className="mt-0 w-full rounded-md overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className='relative bg-gradient-to-b from-accent to-transparent bg-cover bg-center w-full items-center transition-all justify-center'>
            {image && (
              <img
                src={image.img}
                className='w-full h-auto aspect-video sm:max-h-[450px] block align-middle rounded-md'
                alt=""
              />
            )}
            <div className='top-0 absolute w-full h-full flex items-center justify-between p-2'>
              <button
                className='w-5 h-5 active:translate-y-1  rounded-full'
                onClick={() => setValue((prevValue) => ((prevValue === 0 ? (image ? image.length - 1 : -1) : prevValue - 1)))}
              >
                <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'>
                  <path d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z' />
                </svg>
              </button>
              <button
                className='w-5 h-5 active:translate-y-1  rounded-full'
                onClick={() => setValue((prevValue) => ((prevValue === -1 ? 0 : prevValue + 1)))}
              >
                <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'>
                  <path d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
