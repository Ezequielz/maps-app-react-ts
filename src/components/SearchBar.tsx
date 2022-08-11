import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';


export const SearchBar = () => {

    const { searchPlacesByTerm } = useContext( PlacesContext )
    const deboundRef = useRef<NodeJS.Timeout>()    

    const onQuerychanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        if ( deboundRef.current )
            clearTimeout( deboundRef.current )

        deboundRef.current = setTimeout(() => {
            //TODO buscar o ejecutar consulta
            searchPlacesByTerm( event.target.value )
        }, 350);

    }



  return (
    <div className="search-container">
        <input 
            type="text" 
            className="form-control"
            placeholder="Buscar Lugar"
            onChange={ onQuerychanged }
        />

        <SearchResults />
    </div>
  )
}
