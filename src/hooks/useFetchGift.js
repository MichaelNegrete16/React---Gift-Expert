import { useState, useEffect } from "react"
import { getGift } from "../helpers/getGifs"

export const useFetchGift = (categoria) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    
    useEffect(() => {
        
        getGift(categoria)
            .then(img => {
                    // console.log(img)
                    setState({
                        data: img,
                        loading:false
                    })
                
            })

    },[categoria])



    return state

}