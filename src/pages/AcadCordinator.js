import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
// import useFetch from '../hooks/useFetch'
// import { useLocation } from 'react-router-dom'
// import axios from 'axios';
function AcadCordinator() {
    // const [url,setUrl]=useState(useLocation());
    // const {data,loading,error,reFetch}=useFetch(url.pathname);
    const tablehead = ['Programme', "Coordinator"]
    const {data} = useFetch(`/dept/${useParams()?.dept}/Acadcord`);
    return (
        <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Academic Coordinators" />
            <Table tablehead={tablehead} data={data}/>
        </div>
    )
}

export default AcadCordinator
