import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { SERVER_URL } from '../config/server';

function BaseTable({ edit, tablehead, data, Editfeild, HandleEdit,feild,isLogin ,faculty,title,token}) {
    const [changedata, setChangedata] = useState(data);
    const Setdata = () => {
        var val = Editfeild < 0 ? 0 : Editfeild;
        setChangedata(data[val])
    }
    // //console.log(changedata)
    const dept = useLocation().pathname.split('/')[2];
    const [row, setrow] = useState(8); //row per page
    const [asec, setAsec] = useState(false);
    const totalrow = data.length;
    const totalPage = Math.ceil(totalrow / row);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        Setdata();
        setPage(1)
    }, [changedata,row,title])
    useEffect(()=>{
        setChangedata(data);
    },[Editfeild,data]);
    //console.log(title);
    
    const handleSubmit=async(e)=>{
        
        let newRow = {};
        const formdata = new FormData(e.target);
        for (let [key, value] of formdata.entries()) {
            newRow ={
                ...newRow,
                [key]:value
            }
        }
        if(Editfeild<0)
        data.push(newRow);
        else data[Editfeild] = newRow;
        try {
            await axios.put(`${SERVER_URL}/dept/${dept}/Faculty/${faculty._id}/${token}?q=${title}`,data);
        } catch (error) {
            //console.log(error);
        }
    }

    const handleDelete =async(index)=>{

        const newRow = data.filter((val,ind)=> ind!==index);
        try {
            const resp = await axios.put(`${SERVER_URL}/dept/${dept}/Faculty/${faculty._id}/${token}?q=${title}`,newRow);
            window.location.reload();
        } catch (error) {
            //console.log(error);
        }
    }
    return (
        <div>
            {edit ?
                <div className="mt-10 sm:mt-0 shadow-md border-2 rounded">
                    <div className="">
                        <div className="mt-5 md:mt-0">
                            <form  onSubmit={handleSubmit}>
                                <div className="overflow-hidden sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            {
                                                feild?.map((item, i) => {
                                                    return (
                                                        Editfeild < 0 ?
                                                            <div key={i} className="col-span-6 sm:col-span-3">
                                                                <label htmlhtmlFor="last-name" className="block text-sm font-medium px-1">{item}</label>
                                                                <textarea type="text" name={item} className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"></textarea>
                                                            </div> :
                                                            <div key={i} className="col-span-6 sm:col-span-3">
                                                                <label htmlhtmlFor="last-name" className="block text-sm font-medium px-1">{item}</label>
                                                                <textarea type="text" name={item} onChange={(e) => setChangedata(changedata[item] = e.target.value)} value={changedata[item]} className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm" ></textarea>
                                                            </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex px-3 w-full justify-end">
                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 active:translate-y-[2px] hover:shadow-xl">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                                            Submit
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> :
                <div className='flex flex-col items-center justify-between bg-white sm:rounded-lg w-full overflow-auto'>
                    <div className='flex w-[98%] items-center my-1'>
                        <div className='flex items-center my-1 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 rounded'>
                            <label htmlFor="states" className="mr-2">Rows per Page :</label>
                            <select id="states" value={row} onChange={(e) => setrow(e.target.value)} className="border-none outline-none">
                                <option defaultValue={row}>{row}</option>
                                <option value={8}>8</option>
                                <option value={20}>20</option>
                                <option value={60}>60</option>
                                <option value={100}>100</option>
                            </select>
                        </div>
                        {/* <div className='my-1'><input className='w-36 sm:w-full border outline-none p-2 rounded' placeholder='Search' /></div> */}
                    </div>
                    <div className="relative overflow-x-auto rounded w-full border">
                        <table className="min-w-[800px] w-full text-sm text-left text-gray-800 scroll-auto">
                            <thead className="text-gray-700 uppercase bg-gray-100 sm:shadow">
                                <tr>
                                    {
                                        tablehead.map((item, i) => {
                                            return (
                                                <th key={i} scope="col" className="px-6 py-3 border cursor-pointer border-gray-300" onClick={()=>item==="Year"&&setAsec(!asec)}>
                                                    {item}
                                                </th>
                                            )
                                        })
                                    }
                                    <th scope="col" className={"px-6 py-3 border border-gray-300 "+(isLogin?'':'hidden')}>
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.sort(((b, c) => asec?(b.Year - c.Year):(c.Year - b.Year)))?.map((Item, i) => {
                                        return (
                                            (i>=row*(page-1) && i<row*(page)) && <tr key={i} className="border-b">
                                                {
                                                    feild.map((item, j) => {
                                                        return (
                                                            <td key={{ i, j }} className="align-top px-6 py-4 text-gray-900 border-r">
                                                                {item==="Link"?
                                                                <a target="_blank" href={Item[item]}><i className="fa-solid fa-link"></i></a>
                                                                :<span>{Item[item]}</span>}
                                                            </td>
                                                        )
                                                    })
                                                }
                                                {data.length > 0 && isLogin &&
                                                    <td className="text-blue-700 font-bold px-6 py-4" >
                                                        <div className='active:scale-[0.98] cursor-pointer' onClick={() => { HandleEdit(i); Setdata() }}>Edit</div>
                                                        <div className='active:scale-[0.98] cursor-pointer mt-1 text-red-600' onClick={()=>{handleDelete(i);Setdata();}}>Delete</div>
                                                    </td>}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {data?.length === 0 && <h1 className='w-full font-medium px-6 py-4 text-lg border border-t-0'>No data available</h1>}
                        <div className="w-full min-w-[800px] my-2 px-2 flex flex-1 items-center justify-between">
                            <div>
                                <p className="text-sm">
                                    Showing
                                    <span className="font-medium mx-1">{row*(page-1)+1}</span>
                                    to
                                    <span className="font-medium mx-1">{row*(page) > totalrow ? totalrow : row*(page)}</span>
                                    of
                                    <span className="font-medium mx-1">{totalrow}</span>
                                    results
                                </p>
                            </div>
                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    <button onClick={() => setPage(page > 1 ? page - 1 : 1)} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 active:scale-95">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </button>

                                    <span className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">{page}</span>
                                    <span className="relative z-10 inline-flex items-center bg-indigo-300 px-4 py-2 text-sm font-semibold text-white">...</span>
                                    <span className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">{totalPage}</span>
                                    <button onClick={() => setPage(page < totalPage ? page + 1 : totalPage)} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 active:scale-95">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default BaseTable