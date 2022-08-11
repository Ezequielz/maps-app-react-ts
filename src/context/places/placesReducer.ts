import { Feature } from '../../interfaces/places';
import { PlacesState } from './PlacesProvider';


   type PlacesAction = 
   | { type: '[places] - setUserLocation', payload: [ number, number]  }
   | { type: '[places] - setLoadingPlaces'}
   | { type: '[places] - setPlaces', payload: Feature[] }


   export const placesReducer = ( state: PlacesState, action: PlacesAction ): PlacesState => {
   
      switch ( action.type ) {
            
        case '[places] - setUserLocation':
               return {
                   ...state,
                   isLoading: false,
                   userLocation: action.payload
               }
               
        case '[places] - setLoadingPlaces':
            return {
                ...state,
                isLoadingPlaces: true,
                places: [],
            }

        case '[places] - setPlaces':
            return {
                ...state,
                isLoadingPlaces: false,
                places: action.payload
            }

        default:
               return state;
       }
   };