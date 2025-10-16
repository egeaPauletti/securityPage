import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: -23.55052,
    lng: -46.633308
  };

  return (
    <div className="w-full h-full flex justify-center">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_MAPS_API_KEY as string}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
