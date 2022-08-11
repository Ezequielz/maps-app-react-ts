import axios from 'axios'


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZXplcXVpZWx6IiwiYSI6ImNsNm1xMXBnbDBvMjUzYm82aTZoZ3l4MnYifQ.Y7MlzUQfBuT0W6XVXUHTBA'
    }
})


export default directionsApi;