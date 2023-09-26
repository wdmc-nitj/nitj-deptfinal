import React from 'react'
import { useParams } from 'react-router-dom';
import Heading from '../components/Heading';
import useFetch from '../hooks/useFetch';

import classes from './c.module.css';
import Loading from '../components/Loading';

function ContactUs() {

  const {data,loading} = useFetch(`/dept/${useParams()?.dept}/contactus`);
  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
      <Heading name="Contact Us" />
      {!loading?<div className='flex-1 shadow p-8 rounded-md'>
        <div className=' w-11/12 mx-auto'>
          <div className="w-full bg-white relative flex flex-wrap py-6 rounded">
            <div className="lg:w-1/2 px-6 ">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest">Address</h2>
              <p className={`mt-1 ${classes.x}` }>{data?.Address}</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Office Email</h2>
              <span className="text-indigo-500 leading-relaxed">{data?.Email}</span>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Phone</h2>
              <p className="leading-relaxed">{data?.Phone}</p>
            </div>
          </div>

          <div className="mt-2">
            <div className="pt-2 flex items-center justify-center text-lg text-white">
              <a href={data?.FacebookUrl} className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa-brands fa-facebook-f"></i></a>
              <a href={data?.InstagramUrl} className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa-brands fa-instagram"></i></a>
              <a href={data?.TwitterUrl} className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa-brands fa-twitter"></i></a>
              <a href={data?.LinkedinUrl} className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>

      </div>:<Loading/>}
      
    </div>
  )
}

export default ContactUs
