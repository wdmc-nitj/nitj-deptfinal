import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ProgrammeCom from '../components/ProgrammeCom';

function Programme() {
    const dept = useParams()?.dept;
    const [programInfo, setProgramInfo] = useState({});
    const Programs = useFetch(`/dept/${dept}/programmeInfo`).data;
    const [branch, setBranch] = useState("");
    const [ProgramofStudy, setProgramofStudy] = useState("");
    useEffect(() => {
        window.scroll(0, 0);
        setProgramInfo(Programs[0])
    }, [Programs])

    const HandleScroll=()=>{
        window.scrollTo(0,100);
    }
    console.log(Programs);
    return (
        <>
            <div className="text-gray-800 w-full h-full scroll-smooth">
                <div className="container h-full flex flex-col p-2 sm:p-8 mx-auto">
                    <div className="flex flex-col text-center w-full my-12">
                        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">Programmes of Study</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Department offers following Undergraduate, Postgraduate and Research Programmes</p>
                    </div>
                    <div className="">
                        {
                            Programs.map((item, i) => {
                                return (
                                    <div key={i} className="py-4">
                                        <div className='w-full px-4 py-2 border-2 rounded shadow-md'>
                                            <div className="flex items-center justify-between my-2">
                                                <div className={"flex flex-col justify-center delay-500 "+((item["Program of Study"]===ProgramofStudy&&item?.branch===branch)?"w-full items-center":"items-start")}>
                                                    <span className="text-xl font-semibold">{item["Program of Study"]}</span>
                                                    <span className='text-gray-700'>({item?.branch})</span>
                                                </div>
                                                <span className={(item["Program of Study"]===ProgramofStudy&&item?.branch===branch)?"hidden":""} onClick={() => {
                                                    setProgramInfo(Programs[i]); setBranch(item?.branch);setProgramofStudy(item["Program of Study"]); HandleScroll();
                                                }}><i className="fa-solid cursor-pointer fa-plus"></i></span>
                                                <span className={(item["Program of Study"]===ProgramofStudy&&item?.branch===branch)?"":"hidden"}  onClick={() => {
                                                     setBranch("");setProgramofStudy(""); HandleScroll();
                                                }}><i className="fa-solid cursor-pointer fa-minus"></i></span>
                                            </div>
                                            <div className={"w-full overflow-hidden transition-opacity ease-in-out "+((item["Program of Study"]===ProgramofStudy&&item?.branch===branch)?"opacity-100":"h-0 opacity-0")}>
                                                {<ProgrammeCom programInfo={programInfo}/>}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Programme
