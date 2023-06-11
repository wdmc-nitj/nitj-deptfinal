import {React,useState} from 'react'
import People from './People'
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
function PhdScholar() {
    const [url,setUrl]=useState(useLocation());
    const {data,loading,error,reFetch}=useFetch(url.pathname);
    
    return (
        
        <>
        {!loading?<People Title="PhD Scholars" Data={data}/>:<Loading/>}
        </>
    )
}

export default PhdScholar
