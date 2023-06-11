import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import {useParams } from 'react-router-dom'
import Loading from '../components/Loading'

function Consultancy() {
    const tablehead = ['Sr No', "Name of Faculty (Chief Consultant)", "Client Organization", "Title of Consultancy of Project", "Amount Received (in Rupees)","Amount Received (in words)"]
    // const data = [{
    //     1:'1',
    //     2:'Dr. J.K. Ratan',
    //     3:'AB Sugar Limited',
    //     4:'Studies on treatment technology of ground water of AB sugar limited',
    //     5:'100000',
    //     6:'One Lac Rupees'
    // }]
    const dept= useParams()?.dept;
    const {data,loading} = useFetch(`/dept/${dept}/Consultancy`);
    //console.log(data)
        
    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name="Consultancy" />
            {!loading?<Table tablehead={tablehead} data={data}/>:<Loading/>}
        </div>
    )
}

export default Consultancy
