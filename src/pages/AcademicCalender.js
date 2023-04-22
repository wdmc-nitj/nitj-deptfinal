import React, { useState } from 'react'
import OpenPdf from './OpenPdf'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

function AcademicCalender() {
    const data = useFetch(`/dept/${useParams()?.dept}/deptCalendar`).data;
    //console.log(data);
    return (
        <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Department Activities Calendar" />
            <div className='shadow shadow-blue-400 md:m-4 pb-2'>
                <div className='flex items-center w-full py-3 font-medium text-lg px-4 shadow-md shadow-blue-200'>
                </div>
                <OpenPdf link={data[0]?.link} />
            </div>
        </div>
    )
}

export default AcademicCalender
