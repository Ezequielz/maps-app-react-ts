import { useEffect, useReducer } from 'react';

import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import React from 'react';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../apis';

import { Feature, PlacesResponse } from '../../interfaces/places';

export interface PlacesState {
   isLoading: boolean;
   userLocation?: [ number, number ];
   isLoadingPlaces: boolean;
   places: Feature[];
   
}


const PLACES_INITIAL_STATE: PlacesState = {
   isLoading: true,
   userLocation: undefined,
   isLoadingPlaces: false,
   places: [],
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
   
   const searchPlacesByTerm = async( query: string ): Promise<Feature[]> => {
         if ( query.length === 0 ) {
            dispatch({ type: '[places] - setPlaces', payload: [] })
            return []
         }
         if ( !state.userLocation )  throw new Error("No hay ubicación del usuario");
         

         dispatch({ type: '[places] - setLoadingPlaces' })

         const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`,{
            params: {
               proximity: state.userLocation.join(',')
            }
         });

         dispatch({ type: '[places] - setPlaces', payload: resp.data.features })

         return resp.data.features
   }


   return (
       <PlacesContext.Provider value={{
            ...state,

            // methods
            searchPlacesByTerm
       }} >
         { children }
       </PlacesContext.Provider>
   )
};