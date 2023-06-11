import {React,useState} from 'react'
import { useLocation } from 'react-router-dom'
import People from './People'
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
function Staff() {
    
    const [url,setUrl]=useState(useLocation());
    const {data,loading,error,reFetch}=useFetch(url.pathname);
    return (
        <>
        {!loading?<People Title="Staff" Data={data}/>:<Loading/>}
        </>
        
    )
}

export default Staff
