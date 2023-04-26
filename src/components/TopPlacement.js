import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Placement from './Placement'
import Heading from './Heading';
function TopPlacement() {
  let navigate = useNavigate();

  const dept = useLocation().pathname.split('/')[2];
  const scrollNextPage = () => {
    const gallery = document.querySelector('#scrollcontrol');
    const gallery_scroller = gallery.querySelector('.cards');
    const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
    gallery_scroller.scrollBy(gallery_item_size, 0);
  }
  const scrollPrevPage = () => {
    const gallery = document.querySelector('#scrollcontrol');
    const gallery_scroller = gallery.querySelector('.cards');
    const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
    gallery_scroller.scrollBy(-gallery_item_size, 0);
  }

  return (
    <>
      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
        <Heading name="Current Top Placements" />
        <div id='scrollcontrol' className='relative'>
          <div className='cards flex snap-x overflow-x-auto scrollhide delay-200 scroll-smooth'>
            <Placement />
          </div>
          <button className='absolute top-[45%] left-0 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px] rotate-180' onClick={scrollPrevPage}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
          </button>
          <button className='absolute top-[45%] -right-1 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px]' onClick={scrollNextPage}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
          </button>
        </div>
        <Link to={`/dept/${dept}/Placement`}>
        <button className="flex hover:shadow-lg hover:-translate-y-1 hover:shadow-yellow-500/50 bg-transparent my-2 text-blue-700 font-medium border hover:border-blue-900 border-blue-400 duration-500 py-2 px-3 rounded mx-auto tracking-wide active:translate-y-[2px]" onClick={() => {navigate(`/dept/${dept}/Placement`);console.log("Top Plcement")}}>
          View More
        </button>
        </Link>
      </div>
    </>
  )
}

export default TopPlacement