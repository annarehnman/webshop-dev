import React from 'react';
import { GoogleMap, LoadScript } from 'react-google-maps'

const MapContainer = () => {
  // const { isLoaded, loadError } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})

  const containerStyle = { 
    width: '100vw', 
    height: '100vh'
  }
  const center = { 
    lat: 35.6804, 
    lng: 139.769
  }

  return (
    <LoadScript
    googleMapsApiKey='REACT_APP_GOOGLE_MAPS_API_KEY'
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  </LoadScript>
  )

  // if (loadError) return 'Error loading maps'
  // if (!isLoaded) return (
  //   <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}></GoogleMap>
  // )
}

export default MapContainer
