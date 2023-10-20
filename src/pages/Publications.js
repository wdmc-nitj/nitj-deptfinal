import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

function Publications() {
    const tablehead = ["Name", "Aurthor + Title","Year", "Link"]
    const {data,loading} = useFetch(`/dept/${useParams()?.dept}/Faculty`)
    let publications = []
    data.map((ele) => {
        if(ele?.ID?.journal){
            console.log(ele?.ID?.journal);
            ele.ID.journal?.map((journal) => {
                publications.push(journal);
            })
        }
    })
    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name="Publications" />
            {!loading?<Table tablehead={tablehead} data={publications}/>:<Loading/>}
        </div>
    )
}

export default Publications
