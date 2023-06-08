import React from 'react'

function ProgrammeCom({programInfo}) {
    
    return (
        <>
            <div className="text-gray-600 w-full h-full">    
                <div>
                    <div className='mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 my-[60px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-lg sm:text-2xl'>Program Outcomes</div>
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
                    <div className='mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 my-[60px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-lg sm:text-2xl'>Program Specific Outcomes</div>
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
                    <div className='mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 my-[60px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-lg sm:text-2xl'>Program Educational Objectives</div>
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

export default ProgrammeCom
