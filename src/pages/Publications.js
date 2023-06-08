import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

function Publications() {
    const tablehead = ['Document title', "Authors", "Year", "Source", "Status"]
    const {data} = useFetch(`/dept/${useParams()?.dept}/Publications`)
    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name="Publications" />
            <Table tablehead={tablehead} data={data} />
        </div>
    )
}

export default Publications
