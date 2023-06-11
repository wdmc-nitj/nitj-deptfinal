import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import People from './People'
import { useState } from 'react';

function Faculty() {
    const [url,setUrl]=useState(useLocation());
    const {data,loading,error,reFetch}=useFetch(url.pathname);
    return (
        <People Title="Faculty" Data={data}/>
    )
}

export default Faculty
