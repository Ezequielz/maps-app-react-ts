import { FC, useReducer, useContext, useEffect } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';

import { PlacesContext } from '../';

export interface MapState {
   isMapReady: boolean;
   map?: Map,
   markers: Marker[];
}


const MAP_INITIAL_STATE: MapState = {
   isMapReady: false,
   map: undefined,
   markers: []
   
}

interface Props {
   children?: React.ReactNode
}


export const MapProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer( mapReducer, MAP_INITIAL_STATE );
   const { places } = useContext( PlacesContext );

   useEffect(() => {
     
      state.markers.forEach( marker => marker.remove() );
      const newMarkers: Marker[] = [];

      for (const place of places) {
         const [ lng , lat ] = place.center;
         const popup = new Popup()
               .setHTML(`
                  <h6>${ place.text }</h6>
                  <p>${ place.place_name }</p>
               `)

         const newMaker = new Marker()
            .setPopup( popup )
            .setLngLat([ lng, lat ])
            .addTo( state.map! );

         newMarkers.push( newMaker )
      }

      //TODO limpiar polyline
      dispatch({ type: '[Map] - setMarkers', payload: newMarkers })

   }, [places])
   

   const setMap = ( map: Map ) => {

      const myLocationPopup = new Popup()
         .setHTML(`
         <h4>Aqui estoy</h4>
         <p>En algun lugar del mundo</p>
         `)

      new Marker({
         color: '#61DAFB'
      })
         .setLngLat( map.getCenter() )
         .setPopup( myLocationPopup )
         .addTo( map );

        dispatch({ type:'[Map] - setMap', payload: map })
   }


   const getRouteBetweenPoints = async( start: [number,number], end: [number,number] ) => {

   }

   return (
       <MapContext.Provider value={{
          ...state,


          // methods
          setMap,
          getRouteBetweenPoints
       }} >
         { children }
       </MapContext.Provider>
   )
};