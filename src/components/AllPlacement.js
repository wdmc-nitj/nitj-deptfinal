import React, { useEffect } from 'react'
import Placement from './Placement'
function AllPlacement() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
                <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Placements</div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 m-2 lg:mx-4 w-full items-center justify-center place-items-center mx-auto'>
                    <Placement/>
                </div>
            </div>
        </>
    )
}

export default AllPlacement