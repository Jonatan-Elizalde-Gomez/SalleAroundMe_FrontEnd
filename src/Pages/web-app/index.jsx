import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import logoSalleIcon from "../../assets/salleMarker.png";

import Sidebar from "./sidebar";
import CategoryBtn from "./categoryBtn";
import { AllCategories } from "../../mocks/AllCategories";

function WebApp() {
  const [location, setLocation] = useState(null);

  const userIcon = L.icon({
    iconUrl: icon,
  });

  const salleIcon = L.icon({
    iconUrl: logoSalleIcon,
    iconSize: [82,82],
  });

  useEffect(() => {
    // Obtener la ubicación actual del navegador
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation([latitude, longitude]);
    });
  }, []);

  return (
    <div className="overflow-hidden w-full h-screen flex">
      <Sidebar />
      <div className="relative flex-1 flex-wrap w-full">
        <div className="absolute flex gap-x-8 left-11 top-5 z-[6]">
          {AllCategories.map((category) => (
            <CategoryBtn
              key={category.id}
              id={category.id}
              category={category.category}
            />
          ))}
        </div>
        <MapContainer
          style={{ width: "100%", height: "100%", zIndex: "5" }}
          center={[21.152073200803656, -101.71124458732997]}
          zoom={18}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution={
              '&copy; <a href="https://www.lasallebajio.edu.mx/">Universidad La Salle Bajío</a> Ing. de Software y Sistemas Computacionales'
            }
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          />

          <Marker
            position={[21.15235039789169, -101.71130042536149]}
            icon={salleIcon}
          >
            <Popup>Universidad La Salle Bajío</Popup>
          </Marker>

          {location && (
            <Marker position={location} icon={userIcon}>
              <Popup>Tu ubicación actual</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default WebApp;
