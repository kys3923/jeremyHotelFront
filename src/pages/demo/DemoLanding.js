import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';

const DemoLanding = (props) => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  })

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  }

  if(!isLoaded) return 'Loading...'

  return (
    <section>
      <div className='w-full h-96 bg-green-200'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={4}
          center={{ lat: 43.07526761140546, lng: -79.0672674475456 }}
        >
          <MarkerF 
            position={{ lat: 43.04182905930636, lng: -78.91930816296625}}
          />
          <InfoWindow
            position={{ lat: 43.04182905930636 + 0.0003, lng: -78.91930816296625}}
          >
            <div>
              <p>Title</p>
              <p>text</p>
              <button>test</button>
            </div>
          </InfoWindow>
        </GoogleMap>
      </div>
      <div>
        <p>demo page google map</p>
      </div>
    </section>
  );
}
export default DemoLanding;