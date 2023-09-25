import React, { useEffect } from 'react'

import logo from './Img/logo.png'
import { useRef } from 'react'
import useFetch from '../hooks/useFetch'
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
    const { data } = useFetch(`/footer/get/all`);

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
                    <div className="flex flex-row justify-between p-[20px]">
                        <div className="flex  flex-col text-[11px] lg:text-[14px]">
                            {
                                data?.map((item, i) => {

                                    return (item?.column === 0) && (
                                        <a href={item?.link} className="hover:text-yellow-300 hover:underline">{item?.title}</a>
                                    )
                                })
                            }

                        </div>
                        <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">
                            {
                                data?.map((item, i) => {

                                    return (item?.column === 1) && (
                                        <a href={item?.link} className="hover:text-yellow-300 hover:underline">{item?.title}</a>
                                    )
                                })
                            }
                        </div>
                        <div className="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">
                            {
                                data?.map((item, i) => {

                                    return (item?.column === 2) && (
                                        <a href={item?.link} className="hover:text-yellow-300 hover:underline">{item?.title}</a>
                                    )




                                })
                            }
                        </div>
                        </div>
                </div>
            </div>
            <div
                className="border-t border-zinc-400 flex flex-col bg-slate-800 px-20 p-[20px] text-center text-white lg:flex-row justify-between">
                <div className="pb-[10px] text-[12px] lg:pb-0 lg:text-[15px]">
                    © Copyright 2023, All Rights Reserved NIT Jalandhar
                </div>
                <div className="text-[12px] lg:text-[15px]">
                    Developed in-house by Website Development and Management Committee (WDMC)
                </div>
            </div>

        </>
    )
}

export default Footer
