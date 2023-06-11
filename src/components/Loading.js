import React from 'react'
import loading from './Vedio/loading.gif'
function Loading() {
    return (
        <div className='w-full grid place-items-center h-[80vh]'>
            <img className='w-36 h-32' src={loading} alt='...' />
        </div>
    )
}

export default Loading
