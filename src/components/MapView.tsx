import { useContext, useRef } from "react"
import { PlacesContext } from "../context"
import { Loading } from "./"




export const MapView = () => {


    const { isLoading, userLocation } = useContext( PlacesContext );

    const mapDiv = useRef<HTMLDivElement>(null)


    if ( isLoading ) {
        return ( <Loading /> )
    }

  return (
    <div ref={ mapDiv }
        style={{
          backgroundColor: 'red',
          height: '100vh',
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100vw',
        }}
    >
        { userLocation?.join(',') }
    </div>
  )
}
