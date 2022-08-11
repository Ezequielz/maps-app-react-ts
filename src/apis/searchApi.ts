import axios from 'axios'


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit: 5,
        lenguage: 'es',
        access_token: 'pk.eyJ1IjoiZXplcXVpZWx6IiwiYSI6ImNsNm1xMXBnbDBvMjUzYm82aTZoZ3l4MnYifQ.Y7MlzUQfBuT0W6XVXUHTBA'
    }
})


export default searchApi;