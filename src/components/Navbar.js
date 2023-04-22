import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import logo from './Img/logo.png'
function Navbar({menu,setMenu}) {
    let navigate = useNavigate();
    const dept = useLocation().pathname.split('/')[2];
    var id = useLocation().pathname.split('/').at(-1);
    const { data, loading, error, reFetch } = useFetch(`/dept/${dept}/Faculty`);
    const [isLogin, setIsLogin] = useState(false);
    const departments = {
        "it": "Information Technology",
        "cse": "Computer Science and Engineering",
        "bt": "Bio Technology",
        "ce": "Civil Engineering",
        "ch": "Chemical Engineering",
        "ece": "Electronics and Communication Engineering",
        "ee": "Electrical and Electronics Engineering",
        "ice": "Instrumentation and Control Engineering",
        "me": "Mechanical Engineering",
        "ipe": "Industrial and Production Enginnering",
        "math": "Mathematics",
        "phy": "Physics",
        "tt": "Textile Technology",
        "hum": "Humanities & Management",
        "cy": "Chemistry",
        'cee':'Center for Energy and Environment','cai':'Center for Artificial Intelligence',
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLogin(data?.validation?.status?.login);
    }, [data])
    return (
        <div>
            <nav className="scroll-smooth z-50 w-full bg-white lg:flex lg:items-center lg:justify-between lg:px-4 font-['Poppins'] shadow">
                <div className="flex justify-between p-1 items-center ">
                    <div className='flex items-center justify-center'>
                        <img className="w-[3.5rem] inline mx-2 cursor-pointer" src={logo} alt="logo" />
                        <div className="text-base sm:text-xl ml-2 leading-5 text-[#0054A6]  cursor-pointer font-bold">
                            <div className='flex-col'>
            
                            <a href="#"><span className='hidden sm:inline-block'>Department of</span> {departments[dept]}</a>
                            <div className='text-xs sm:text-base font-normal'>Dr B R Ambedkar National Institute of Technology Jalandhar</div>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer text-black mx-2 mr-3 lg:hidden block" onClick={()=>setMenu(!menu)}>
                        <i className="fa-xl fa-solid fa-bars text-blue-700"></i>
                    </div>
                </div>

                <ul className="lg:flex lg:items-center z-50 lg:z-auto lg:relative absolute bg-white w-full lg:h-[5rem] lg:top-0 lg:w-auto lg:py-0 py-4 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">

                    <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a target='_blank' href="https://nitjmain.onrender.com/" className="flex items-center justify-center text-[#0054A6] hover:text-[#D3D3D3] duration-500 ">
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
