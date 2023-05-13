import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
const Departmentupper = (props) => {
    const dept = useLocation().pathname.split('/')[2];
    const {data,error,loading,refetch} = useFetch(`/dept/${dept}/messageOfHOD`);
    
    return (

        <div className='flex flex-col md:flex-row w-[98%] justify-around items-center p-2 md:p-4 pb-0 place-items-center mx-auto'>
            {/* // department intro */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-md md:w-1/2 md:mx-2 my-2">

                <div className='flex justify-center items-center'>
                    <img className="rounded-t-lg" src={props.departmentimage} alt="..." />
                </div>

                <div className="px-2 pt-5 h-[300px]">
                    <h1 className='text-center font-medium text-2xl m-2'>Department of {props.name}</h1>
                    <p className="mb-3 text-justify px-3 overflow-y-auto scrollbar text-gray-700 h-[190px]">{props.introduction}</p>
                    {/* <div className='block m-4 p-2'>
                        <button className=' float-right text-green-700 hover:font-semibold hover:text-blue-700 '>Read More  &rarr;</button>
                    </div>  */}
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-md md:w-1/2 md:mx-2 my-2">

                <div className='flex justify-center items-center'>
                    <iframe className='w-full aspect-[2.11] rounded-lg'
                        src="https://www.youtube.com/embed/fd2hUOmm8kA?controls=0&amp;start=280&mute=1" title="NITJ" >
                    </iframe>
                </div>
                <div className="p-5 h-[300px]">
                    <ul>
                        <li className='text-lg text-left font-bol'>
                            Vision
                        </li>
                        <li>
                            {data.vision}
                        </li>
                        <br></br>
                        <li className='text-lg text-left font-bold'>
                            Mission
                        </li>
                        <li>
                            {data.mission}
                        </li>
                    </ul>
                    <p className="mb-3 font-normal text-justify text-gray-700 overflow-hidden"><br/></p>
                    <div className='block p-2'>
                        <Link to={`/dept/${dept}/MissionandVision`}>
                        <button className=' float-right text-blue-600 hover:font-semibold hover:text-blue-700 '>Read More  &rarr;</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Departmentupper