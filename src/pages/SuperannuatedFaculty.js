import React from 'react';
import People from './People';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

function SuperannuatedFaculty() {
    const url = useLocation();
    const { data, loading } = useFetch(url.pathname);

    return (
        <>
            {!loading
                ? <People Title="Superannuated Faculty" Data={data} />
                : <Loading />
            }
        </>
    );
}

export default SuperannuatedFaculty;