import { useEffect, useReducer } from 'react';

import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import React from 'react';
import { getUserLocation } from '../../helpers';

export interface PlacesState {
   isLoading: boolean;
   userLocation?: [ number, number ]
   
}


const PLACES_INITIAL_STATE: PlacesState = {
   isLoading: true,
   userLocation: undefined
}
interface Props {
   children?: React.ReactNode
}


export const PlacesProvider = ({ children }: Props) => {


   const [state, dispatch] = useReducer( placesReducer, PLACES_INITIAL_STATE );

   useEffect(() => {
      getUserLocation()
         .then( lngLat => dispatch({ type: '[places] - setUserLocation' , payload: lngLat }) )
   }, [])
   
   return (
       <PlacesContext.Provider value={{
            ...state,
       }} >
         { children }
       </PlacesContext.Provider>
   )
};