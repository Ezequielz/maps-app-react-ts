import React from 'react';
import ReactDOM from 'react-dom/client';

import { MapsApp } from './MapsApp';

// import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
// mapboxgl.accessToken = 'pk.eyJ1IjoiZXplcXVpZWx6IiwiYSI6ImNsNm1xMXBnbDBvMjUzYm82aTZoZ3l4MnYifQ.Y7MlzUQfBuT0W6XVXUHTBA';


if ( !navigator.geolocation ) {
  alert('tu navegador no tiene opción de Geolocalizacion');
  throw new Error('tu navegador no tiene opción de Geolocalizacion');
  
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
