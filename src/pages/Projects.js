import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

function Projects() {
    const tablehead = ['Sr No', "Project Title", "Year of sanction", "Funding Agency", "SANCTION AMOUNT RS IN LAC"]
    const {data} = useFetch(`/dept/${useParams()?.dept}/Projects`)
    // //console.log(data)
    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name="Projects" />
            <Table tablehead={tablehead} data={data}/>
        </div>
    )
}

export default Projects
