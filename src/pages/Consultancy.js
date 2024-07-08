import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import {useParams } from 'react-router-dom'
import Loading from '../components/Loading'

function Consultancy() {
    const tablehead = ['Role', "Consultancy Type", "Title", "Funding Agency", "From","To","Amount","Status","Co-investigator"]
    const dept= useParams()?.dept;
    const {data,loading} = useFetch(`/dept/${dept}/deptConsultancy`);

    let consultancies = []
    data.map((ele) => {
        if(ele?.ID?.consultancy){
            ele.ID.consultancy?.map((consultancy) => {
                consultancies.push(consultancy);
            })
        }
    })
        
    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name="Consultancy" />
            {!loading?<Table tablehead={tablehead} data={consultancies}/>:<Loading/>}
        </div>
    )
}

export default Consultancy
