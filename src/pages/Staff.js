import {React} from 'react'
import { useLocation } from 'react-router-dom'
import People from './People'
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
function Staff() {
    
    const url=useLocation();
    const {data,loading}=useFetch(url.pathname);
    return (
        <>
        {!loading?<People Title="Staff" Data={data}/>:<Loading/>}
        </>
        
    )
}

export default Staff
