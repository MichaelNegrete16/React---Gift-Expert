import axios from "axios"

const getGift = async(categoria) => {
        
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=AeMa0a8OsXtdJ7ZPiqkWUbUol07tGEBV`
        const {data:valores} = await axios(url)
        const {data} = valores

        const gifs = data.map(img => {
            return{
                id: img.id,
                title:img.title,
                url: img.images?.original.url
            }
        })
        return(gifs)

    } catch (error) {
        console.log(error)
    }

}

export {
    getGift
}