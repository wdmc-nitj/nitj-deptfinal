import React from 'react'
import defaultImg from '../components/Img/default_avatar.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';

function People({ Title, Data }) {
    const url = useLocation();
    const dept = url.pathname.split('/')[2];
    const page = url.pathname.split('/')[3];
    const navigate = useNavigate();

    if(Title === 'Faculty' && Data.length){
        Data.sort((a, b) => {
            return a['order'] - b['order'];
        })
    }

    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name={Title} />
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 w-full my-4 sm:px-2'>
                {
                    Data ? Data.map((item, i) => {
                        let position = null;
                        if(Title === 'Faculty'){
                            position = item['position'];
                            item = item['ID'];
                        }
                        return (
                            <div key={i} className="flex flex-col flex-grow content-center h-full justify-center mt-0 text-inherit shadow hover:shadow-lg hover:shadow-blue-500 shadow-blue-400 rounded-lg my-4 cursor-pointer">
                                <div className="flex flex-col sm:flex-row border-t-0 text-[rgba(0,105,140,1)] py-3 text-left text-base items-center content-center px-[14px] xl:px-[18px]">
                                    <div className="w-32 h-32 xl:w-36 xl:h-36 flex-grow-0 flex-shrink-0">
                                        {
                                            item?.img ? <img src={item?.img} className="w-full h-full object-fill object-center rounded-full shadow-xl border flex-grow-0 flex-shrink-0" alt='...' /> :
                                                <img src={defaultImg} className="w-full h-full object-fill object-center rounded-full shadow-xl border flex-grow-0 flex-shrink-0 opacity-70" alt='...' />
                                        }
                                    </div>
                                    <div className="flex flex-col flex-grow leading-8 md:mr-2 xl:mr-5 text-center sm:text-start md:justify-start mt-8 md:mt-0 sm:ml-9 md:mb-0" >
                                        <div className="text-[22.5px] cursor-text">{item?.name + (item?.guest?.isGuest?"(Guest)":"")}</div>
                                        <div className="font-semibold text-[rgba(0,0,0,0.7)] tracking-wide cursor-text">{position?position:item['designation']}</div>
                                        <div className="font-medium text-[rgba(0,0,0,0.7)] text-blue-500 tracking-wide cursor-text"><span className='text-blue-700'>{item?.email ? 'Email:-' : ''}</span> {item?.email}</div>
                                        {(Title === "Faculty" && !item?.guest?.isGuest) ? (
                                            <div className="text-[15px] border-none pr-2  cursor-pointer hover:underline" onClick={() =>{
                                                navigate(page === "Faculty" ? { pathname: `/dept/${dept}/${url.pathname.split('/').pop()}/${item._id}`, state: i } : { pathname: `/dept/${dept}/${url.pathname.split('/').pop()}`, state: i })
                                                
                                            }}>View Profile</div>
                                        ) : null}

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

export default People