import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import logo from './Img/logo.png'
import { departments } from '../config/server';
function Navbar({menu,setMenu}) {
    // let navigate = useNavigate();
    const dept = useLocation().pathname.split('/')[2];
    const { data } = useFetch(`/dept/${dept}/Faculty`);
    // const [isLogin, setIsLogin] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        // setIsLogin(data?.validation?.status?.login);
    }, [data])
    return (
        <div>
            <nav className="scroll-smooth z-50 w-full bg-white lg:flex lg:items-center lg:justify-between lg:px-4 shadow">
                <div className="flex justify-between p-1 items-center ">
                    <div className='flex items-center justify-center'>
                        <img className="w-[3.5rem] inline mx-1 sm:mx-2 cursor-pointer" src={logo} alt="logo" />
                        <div className="ml-2 text-sm sm:text-xl leading-5 text-[#0054A6]  cursor-pointer font-semibold">
                            <div className='flex-col'>
            
                            <a href="#"><span className='inline-block'>Department of</span> {departments[dept]}</a>
                            <div className='text-xs sm:text-base font-normal'>Dr B R Ambedkar National Institute of Technology Jalandhar</div>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer text-black mx-2 mr-3 lg:hidden block" onClick={()=>setMenu(!menu)}>
                        <i className="fa-xl fa-solid fa-bars text-[#0054A6]"></i>
                    </div>
                </div>

                <ul className="lg:flex lg:items-center z-50 lg:z-auto lg:relative absolute bg-white w-full lg:h-[5rem] lg:top-0 lg:w-auto lg:py-0 py-4 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">

                    <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a target='_blank' href="https://nitj.ac.in" className="flex items-center justify-center text-[#0054A6] hover:text-[#D3D3D3] duration-500 ">
                            <span className='hidden sm:block text-lg font-bold mx-2 mt-1'>NITJ</span>
                            <i className="fa-xl fa-solid fa-house"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
