import React from 'react';
import People from './People';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

function PhdScholar() {
    const url = useLocation();
    const { data, loading } = useFetch(url.pathname);
    const extractYearFromEmail = (email) => {
        const parts = email.split('.');
        const yearPart = parts.length >= 3 ? parts[2] : null;
        return yearPart ? parseInt(yearPart, 10) : null;
    };

    const sortedData = data?.sort((a, b) => {
        const yearA = extractYearFromEmail(a.email);
        const yearB = extractYearFromEmail(b.email);
        return yearA - yearB;
    });
    
    // console.log(sortedData)
    return (
        <>
            {!loading ? <People Title="PhD Scholars" Data={sortedData} /> : <Loading />}
        </>
    );
}

export default PhdScholar;
