import { React } from 'react'
import gif from "./Vedio/New.gif";
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js'
import Heading from './Heading';


const Departmentmiddle = () => {
    const dept = useParams()?.dept;
    const Activity = useFetch(`/dept/${dept}/Activity`).data.sort((x, y) =>
        // true values first
        (x.new === y.new) ? 0 : x.new ? -1 : 1
        // false values first
        // return (x === y)? 0 : x? 1 : -1;
    );
    const News = useFetch(`/dept/${dept}/news`).data.sort(((b, c) => b.new === c.new ? 0 : b.new ? -1 : 1));
    return (
        <>
            <div className='flex flex-col md:flex-row w-[98%] justify-around items-center p-2 md:p-4 pb-0 place-items-center mx-auto'>

                {/* Activity  */}
                <div className='max-w-full w-full md:w-1/2 h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-2 my-[20px] pt-[54px] place-items-center'>
                    <Heading name="Activities" />

                    <div className='scrollbar max-w-full block h-80 overflow-y-auto overflow-x-clip pl-6 pr-2'>
                        <ul className='w-full flex list-disc flex-col justify-between divide-y-2'>
                            {
                                Activity ? Activity.map((n, i) => {
                                    return (
                                        <li className="py-3 w-full">
                                            <div className='relative'>
                                                <span className="w-full text-sm sm:text-base hover:text-[rgba(0,105,140,1)] cursor-pointer"><span onClick={() => { if (n.link !== undefined && n.link !== "") window.open(n?.link, "_blank"); }}>{n?.title}</span>&nbsp;<span className={"absolute pt-[5px] text-lg " + (n?.new ? '' : 'hidden')}><img className='min-w-[32px]' src={gif} alt='...' /></span>
                                                </span>
                                            </div>
                                        </li>
                                    )
                                }
                                ) : <h1>Data not available</h1>
                            }
                        </ul>
                    </div>
                </div>
                <div className='max-w-full w-full md:w-1/2 h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-2 my-[20px] pt-[54px] place-items-center'>
                    <Heading name="News & Highlights" />
                    <div className='scrollbar max-w-full block h-80 overflow-y-auto overflow-x-clip pl-6 pr-2'>
                        <ul className='w-full flex list-disc flex-col justify-between divide-y-2'>
                            {
                                News ? News.map((n, i) => {
                                    return (
                                        <li className="py-3 w-full">
                                            <div className='relative'>
                                                <span className="w-full text-sm sm:text-base hover:text-[rgba(0,105,140,1)] cursor-pointer"><span onClick={() => { if (n.link !== undefined && n.link !== "") window.open(n?.link, "_blank"); }}>{n?.title}</span>&nbsp;<span className={"absolute pt-[5px] text-lg " + (n?.new ? '' : 'hidden')}><img className='min-w-[32px]' src={gif} alt='...' /></span>
                                                </span>
                                            </div>
                                        </li>
                                    )
                                }
                                ) : <h1>Data not available</h1>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Departmentmiddle