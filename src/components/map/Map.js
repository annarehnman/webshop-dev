import { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const Map = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoicmVobm1hbjEwMSIsImEiOiJjbDlvMDFqdWYwYnNpM25vNW85ZTU4ZXlqIn0.W_OxrGYnJK2X4PM6O63vfA'
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(16.936264401463887);
  const [lat] = useState(59.439098072932836);
  const [zoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })
  })

  return (
    <div ref={mapContainer} className="map-container h-80" />
  )
}

export default Map
