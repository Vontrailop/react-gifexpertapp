import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);


    return (
        <>
            <h3 className="animate__animated animate__lightSpeedInRight">{category}</h3>
            
            {
                loading && <p className="animate__animated animate__backInDown">Loading</p>
            }

            <div className="card-grid">

                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
