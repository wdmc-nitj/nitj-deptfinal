import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'
import useFetch from '../hooks/useFetch'
import {useParams } from 'react-router-dom'
import Loading from '../components/Loading'

function Consultancy() {
    // Updated tablehead to match actual field names from your MongoDB document
    const tablehead = ["NAME OF FACULTY (CHIEF CONSULTANT)", "CLIENT ORGANIZATION", "TITLE OF CONSULTANCY OF PROJECT", "AMOUNT RECEIVED (IN RUPEES)", "AMOUNT RECEIVED (IN WORDS)"]
    const dept = useParams()?.dept;
    const {data, loading} = useFetch(`/dept/${dept}/Consultancy`);

    // Directly use data since it should be an array of consultancy objects
    let consultancies = [];
    
    // Check if data exists and is an array
    if (data && Array.isArray(data)) {
        consultancies = data;
    }
        
    return (
        <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto my-[60px] pt-[54px] place-items-center'>
            <Heading name="Consultancy" />
            {!loading ? <Table tablehead={tablehead} data={consultancies}/> : <Loading/>}
        </div>
    )
}

export default Consultancy