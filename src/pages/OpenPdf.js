import React from 'react'

function OpenPdf({link}) {

  return (
    <div className='w-[98%] flex items-center justify-center mx-auto mt-2'>
      {/* <a href={link+'?preview=1'} data-previewable="1">Link</a> */}
      <iframe src={link} style={{height:"70vh", width:"100%"}} frameborder="0"></iframe>
    </div>
  )
}

export default OpenPdf
