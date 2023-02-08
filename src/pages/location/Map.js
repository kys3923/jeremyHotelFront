import { useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';

import { MdLocationOn } from 'react-icons/md'

const Map = ({ locationsData }) => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  })

  const [ showInfoWindow, setShowInfoWindow ] = useState(false);
  const [ currentCenter, setCurrentCenter ] = useState({
    lat: 40.716960713000105,
    lng: -74.00863247190179
  })
  const [ selectedLocation, setSelectedLocation ] = useState()

  const mapContainerStyle = {
    width: '100%',
    height: '47.75em'
  }

  const markerHandler = async (e, id) => {
    setSelectedLocation();
    let chosenLocation = await locationsData.find((location) => location.id === id)
    await setSelectedLocation(chosenLocation)
    setShowInfoWindow(true)
  }
  

  const boxStyle = (id) => {
    if (id === 43) {
      return 'flex flex-row px-8 py-6 border-b border-gray-200 justify-center items-center bg-location1 bg-cover bg-center hover:cursor-pointer hover:text-blue-300 text-white'
    } 
    if (id === 44) {
      return 'flex flex-row px-8 py-6 border-b border-gray-200 justify-center items-center bg-location2 bg-cover bg-center  hover:cursor-pointer hover:text-blue-300 text-white'
    } 
    if (id === 45) {
      return 'flex flex-row px-8 py-6 border-b border-gray-200 justify-center items-center bg-location3 bg-cover bg-center  hover:cursor-pointer hover:text-blue-300 text-white'
    } 
    if (id === 46) {
      return 'flex flex-row px-8 py-6 border-b border-gray-200 justify-center items-center bg-location4 bg-cover bg-center  hover:cursor-pointer hover:text-blue-300 text-white'
    } 
    if (id === 47) {
      return 'flex flex-row px-8 py-6 border-b border-gray-200 justify-center items-center bg-location5 bg-cover bg-center  hover:cursor-pointer hover:text-blue-300 text-white'
    } 
  }
  

  if(!isLoaded) return 'Loading...'


  return (
    <section className='w-full lg:flex lg:flex-col lg:items-center'>
      <div className='w-full lg:w-11/12 flex justify-center font-extrabold text-2xl text-blue-800 py-4 my-8'>
        <p>Hotels near New York</p>
      </div>
      <div className='flex flex-col md:flex-row w-full lg:w-11/12'>

        {/* hotels list */}
        <div className='w-full md:w-1/2'>
          {locationsData.map((data) => {
            return <div key={data.id} className={boxStyle(data.id)}
              onClick={(e) => markerHandler(e, data.id)}
            >
                <p className='flex justify-center items-center bg-black p-10 bg-opacity-50 flex-row  truncate rounded-md font-bold'><MdLocationOn className='w-5 h-5 mr-2'/>{data.name}</p>
              </div>
          })}
        </div>

        {/* maps */}
        <div className='w-full h-48 bg-blue-200'>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            id='map'
            zoom={6}
            center={currentCenter}
          >
            {/* marker */}
            {locationsData.map((data) => {
               return <MarkerF
                key={data.name} 
                position={{ lat: data.lat, lng: data.lng }}
                onClick={(e) => markerHandler(e, data.id)}
              />
            })}
            {/* infoWindow */}
            {/* TODO: turn of strict mode on react */}
            { showInfoWindow && selectedLocation ?
              <InfoWindow
              position={{ lat: selectedLocation.lat+0.02, lng: selectedLocation.lng }}
              onCloseClick={(e) => {setShowInfoWindow(false)}}
              >
                <div className='p-2'>
                  <h3 className='text-blue-800 font-bold mb-2'>{selectedLocation.name}</h3>
                  <p>{selectedLocation.address}</p>
                </div>
              </InfoWindow>
              :
              null
            }
          </GoogleMap>
        </div>

      </div>
    </section>
  );
}
export default Map;
