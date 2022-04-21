import React from 'react'

const GifGridItem = ({img}) => {

    const {url,title} = img
    
    return (
        <div className='card animate__animated animate__backInDown'>
            <div>
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>

        </div>
    )
}

export default GifGridItem