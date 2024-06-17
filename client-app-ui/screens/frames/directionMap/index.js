// Directions.js
import React from 'react';
import { Polyline } from 'react-native-maps';

const DirectionsMap = ({ destination, origin, onReady }) => {
  const [coordinates, setCoordinates] = React.useState([]);

  React.useEffect(() => {
    const getDirections = async () => {
      try {
        const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
        const json = await response.json();
        const points = json.routes[0].geometry.coordinates.map(point => ({
          latitude: point[1],
          longitude: point[0],
        }));
        setCoordinates(points);
        if (onReady) {
          onReady(json.routes[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getDirections();
  }, [destination, origin, onReady]);

  return (
    <Polyline
      coordinates={coordinates}
      strokeWidth={3}
      strokeColor="#222"
    />
  );
};

export default DirectionsMap;
