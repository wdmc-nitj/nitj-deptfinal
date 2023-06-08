import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Heading from '../components/Heading';

function DepartmentLab() {
    const url = useLocation();
    const dept = url.pathname.split('/')[2];
    const { data, error, loading, reFetch } = useFetch(`/dept/${dept}/Infrastructure` + '?q=Department Labs');

    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto mt-[60px] pt-[54px] place-items-center'>
            <Heading name="Department Labs" />

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 sm:m-4 sm:p-2 place-items-center gap-4 antialiased text-gray-900">
                {
                    data ? data.map((item, i) => {
                        return (
                            item.type === "Department Labs" && <div key={i} className='w-full my-4 sm:mx-4 p-2'>
                                <div className="w-full h-60 sm:h-72 border-2 object-cover object-center rounded-lg shadow-md overflow-hidden">
                                    <img src={item?.img} alt=" random image" className="w-full h-full object-cover object-center rounded-lg shadow-md hover:scale-110 duration-500" />
                                </div>
                                <div className="relative px-4 -mt-8 md:-mt-10">
                                    <div className="max-w-fit mx-auto bg-white flex items-center justify-center p-4 md:p-6 rounded-lg shadow-lg">
                                        <h4 title={item?.title} className="text-xl font-semibold uppercase leading-tight truncate cursor-pointer">{item?.title}</h4>
                                    </div>
                                </div>

                            </div>
                        )
                    }) : <h1>Data not Available</h1>
                }
            </div>
        </div>
    )
}

export default DepartmentLab
