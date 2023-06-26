import React, { useEffect } from 'react'
import logo from './Img/logo.png'
import { useRef } from 'react'
function Footer({ scroll, handlescroll }) {
    const footref = useRef(null);
    const HscrollIntoView = () => {
        if (scroll && footref.current) {
            footref.current.scrollIntoView({ behavior: 'smooth' });
            handlescroll();
        }
    }
    useEffect(() => {
        HscrollIntoView();
    }, [HscrollIntoView])

    return (

        <>
            <div className="flex flex-col justify-between bg-slate-800 text-white lg:flex-row lg:px-20">
                <div className="flex basis-1/3 flex-col border-y-gray-300 p-[25px] lg:border-r lg:border-zinc-400">
                    <div className="flex flex-row items-center gap-x-[10px] pb-3">
                        <img src={logo} alt="NITJ logo" className="h-[67px] w-[67px]" />
                        <p className="font-semibold text-white lg:text-[20px]">
                            Dr. B R Ambedkar National Institute of Technology, Jalandhar
                        </p>
                    </div>
                    <div className="p-[20px]">
                        <div className="pb-[6px] lg:w-[85%]">
                            <i className="fas fa-location-dot pr-[8px]"></i><span className="opacity-90">G.T Road, Amritsar Bypass, Jalandhar,
                                Punjab, India-144011</span>
                        </div>
                        <div className="flex flex-row pb-[6px]">
                            <i className="fas fa-envelope mt-1 pr-[8px]"></i>
                            <h3 className="opacity-90">webmaster@nitj.ac.in</h3>
                        </div>
                        <div className="align-center flex flex-row pb-[14px]">
                            <i className="fas fa-phone mt-1 pr-[8px]"></i>
                            <h3 className="opacity-90">
                                +91-0181-5037855, 2690301, 2690453, 3082000
                            </h3>
                        </div>
                        <div id="social-links" className="flex flex-col bg-slate-800">
                            <div className="flex flex-row gap-10 mt-4">
                                <div className="text-l text-white">
                                    <a href="https://www.facebook.com/NITJofficial/" target="_blank">
                                        <i className="fa-brands fa-facebook text-[21px] hover:text-yellow-300"></i></a>
                                </div>
                                <div className="text-l text-white">
                                    <a href="https://twitter.com/NITJofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                                        target="_blank">
                                        <i className="fab fa-twitter text-[21px] hover:text-yellow-300"></i></a>
                                </div>
                                <div className="text-l text-white">
                                    <a href="https://in.linkedin.com/school/dr-b-r-ambedkar-national-institute-of-technology-jalandhar-official/"
                                        target="_blank">
                                        <i className="fa-brands fa-linkedin text-[21px] hover:text-yellow-300"></i></a>
                                </div>
                                <div className="text-l text-white">
                                    <a href="https://www.instagram.com/nitjofficial/?hl=en" target="_blank">
                                        <i className="fa-brands fa-instagram text-[21px] hover:text-yellow-300"></i></a>
                                </div>
                                <div className="text-l text-white">
                                    <a href="https://www.youtube.com/c/NITJOfficial" target="_blank">
                                        <i className="fa-brands fa-youtube text-[21px] hover:text-yellow-300"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden basis-2/3 p-[25px] lg:block">
                    <h2 className="my-1 text-xl font-semibold">Quick Links</h2>
                    <div className="flex flex-row p-[15px]">
                        <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">
                            <a href="#" className="hover:text-yellow-300 hover:underline">Admission</a>
                            <br />
                            <a href="#" className="hover:text-yellow-300 hover:underline">UnderGrad Courses</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">PostGrad Courses</a>
                            <br />
                            <a href="#" className="hover:text-yellow-300 hover:underline">Departments</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Academic Calender</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Clubs And Societies</a>
                            <br />
                            <a href="#" className="hover:text-yellow-300 hover:underline">Campus Life</a>
                        </div>
                        <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">
                            <a href="#" className="hover:text-yellow-300 hover:underline">Faculty</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Staff</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Recruitment</a>
                            <br />
                            <a href="#" className="hover:text-yellow-300 hover:underline">Research</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Patent</a>
                        </div>
                        <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">
                            <a href="#" className="hover:text-yellow-300 hover:underline">Institute Prospectus(2019-2020)</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Annual Reports</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">MOM</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">UGC Act</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">NIT Act and statutes</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Pension</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Ministry of Education Notifications</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Annual Property Return</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">Rules/Policies</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">ARIIA(2020-2021)</a>
                        </div>
                        <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">
                            <a href="#" className="hover:text-yellow-300 hover:underline">ARIIA (2020-2021)</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">NIRF-2022</a>
                            <a href="#" className="hover:text-yellow-300 hover:underline">NewsLetter</a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="border-t border-zinc-400 flex flex-col bg-slate-800 px-20 p-[20px] text-center text-white lg:flex-row justify-between">
                <div className="pb-[10px] text-[12px] lg:pb-0 lg:text-[15px]">
                    © Copyright 2022, All Rights Reserved NIT Jalandhar
                </div>
                <div className="text-[12px] lg:text-[15px]">
                    <a href="#" className="mx-1 hover:text-yellow-300 hover:underline lg:mx-2">Other NITs</a>
                    |
                    <a href="#" className="mx-1 hover:text-yellow-300 hover:underline lg:mx-2">MoU</a>
                    |
                    <a href="#" className="mx-1 hover:text-yellow-300 hover:underline lg:mx-2">GIAN</a>
                    |
                    <a href="#" className="mx-1 hover:text-yellow-300 hover:underline lg:mx-2">TEQIP</a>
                    |
                    <a href="#" className="mx-1 hover:text-yellow-300 hover:underline lg:mx-2">Anti Ragging</a>
                    |
                    <a href="#" className="mx-1 hover:text-yellow-300 hover:underline lg:mx-2">Terms of Use</a>
                    |
                    <a href="#" className="mx-1 hover:text-yellow-300 hover:underline lg:mx-2">Credits</a>
                </div>
            </div>

        </>
    )
}

export default Footer
