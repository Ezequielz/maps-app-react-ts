import { PlacesState } from './PlacesProvider';


   type PlacesAction = 
   | { type: '[places] - setUserLocation', payload: [ number, number]  }


   export const placesReducer = ( state: PlacesState, action: PlacesAction ): PlacesState => {
   
      switch ( action.type ) {
            
        case '[places] - setUserLocation':
               return {
                   ...state,
                   isLoading: false,
                   userLocation: action.payload
               }

        default:
               return state;
       }
   };