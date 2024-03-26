import {React} from 'react'
import { useLocation } from 'react-router-dom'
import People from './People'
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
function CenterStaff() {
    
    const url=useLocation();
    const {data,loading}=useFetch(url.pathname);
    return (
        <>
        {!loading?<People Title="Staff" Data={data}/>:<Loading/>}
        </>
        
    )
}

export default CenterStaff