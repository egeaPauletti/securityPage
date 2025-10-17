import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

export default function Map() {
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: -23.55052,
    lng: -46.633308
  };

  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // se quiser que a animação ocorra só uma vez
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <div ref={mapRef} className={`w-full h-full flex justify-center ${isVisible ? "appearAnimationFromTop" : "opacity-0"
      }`}>
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
