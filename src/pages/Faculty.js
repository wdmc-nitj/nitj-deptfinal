import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import People from './People'
import Loading from '../components/Loading';

function Faculty() {
    const url = useLocation();
    const {data,loading}=useFetch(url.pathname);
    console.log(data);
    
    return (
        <>
            {!loading>0?<People Title="Faculty" Data={data.length > 0 ? data : []}/>:<Loading/>}
        </>
        
    )
}

export default Faculty
