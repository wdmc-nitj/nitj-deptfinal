import React from 'react'

function Heading({name}) {
  return (
    <div className='absolute font-medium leading-wider tracking-wide truncate -mt-[76px] pt-1 pb-2 px-4 bg-[rgba(0,105,140,1)] text-[#fff] shadow-lg rounded-3xl text-lg sm:text-2xl'>{name}</div>
  )
}

export default Heading
