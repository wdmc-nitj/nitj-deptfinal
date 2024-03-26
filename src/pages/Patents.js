import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

function Patents() {
    const tablehead = ["Name", "Reg./Ref. No.","Date of Award/Filling", "Organization","Status"]
    const {data,loading} = useFetch(`/dept/${useParams()?.dept}/Faculty`)
    let Patents = []
    data.map((ele) => {
        if(ele?.ID?.patent){
            ele.ID.patent?.map((patent) => {
                Patents.push(patent);
            })
        }
    })
    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name="Patents" />
            {!loading?<Table tablehead={tablehead} data={Patents}/>:<Loading/>}
        </div>
    )
}

export default Patents
