import React, { useState, useEffect } from 'react';

const DataFetcherWithHook = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/api/jobs')
            .then(response => response.json())
            .then(data => setData(data.data)
            );
    }, [])
    return (
        <>
            {data ? <p>Data has been fetched successfully <b>with using hook </b></p> : <p>Loading...</p>}
        </>
    )
}

export default DataFetcherWithHook;
