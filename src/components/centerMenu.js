import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import logo from './Img/logo.png'
function CenterMenu({ menu, setMenu }) {
    let navigate = useNavigate();
    const center = useLocation().pathname.split('/')[2];
    const link = useLocation().pathname.split('/')[3];
    const Link = {
        'Home': -1,
        'MSME': 0, 'SDC': 0, 'Achievement': 0, 'PMKVY4.0': 0,
        'Faculty': 1,  'Student': 1, 'Staff': 1,
        'Contact Us': 2
    }
    const Menu = [
        {
            Title: 'About',
            Logo: 'fa fa-info',
            List: [
                {
                    l: 'MSME',
                    link: `/center/${center}/MSME`
                }, {
                    l: 'PMKVY4.0',
                    link: `https://www.pmkvyofficial.org/`,
                    newTab: true
                }
            ],
        }, {
            Title: 'People',
            Logo: 'fa fa-person',
            List: [
                {
                    l: 'Faculty',
                    link: `/center/${center}/Faculty`
                },{
                    l: 'Staff',
                    link: `/center/${center}/Staff`
                }
            ]
        },
         {
            Title: 'Reach to Us',
            Logo: 'fa fa-user-group',
            List: [
                {
                    l: 'Contact Us',
                    link: `/center/${center}/contact`
                }
            ]
        },
    ]

    const [linkOpen, setLinkOpen] = useState(Link[link]);

    return (
        <>
            <div className={"z-30 overflow-y-auto bg-white scrolling-touch max-w-full lg:max-w-xs lg:max-h-[calc(100vh-4rem)] lg:block lg:sticky lg:mr-0 scrollbar lg:top-[80px]"}>


                <div className={"mx-auto lg:mx-0 lg:mr-1 lg:flex flex-col items-center w-[98%] overflow-y-auto my-3 py-1 " + (menu ? 'flex' : 'hidden')}>
                    <div className='w-full px-1'>
                        <span className={"flex items-center w-full h-10 px-3 mt-2 rounded cursor-pointer active:translate-y-[2px] shadow-sm border border-gray-200/75 " + (linkOpen === -1 ? 'border-sky-200' : '')} onClick={() => { navigate(`/center/${center}/Home`); setLinkOpen(-1); setMenu(!menu); }}>
                            <i className="pl-1 pt-[2px] w-6 h-6 stroke-current fa fa-home"></i>
                            <span className="ml-1 font-medium">Home</span>
                        </span>
                    </div>
                    {
                        Menu.map((item, i) => {

                            return (
                                <div key={i} className={'w-[98%] mt-2 rounded ' + (i === linkOpen ? 'border border-sky-200' : '')}>
                                    <span className="flex items-center w-full h-10 px-3 rounded shadow-sm border border-gray-200/75 cursor-pointer" onClick={() => { item.List.length === 0 && navigate(item.link); item.List.length === 0 && setMenu(!menu); (i === linkOpen) ? setLinkOpen(-2) : setLinkOpen(i) }}>
                                        <i className={"pl-1 pt-[2px] w-6 h-6 stroke-current " + item.Logo}></i>
                                        <span className="ml-1 font-medium">{item.Title}</span>
                                    </span>

                                    {item.List.length > 0  && <ul className={"space-y-2 delay-200 overflow-hidden h-auto transition-all ml-2 p-1"}>
                                        {
                                            item.List?.map((iteml, j) => {
                                                return (
                                                    <li key={j} className="flex transition duration-75 group font-medium hover:text-blue-900 hover:scale-[1.02] cursor-pointer active:translate-y-[2px]" onClick={() => { 
                                                        setMenu(!menu)
                                                        if(!iteml.newTab) navigate(iteml.link); 
                                                        else window.open(iteml.link,"_blank")
                                                        
                                                        }}>
                                                        <i className="fa-sm fa-regular fa-circle-check stroke-current w-4 h-4 mr-1 pt-3"></i>
                                                        <span className="block p-1 text-sm hover:text-blue-900" >{iteml.l}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CenterMenu
