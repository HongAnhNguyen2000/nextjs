'use client'

import * as React from 'react'
import { useState, useMemo } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { createRoot } from 'react-dom/client'
import Map, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Image from 'next/image'

import Pin from './pin'

const TOKEN =
  'pk.eyJ1IjoicXVhbnplbjgiLCJhIjoiY2xuZTN6ZWFhMGFoazJrcW9zMnZ1ZjBxcCJ9.42VQD_1SKV-7tN1zwl9jQQ'

type City = {
  country: string
  city: string
  image?: string
  latitude: number
  longitude: number
}
export default function CustomMap({ cities }) {
  const [popupInfo, setPopupInfo] = useState<City>(null)
  const size = 40

  const pins = useMemo(
    () =>
      cities.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          pitchAlignment="map"
          anchor="bottom"
          draggable={false}
          style={{ transform: `translate(${-size / 2}px,${-size}px)` }}
          onClick={(e) => {
            e.originalEvent.stopPropagation()
            setPopupInfo(city)
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  )

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '400px' }}>
      <Map
        initialViewState={{
          zoom: 1,
          fitBoundsOptions: {
            maxZoom: 5,
          },
          bearing: 0,
          pitch: 0,
          latitude: 54.0194,
          longitude: -162.4108,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={TOKEN}
        attributionControl={false}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: '0px',
          overflow: 'hidden !important',
        }}
      >
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1.5}
            >
              <Image width="100%" src={popupInfo.image} alt="" />
              <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
                {popupInfo.city}, {popupInfo.country}
              </Typography>
            </Stack>
          </Popup>
        )}
      </Map>
    </Box>
  )
}
;<style></style>
