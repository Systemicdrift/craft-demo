import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'
// import './map.css'

// with a little help from:
// https://dev.to/zerquix18/let-s-play-with-google-maps-and-react-making-a-car-move-through-the-road-like-on-uber-part-1-4eo0

const Map = ({ locations, zoomLevel }) => {
    let location = {
        lat: 32.715736,
        lng: -117.161087
    };


    return (
        <div className="map"> map is here
            <div className="google-map">
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={location}
                    >
                    {
                        locations.map((loc, key) => {
                            let location = loc.split(',');
                            // console.log("***********", location)
                            return (<Marker key={key} position={{
                                lat: parseFloat(location[0]),
                                lng: parseFloat(location[1]),
                            }} />);
                        })
                    }

                </GoogleMap>


            </div>
        </div>
    )};

const MapComponent = withScriptjs(withGoogleMap(Map))

export default ({ locations, zoomLevel }) => (
    <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhdhpC9jydNhsUXLrAokV4V-PEkU2O19Y&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `500px`, width: '600px' }} />}
    mapElement={<div style={{ height: `100%` }} />}
    locations={locations}
    zoomLevel={zoomLevel}
    />
  );