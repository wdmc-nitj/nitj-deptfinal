import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

function Projects() {
    const tablehead = ['SR NO', "PROJECT TITLE", "YEAR OF SANCTION", "FUNDING AGENCY", "SANCTION AMOUNT RS IN LAC","LINK"]
    const {data,loading} = useFetch(`/dept/${useParams()?.dept}/Projects`)
    // //console.log(data)
    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name="Projects" />
            {!loading?<Table tablehead={tablehead} data={data}/>:<Loading/>}
            
        </div>
    )
}

export default Projects
