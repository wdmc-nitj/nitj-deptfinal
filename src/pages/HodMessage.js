import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import default_avatar from '../components/Img/default_avatar.jpg'
import Loading from '../components/Loading';
function HodMessage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [url, setUrl] = useState(useLocation());
  const dept = url.pathname.split('/')[2];
  const { data, loading, error, reFetch } = useFetch(`/dept/${dept}/messageofHOD`);
  return (
    <>
      {!loading ? <div className="main-body w-full flex flex-col gap-8 lg:gap-12 my-12 md:my-24">
        <div className="flex flex-col sm:flex-row px-[4%] lg:px-[9%] gap-[32px] md:gap-[64px]">
          <div className="sm:basis-1/3 flex items-center">
            <img src={data ? data.img : default_avatar} alt="" className='rounded-tl-3xl rounded-br-3xl border-2 border-gray-300 shadow-lg shadow-slate-400 max-h-56 sm:max-h-full h-full' />
          </div>
          <div className="sm:basis-2/3">
            <div className="flex flex-col items-start">
              <p className="font-semibold text-[26px] lg:text-[40px] leading-[1.3 mb-2">{data?.name}</p>
              <p className="text-zinc-900 font-medium text-base lg:text-lg">Head of Department</p>
              <div className="bg-accent bg-teal-600 w-[100%] h-[3px] mb-4 mt-2"></div>
              <div className="w-[100%] flex flex-col gap-[4px]">
                <div className="flex flex-row">
                  <p className="basis-3/12 md:basis-[15%] text-justify font-semibold">Email</p>
                  <p className="">: &nbsp; &nbsp;</p>
                  <p>{data?.email}</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-3/12 md:basis-[15%] font-semibold">Tel No.</p>
                  <p className="">: &nbsp; &nbsp;</p>
                  <p>{data?.phone} (O)</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-3/12 md:basis-[15%] font-semibold text-justify">EPABX</p>
                  <p className="">: &nbsp; &nbsp;</p>
                  <p> +91-181-2690301,2690453</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-3/12 md:basis-[15%] font-semibold">Extn.</p>
                  <p className="">: &nbsp; &nbsp;</p>
                  <p>1000 (O), 1002 (PA)</p>
                </div>
                <div className="flex flex-row">
                  <p className="basis-3/12 md:basis-[15%] font-semibold">Fax</p>
                  <p className="">: &nbsp; &nbsp;</p>
                  <p>+91-181-2690932</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start px-4 lg:px-[4%] gap-[20px] lg:gap-[48px]">
          <div className="w-full flex flex-col items-start">
            <p className="font2 font-medium text-[28px] lg:text-[44px]">HoD's Message </p>
            <div className="bg-accent bg-teal-600 w-full lg:w-[111px] h-[1px] lg:h-[5px]"></div>
          </div>
          <p className="text-gray-800 text-sm sm:text-base lg:leading-[30px] text-justify">
            {data?.message}
            <br /> <br />
            Wish you all the best.
            <br /> <br />
            <span className="text-base sm:text-lg font-semibold">{data?.name}</span>
          </p>
        </div>

      </div> : <Loading />}
    </>

  )
}

export default HodMessage