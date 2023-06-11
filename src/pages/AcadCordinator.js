import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

function AcadCordinator() {
    // const [url,setUrl]=useState(useLocation());
    // const {data,loading,error,reFetch}=useFetch(url.pathname);
    const tablehead = ['Programme', "Coordinator"]
    const {data} = useFetch(`/dept/${useParams()?.dept}/Acadcord`);
    return (
        <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Academic Coordinators" />
            
            {data.length>0?<Table tablehead={tablehead} data={data}/>:<Loading/>}
        </div>
    )
}

export default AcadCordinator
