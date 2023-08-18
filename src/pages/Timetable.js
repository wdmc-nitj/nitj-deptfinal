import React, { useEffect, useState } from 'react'
import OpenPdf from './OpenPdf'
import Heading from '../components/Heading'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
function Timetable() {
    const {data,loading} = useFetch(`/dept/${useParams()?.dept}/TimeTable`);
    const [state,setState]= useState("");
    useEffect(()=>{
        setState(data[0]?.link);
        return ()=>{}
    },[data]);
    return (
        <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Time Table" />
            {!loading?<div className='shadow shadow-blue-400 md:m-4 pb-2'>
                <div className='flex items-center w-full py-3 font-medium text-lg px-4 shadow-md shadow-blue-200'>
                    <div className='flex w-fit items-center border border-gray-300 text-gray-900 text-sm p-2 rounded'>
                        <label htmlFor="states" className="mr-2">Programme :</label>
                        <select id="states" className="border-none outline-none" onChange={(e)=>{
                            setState(e.target.value);
                        }}>
                            {data?.map((e)=>{
                                return <option value={e?.link}>{e?.type}</option>
                            })}
                        </select>
                    </div>
                </div>
                <OpenPdf link={state} />
            </div>:<Loading/>}
            
        </div>
    )
}

export default Timetable