import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Heading from '../components/Heading';
import Patents from '../components/Img/Patents.png'
import Citations from '../components/Img/Citations.png'
import People from '../components/Img/People.png'
import Publication from '../components/Img/Publication.png'
import placement from '../components/Img/placement.png'
function Achievements() {

  const data = useFetch(`/dept/${useParams()?.dept}/Achievement`)?.data;
  const map={
    'Publications':Publication,
    'Patents':Patents,
    'Citations':Citations,
    'Faculty':People,
    'Placements':placement,
    'Highest Package': 'https://cdn-icons-png.flaticon.com/512/2058/2058969.png'
  }

  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 sm:p-4 mx-auto sm:mx-3 mt-[60px] pt-[54px] place-items-center'>
      <Heading name="Achievements" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center" >
        {
          data[0]?.achievement?.map((item, i) => {
            return (
              <div key={i} className="flex flex-col flex-grow content-center mt-0 text-inherit shadow rounded-lg my-4">
                <div className="flex flex-row py-3 text-left text-base items-center content-center px-[14px] xl:px-[18px]">
                  <div className="w-32 h-32 flex-grow-0 flex-shrink-0">
                    {
                      <img src={map[item?.title]} className="w-full h-full object-fill object-center flex-grow-0 flex-shrink-0" alt='...' />
                    }
                  </div>

              

                  <div className="flex flex-col flex-grow leading-8 mr-5 text-start justify-start ml-9 w-40 xl:w-56">
                    <div className="text-2xl font-semibold">{item?.title}</div>
                    <div className="text-blue-600 text-xl font-medium tracking-wide">{item?.count}</div>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Achievements

