import { useState, useEffect } from "react";
import Sidebar from "../components/layout/sidebar/index";
import CategoryBtn from "../components/basic/buttons/ButtonCategory";
import SalleLogo from "../assets/salle_logo.svg";
import { useNavigate } from "react-router-dom";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useAppSelector } from "../app/store.js";
import useMapCategories from "../hooks/useMapCategories";
import useMapAllAttractions from "../hooks/useMapAllAttractions";

function WebApp() {
  const [userLocation, setUserLocation] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { handleGetAllAttractions } = useMapAllAttractions();
  const [attractions, setAttractions] = useState(null);

  const { handleGetCategories } = useMapCategories();
  const sallePosition = { lat: 21.152073200803656, lng: -101.71124458732997 };
  const { data: attractionsMapData, loading: attractionsMapLoading } =
    useAppSelector((state) => state.attractionsMapReducer);

  const navigate = useNavigate();
  const { data } = useAppSelector((state) => state.categoriesMapReducer);

  useEffect(() => {
    if (!data) {
      handleGetCategories();
    }
  }, [handleGetCategories, data]);

  useEffect(() => {
    if (!attractionsMapData) {
      handleGetAllAttractions();
    }
  }, [handleGetAllAttractions, attractionsMapData]);

  useEffect(() => {
    setCategories(data);
  }, [data]);

  useEffect(() => {
    // Obtener la ubicación actual del navegador
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  useEffect(() => {
    // Extraer atracciones del payload de la API
    if (attractionsMapData) {
      setAttractions(attractionsMapData);
    }
  }, [attractionsMapData]);

  return (
    <div className="overflow-hidden w-full h-screen flex">
      <Sidebar />
      <div className="relative flex-1 flex-wrap w-full">
        <button
          onClick={() => navigate("collaborators")}
          className="shadow-md absolute bottom-6 right-16 bg-white rounded-full px-4 py-2 z-[5] flex items-center gap-x-2"
        >
          <img src={SalleLogo} alt="salle-logo" className="w-8" />
          <p>Colaboradores</p>
        </button>

        <div className="absolute flex flex-wrap gap-y-2 gap-x-8 left-11 top-5 z-[5]">
          {categories &&
            categories.map((category) => (
              <CategoryBtn
                key={category.id}
                id={category.id}
                category={category.name}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            ))}
        </div>
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <Map center={sallePosition} zoom={18}>
            {attractions &&
              Array.isArray(attractions) &&
              attractions.map((attraction) => {
                console.log(attraction);
                const lat = parseFloat(attraction.lat);
                const lng = parseFloat(attraction.lng);

                // Verifica que lat y lng son números válidos
                if (!isNaN(lat) && !isNaN(lng)) {
                  return <Marker key={attraction.id} position={[lat, lng]} />;
                }

                // Maneja el caso donde lat o lng no son números válidos
                console.warn(
                  `Invalid lat or lng for attraction with id ${attraction.id}`
                );
                return null;
              })}
            {userLocation && <Marker position={userLocation} />}
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}

export default WebApp;
