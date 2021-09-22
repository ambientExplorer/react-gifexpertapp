// import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( { category }) => {


    // const [images, setImages] = useState([])

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages )
    // }, [ category ])

    
    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="animate__animated animate__pulse"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id}
                            { ...img }
                        />
                    ))
                }

            </div>
        </>

    )
}
