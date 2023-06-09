import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
const Card = () => {
    let navigate = useNavigate();
    const dept = useParams()?.dept;
    const { data } = useFetch(`/dept/${dept}/SocietyClubs?q=Club`);
    const club = data ? data[0] : null;
    return (
        <div className="relative w-full md:w-/2 py-4 px-4 sm:px-7 mx-2 border bg-white shadow-lg rounded-lg mt-16 mb-6">
                <div className="absolute right-4 w-32 h-32 flex-grow-0 flex-shrink-0 flex justify-center md:justify-end -mt-20 mb-1 ml-auto mr-0">
                    <img src={club?.img} className="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='' />
                </div>
                <span className='w-full inline-block h-[180px] overflow-hidden text-justify text-ellipsis mt-2'>
                    <h2 className="text-[#0054A6] text-start w-[calc(100%-105px)] text-lg lg:text-xl font-semibold leading-tight tracking-wide">{club?.title}</h2>
                    <br/>
                    <p className="mt-2 text-sm sm:text-base flex-wrap">{club?.description}</p>
                </span>
                <div className="flex justify-end mt-4" onClick={() => navigate(`/dept/${dept}/SocietyClubs`)}>
                    <span className="text-sm font-medium text-indigo-500 cursor-pointer">Read More &rarr;</span>
                </div>
        </div>
    )
}

export default Card