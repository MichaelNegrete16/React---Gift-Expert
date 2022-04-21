import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGift } from '../hooks/useFetchGift';

export const GiftGrid = ({categoria}) => {

    const {data,loading} = useFetchGift(categoria)


    return (
        
        <>
            <h3 className='title animate__animated animate__backInDown'> {categoria} </h3>
            
            {loading && <p>Loading..</p> }

            <div className='card-grid'>

                {data.map((img) => (
                    <GifGridItem key={img.id} img={img} />
                ))}

            </div>
        </>
    )
}
