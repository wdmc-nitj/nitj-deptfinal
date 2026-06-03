import React from 'react';
import People from './People';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

function AdjunctFaculty() {
    const url = useLocation();
    const { data, loading } = useFetch(url.pathname);

    const sortedData = [...(data || [])].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <>
            {!loading
                ? <People Title="Adjunct Faculty / Professor of Practice" Data={sortedData} />
                : <Loading />
            }
        </>
    );
}

export default AdjunctFaculty;