import { useState, useEffect } from "react";
import Sidebar from "../components/layout/sidebar/index";
import CategoryBtn from "../components/basic/buttons/ButtonCategory";
import SalleLogo from "../assets/salle_logo.svg";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useAppSelector } from "../app/store.js";
import useMapCategories from "../hooks/useMapCategories";

function WebApp() {
  const { selectedCategoryButton } = useAppSelector(
    (state) => state.attractionsToShowReducer
  );

  const { data, loading } = useAppSelector(
    (state) => state.categoriesMapReducer
  );

  const [userLocation, setUserLocation] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoryButton
  );

  const { handleGetCategories } = useMapCategories();
  const sallePosition = { lat: 21.152073200803656, lng: -101.71124458732997 };

  useEffect(() => {
    if (!data && !loading) {
      handleGetCategories();
    }
  }, [handleGetCategories, data, loading]);

  useEffect(() => {
    setCategories(data);
  }, [data]);

  useEffect(() => {
    // Obtener la ubicación actual del navegador
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lng: longitude });
    });
  }, []);

  return (
    <div className="overflow-hidden w-full h-screen flex">
      <Sidebar />
      <div className="relative flex-1 flex-wrap w-full">
        <button
          onClick={() => window.open("/collaborators", "_blank")}
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
        {/* ======= Map ======= */}
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <Map center={sallePosition} zoom={18}>
            <Marker position={userLocation} />
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}

export default WebApp;
