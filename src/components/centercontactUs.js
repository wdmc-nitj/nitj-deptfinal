import React from 'react'
import Heading from './Heading'

export const CenterContactUs = () => {

    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name="Contact Us" />
            <div className='flex-1 shadow p-8 rounded-md'>
                <div className=' w-11/12 mx-auto'>
                    <div className="w-full bg-white relative flex flex-wrap py-6 rounded">
                        <div className="lg:w-1/2 px-6 ">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest">Address</h2>
                            <p className={`mt-1`}></p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Office Email</h2>
                            <span className="text-indigo-500 leading-relaxed">Email</span>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Phone</h2>
                            <p className="leading-relaxed">Phone</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

