import { InfoWindow, Marker } from "@vis.gl/react-google-maps";
import useMapAttraction from "../../../hooks/useMapAttraction";
import NearMarker from "../../../assets/nearMarker.svg"
import { useState } from "react";

function AttractionMarker({ attraction, iconImg }) {
  const { handleGetAttractionById } = useMapAttraction();
  const [infoWindowContent, setInfoWindowContent] = useState(null);

  const handleDetailAttraction = () => {
    handleGetAttractionById(attraction.id);
  };

  const attractionLocation = { lat: attraction.lat, lng: attraction.lng };

  return (
    <div>
      <Marker
        position={attractionLocation}
        icon={iconImg && NearMarker}
        onClick={() => {
          setInfoWindowContent(
            <button
              onClick={handleDetailAttraction}
              className="p-3 bg-sw-white flex items-center gap-x-4 text-left"
            >
              <img
                className="w-16 h-16 rounded-lg object-cover"
                src={attraction.img[0]}
                alt={`img-${attraction.name}`}
              />
              <div>
                <h5 className="font-medium text-lg text-sw-black w-40 pb-1">
                  {attraction.name}
                </h5>
                <p className="text-sw-gray">Latitud: {attraction.lat}</p>
                <p className="text-sw-gray">Latitud: {attraction.lng}</p>
              </div>
            </button>
          );
        }}
      ></Marker>
      {infoWindowContent && (
        <InfoWindow
          position={attractionLocation}
          onClose={() => setInfoWindowContent(null)}
        >
          {infoWindowContent}
        </InfoWindow>
      )}
    </div>
  );
}

export default AttractionMarker;
