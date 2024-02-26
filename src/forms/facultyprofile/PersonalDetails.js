import React, { useState } from 'react'
import { SERVER_URL, departments } from '../../config/server';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function PersonalDetails({ edit, data, token }) {
    const tablehead = ['Name', 'Designation', 'Department', 'Qualification', 'Address', 'Phone', 'Email ID'];
    const feild = ['name', 'designation', 'department', 'education_qualification'];
    const qualificationMapping = {
        'column': 'column',
        'College': 'clg',
        'Degree': 'degree',
        'field': 'field',
        'Year': 'year'
    }

    const [education, setEducation] = useState(data?.education_qualification)
    const [editAddress, setEditAddress] = useState(data.correspondence_address)
    const [editImg, setEditImg] = useState(data.img)
    const dept = useLocation().pathname.split('/')[2];
    const address = ['address', 'city', 'pin', 'state']
    const handleSubmit = async (e) => {

        let data = {
            correspondence_address: editAddress,
            img: editImg,
            education_qualification: education,
        }
        try {
            await axios.put(`${SERVER_URL}/dept/${dept}/Faculty/${data._id}/${token}/personalDetails`, data);
        } catch (error) {
            alert('Some error occured. Use Chrome browser to edit Details.')
        }
    }
    return (
        <div className='overflow-x-auto'>
            {
                edit ? <div className="mt-10 sm:mt-0 shadow-md border-2 rounded">
                    <div className="">
                        <div className="mt-5 md:mt-0">
                            <form>
                                <div className="overflow-hidden sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className='block'>Education Qualification</div>
                                        <div className="flex flex-col gap-6">
                                            {
                                                education.map((ed, index) => {
                                                    return (
                                                        <div className='flex gap-2'>
                                                            {Object.keys(qualificationMapping).map((feild) => {
                                                                return (
                                                                    <div key={index} className="col-span-6 sm:col-span-3">
                                                                        <label htmlFor={qualificationMapping[feild]} className="block uppercase text-sm font-medium px-1">{feild}</label>
                                                                        <input type="text" name={qualificationMapping[feild]} className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm" value={ed[feild]} />
                                                                    </div>
                                                                )
                                                            })}
                                                            <div className='bg-[#0054A6] flex justify-center items-center ml-2 text-white text-base duration-500 w-20 xl:w-24 py-2 px-3 text-center shadow-md border border-[#FFD66E]  rounded hover:-translate-y-1 hover:scale-110' onClick={() => {
                                                                setEducation(prev => {
                                                                    return prev.filter((val, i) => i !== index)
                                                                })
                                                            }}>Delete</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='bg-[#0054A6] mt-2 ml-2 text-white text-base duration-500 w-20 xl:w-24 py-2 px-3 text-center shadow-md border border-[#FFD66E]  rounded hover:-translate-y-1 hover:scale-110' onClick={() => setEducation(prev => {
                                            return [...prev, {
                                                'column': '',
                                                'clg': '',
                                                'degree': '',
                                                'field': '',
                                                'year': ''
                                            }]
                                        })}>Add</div>
                                        <div className="grid grid-cols-6 gap-6 mt-4">
                                            {
                                                address?.map((item, i) => {
                                                    return (
                                                        <div key={i} className="col-span-6 sm:col-span-3">
                                                            <label htmlhtmlFor="last-name" className="block uppercase text-sm font-medium px-1">{item}</label>
                                                            <textarea type="text" onChange={(e) => {
                                                                setEditAddress(prev => {
                                                                    return { ...prev, [item]: e.target.value }
                                                                })
                                                            }} name={item} className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"></textarea>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='grid grid-cols-6 gap-6 mt-4'>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlhtmlFor="last-name" className="block uppercase text-sm font-medium px-1">Phone</label>
                                                <textarea type="text" name='phone' onChange={(e) => {
                                                    setEditAddress(prev => {
                                                        return { ...prev, phone: e.target.value }
                                                    })
                                                }} className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm" value={editAddress?.phone}></textarea>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlhtmlFor="last-name" className="block uppercase text-sm font-medium px-1">Fax</label>
                                                <textarea type="text" name='fax' onChange={(e) => {
                                                    setEditAddress(prev => {
                                                        return { ...prev, fax: e.target.value }
                                                    })
                                                }} value={editAddress?.fax} className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"></textarea>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlhtmlFor="last-name" className="block uppercase text-sm font-medium px-1">Image</label>
                                                <input type="text" name='img' onChange={(e) => {
                                                    setEditImg(e.target.value)
                                                }} value={editAddress?.fax} className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex px-3 w-full justify-end">
                                    <div onClick={handleSubmit} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 active:translate-y-[2px] hover:shadow-xl">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                                            Submit
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> :
                    <div className='overflow-x-auto relative my-2 scrollbar min-w-[500px]'>
                        <div className='flex max-w-full justify-between items-center text-sm sm:text-base p-2 sm:p-4 shadow-md'>
                            <table>
                                <tbody>
                                    {
                                        feild.map((item, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td className="w-48 align-top font-bold pr-4 pl-2 py-2 text-sm sm:text-base">{tablehead[i]}</td>
                                                    <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                                    <td className='align-top pr-4 pl-2 py-2 w-full text-sm sm:text-base'>
                                                        {
                                                            item === "education_qualification" ?
                                                                <div>
                                                                    {
                                                                        data[item].map((Item, j) => {
                                                                            return (
                                                                                Item['degree'] != null && <div key={j}>
                                                                                    <span className='font-semibold mx-1'>{Item['degree']}</span>
                                                                                    <span className='mx-1'>{Item['field']}</span>
                                                                                    <span>({Item['clg']})</span>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div> : item === "department" ? departments[dept] : data[item]
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr>
                                        <td className="w-48 align-top font-bold pr-4 pl-2 py-2">Address</td>
                                        <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                        <td className='align-top pr-4 pl-2 py-2'>
                                            {
                                                address.map((item, i) => {
                                                    return <span className='mx-1' key={i}>{editAddress ? editAddress[item] : ""}</span>
                                                })
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-48 align-top font-bold pr-4 pl-2 py-2">Email</td>
                                        <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                        <td className='align-top pr-4 pl-2 py-2'>{data['email']}</td>
                                    </tr>
                                    <tr>
                                        <td className="w-48 align-top font-bold pr-4 pl-2 py-2">Phone</td>
                                        <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                        <td className='align-top pr-4 pl-2 py-2'>{editAddress?.phone}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    )
}

export default PersonalDetails
