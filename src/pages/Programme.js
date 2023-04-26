import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Programme() {
    const dept = useParams()?.dept;
    const [programInfo, setProgramInfo] = useState({});
    const Programs = useFetch(`/dept/${dept}/programmeInfo`).data;

    useEffect(() => {
        window.scroll(0, 0);
        setProgramInfo(Programs[0])
    }, [Programs])
    

    return (
        <>
            <div className="text-gray-600 body-font w-full h-full">
                <div className="container flex flex-col p-8 sm:p-12 mx-auto" style={{ height: "100%" }}>
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl sm:text-3xl font-medium title-font mb-4 text-gray-900">Programmes of Study</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Department offers following Undergraduate, Postgraduate and Research Programmes</p>
                    </div>
                    <div className="flex flex-auto overflow-x-auto -m-4 place-items-center text-center scrollbar">
                        {
                            Programs.map((item, i) => {
                                return (
                                    <div key={i} className="py-4 min-w-[250px] max-w-[300px] w-fit mx-2">
                                        <div className={"border-2 border-gray-200 py-6 rounded-lg active:translate-y-[2px] cursor-pointer " + (item === programInfo ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => {
                                            setProgramInfo(Programs[i]);
                                        }}>
                                            <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                            <h2 className="title-font font-medium text-2xl text-gray-900">{item["Program of Study"]}</h2>
                                            <p className="max-w-[250px] py-1 leading-relaxed">{item?.branch}</p>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className='mx-2 lg:mx-5 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 my-[60px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-xl sm:text-2xl'>Program Outcomes</div>
                            <ol>
                                {
                                    programInfo && programInfo["Program Outcomes"]?.map((ele, i) => {
                                        return( 
                                        <li className='ml-2 mb-3'>
                                            <div className='mx-2 mb-3'>
                                                <h2 className='text-black font-medium'>
                                                    <i className="fas fa-lightbulb"></i>  PO-{i + 1}</h2>
                                                <p>{ele}</p>
                                            </div>
                                        </li>
                                    )})
                                }

                            </ol>
                        </div>
                    </div>
                    <div className='mx-2 lg:mx-5 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 my-[60px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-xl sm:text-2xl'>Program Specific Outcomes</div>
                            <ol >

                                {programInfo && programInfo["Program Specific Outcomes"]?.map((ele, i) => {
                                    return <li className='ml-2 mb-3'><div className='mx-2 mb-3'>
                                        <h2 className='text-black font-medium'>
                                            <i className="fas fa-lightbulb"></i>  PSO-{i + 1}</h2>
                                        <p>{ele}</p>
                                    </div></li>
                                })}
                            </ol>
                        </div>
                    </div>
                    <div className='mx-2 lg:mx-5 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 my-[60px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-xl sm:text-2xl'>Program Educational Objectives</div>
                            <div className=''>
                                <ol>
                                    {programInfo && programInfo["Program Educational Objectives"]?.map((ele, i) => {
                                        return <li className='ml-2 mb-3'><div className='mx-2 mb-3'>
                                            <h2 className='text-black font-medium'>
                                                <i className="fas fa-lightbulb"></i>  PEO-{i + 1}</h2>
                                            <p>{ele}</p>
                                        </div></li>
                                    })}

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programme
