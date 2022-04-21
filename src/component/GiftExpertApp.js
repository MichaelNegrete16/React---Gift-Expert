import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GiftGrid } from './GifGrid'

const GiftExpertApp = () => {

    // const categorias = ['One Punch','Goku']
    const [categorias, setCategorias ] = useState([])

    // const handleAdd = () => {
        //Fomar 1 de hacer
        // const test = [...categorias,'One Punch']
        // setCategorias(test)
        //Forma 2
        // setCategorias([...categorias,'One Punch'])
        //Forma 3
        // setCategorias(cat => [...cat, 'One Punch'])
    // }

    return (
        <>
            <h2 className='giftExpert'>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>   

            

            <ol>
                {categorias.map( categoria => (
                    <GiftGrid categoria={categoria} key={categoria}/>
                ))}
            </ol>

        </>
    )
}

export default GiftExpertApp
