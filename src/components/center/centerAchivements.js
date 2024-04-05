import React from 'react';
import Patents from '../Img/Patents.png'
import People from '../Img/People.png'
import Heading from '../Heading';
function CenterAchievements() {

  const map = {
    'Number of Courses': Patents,
    'Number of Students Enrolled': People,
  }
  const data = [
    {
        title: "Number of Courses",
        count: 2
    },
    {
        title: "Number of Students Enrolled",
        count: 10
    },

  ]

  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto sm:mx-3 mt-[60px] pt-[54px] place-items-center'>
      <Heading name="Achievements" />
       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center" >
        {
          data.map((item, i) => {
            return (
              <div key={i} className="flex flex-col flex-grow content-center mt-0 text-inherit shadow rounded-lg my-4">
                <div className="flex flex-row py-3 text-left text-base items-center content-center px-[14px] xl:px-[18px]">
                  <div className="w-32 h-32 flex-grow-0 flex-shrink-0">
                    {
                      <img src={map[item?.title]} className="w-full h-full object-fill object-center flex-grow-0 flex-shrink-0" alt='...' />
                    }
                  </div>
                  <div className="flex flex-col flex-grow leading-8 mr-5 text-start justify-start ml-9 w-40 xl:w-56">
                    <div className="text-2xl font-semibold">{item?.title == "Faculty"?"Faculty Strength":item?.title}</div>
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

export default CenterAchievements

