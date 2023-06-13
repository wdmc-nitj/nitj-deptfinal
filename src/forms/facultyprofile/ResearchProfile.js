import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { SERVER_URL } from '../../config/server';

function ResearchProfile({ edit,data ,faculty,token}) {
    const dept = useLocation().pathname.split('/')[2];
    const [interset, setInterset] = useState(data?data['Research Interests']:"");
    const [researchlink, setResearchlink] = useState(data?data['Brief Research Profile']:"")
    const handleSubmit=async(e)=>{

        let newRow = {};
        const formdata = new FormData(e.target);
        for (let [key, value] of formdata.entries()) {
            newRow ={
                ...newRow,
                [key]:value
            }
        }

        try {
            await axios.put(`${SERVER_URL}/dept/${dept}/Faculty/${faculty._id}/${token}?q=research_profile`,newRow);
        } catch (error) {
            
        }
    }
    return (
        <div className='overflow-x-auto'>
            {
                edit ? <div className="m-4 flex justify-center items-center">
                    <form className="w-full max-w-lg shadow p-3" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-sm font-bold mb-2" htmlhtmlFor="grid-password">
                                    Research Interests
                                </label>
                                <textarea className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 shadow-inner leading-tight focus:outline-none focus:border-gray-50" name='Research Interests' onChange={(e) => setInterset(e.target.value)} id="title" type="text" placeholder="Title" value={interset}></textarea>
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-sm font-bold mb-2" htmlhtmlFor="grid-password">
                                    Profile Link
                                </label>
                                <textarea className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-50 shadow-inner" name='Brief Research Profile' onChange={(e) => setResearchlink(e.target.value)} value={researchlink} id="link" type="text" placeholder="" />
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
                </div> :
                    <div className="overflow-x-auto relative my-2 min-w-[570px] scrollbar">
                        <div className="flex max-w-full justify-between items-center p-4 shadow-md">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="w-48 align-top font-bold pr-4 pl-2 py-2">Research Interests</td>
                                        <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                        <td className='align-top pr-4 pl-2 py-2'>{interset}</td>
                                    </tr>
                                    <tr>
                                        <td className="w-48 align-top font-bold pr-4 pl-2 py-2">Brief Research Profile</td>
                                        <td className="align-top text-sm font-bold pr-4 pl-2 py-2">:</td>
                                        <td className='align-top pr-4 pl-2 py-2'>{researchlink}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ResearchProfile
