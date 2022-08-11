/* eslint import/no-webpack-loader-syntax: off */

import { MapState } from './MapProvider';
//@ts-ignore
import { Map, Marker } from '!mapbox-gl';


   type MapAction = 
   | { type: '[Map] - setMap', payload: Map  }
   | { type: '[Map] - setMarkers', payload: Marker[]  }


   export const mapReducer = ( state: MapState, action: MapAction ): MapState => {
   
      switch ( action.type ) {
       case '[Map] - setMap':
               return {
                   ...state,
                   isMapReady: true,
                   map: action.payload
               }
               
        case '[Map] - setMarkers':
            return {
                ...state,
                markers: action.payload
            }

           default:
               return state;
       }
   };