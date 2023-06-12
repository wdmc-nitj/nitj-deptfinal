import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import People from './People'
import { useState } from 'react';
import Loading from '../components/Loading';

function Faculty() {
    const [url,setUrl]=useState(useLocation());
    const {data,loading,error,reFetch}=useFetch(url.pathname);
    return (
        <>
        {!loading>0?<People Title="Faculty" Data={data}/>:<Loading/>}
        </>
        
    )
}

export default Faculty
