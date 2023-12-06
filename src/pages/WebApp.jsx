import { useState, useEffect } from "react";
import Sidebar from "../components/layout/sidebar/index";
import CategoryBtn from "../components/basic/buttons/ButtonCategory";
import SalleLogo from "../assets/salle_logo.svg";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useAppSelector } from "../app/store.js";
import useMapCategories from "../hooks/useMapCategories";
import AttractionMarker from "../components/basic/marker/AttractionMarker";
import useMapNearestAttractions from "../hooks/useMapNearestAttractions";

function WebApp() {
  const { selectedCategoryButton } = useAppSelector(
    (state) => state.attractionsToShowReducer
  );

  const { data, loading } = useAppSelector(
    (state) => state.categoriesMapReducer
  );

  const { data: attractionsByCategoryData } = useAppSelector(
    (state) => state.attractionsByCategoryReducer
  );

  const { data: selectedAttraction } = useAppSelector(
    (state) => state.attractionMapReducer
  );

  const { data: nearestAttractions, loading: nearestAttractionsLoading } =
    useAppSelector((state) => state.nearestAttractionsReducer);

  const [userLocation, setUserLocation] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoryButton
  );
  const [loc, setLoc] = useState({
    current: [],
    prev: [],
  });

  const { handleGetCategories } = useMapCategories();
  const { handleGetNearestAttractions, handleReset } =
    useMapNearestAttractions();
  const sallePosition = { lat: 21.152073200803656, lng: -101.71124458732997 };

  const handleGetCurrentUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lng: longitude });
    });
  };

  // calculate the angle between previous and new positions
  const calculateRotationAngle = (id, newLat, newLng) => {
    if (loc?.current?.length > 0 && loc.prev?.length > 0) {
      let { lat, lng } = loc.prev.find((mar) => mar.id === id);
      const angle = Math.atan2(newLng - lng, newLat - lat) * (180 / Math.PI);
      return angle;
    }
    return 90;
  };

  useEffect(() => {
    if (!data && !loading) {
      handleGetCategories();
    }
  }, [handleGetCategories, data, loading]);

  useEffect(() => {
    if (!nearestAttractions && !nearestAttractionsLoading && userLocation) {
      handleGetNearestAttractions(userLocation.lat, userLocation.lng);
    }
  }, [
    handleGetNearestAttractions,
    nearestAttractions,
    nearestAttractionsLoading,
    userLocation,
  ]);

  useEffect(() => {
    setCategories(data);
  }, [data]);

  useEffect(() => {
    // Update previous positions when userLocation changes
    if (userLocation) {
      setLoc((prevLoc) => ({
        current: [
          ...prevLoc.current,
          { id: "user", lat: userLocation.lat, lng: userLocation.lng },
        ],
        prev: prevLoc.current,
      }));
    }
  }, [userLocation]);

  useEffect(() => {
    // Obtener la ubicación actual del navegador
    handleGetCurrentUserLocation();
    /*     const intervalId = setInterval(() => {
      handleReset();
      handleGetCurrentUserLocation();
    }, 30000);
    return () => clearInterval(intervalId); */
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

        <div className="absolute pb-3 w-[95%] overflow-x-scroll md:overflow-x-hidden flex md:flex-wrap gap-y-2 gap-x-3 md:gap-x-8 left-3 lg:left-11 top-3 md:top-5 z-[5]">
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
          <Map gestureHandling="greedy" center={sallePosition} zoom={18}>
            <Marker
              //icon={{ url: require("../assets/felinoMarker.svg").default }}
              icon={{
                url: require("../assets/felinoMarker.svg").default,
                rotation: calculateRotationAngle(
                  "user",
                  userLocation?.lat,
                  userLocation?.lng
                ),
              }}
              position={userLocation}
            />
            {attractionsByCategoryData &&
              attractionsByCategoryData.map((attraction) => (
                <AttractionMarker key={attraction.id} attraction={attraction} />
              ))}
            {selectedAttraction && (
              <AttractionMarker attraction={selectedAttraction} />
            )}
            {nearestAttractions &&
              nearestAttractions.map((attraction) => (
                <AttractionMarker
                  key={attraction.id}
                  attraction={attraction}
                  iconImg={true}
                />
              ))}
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}

export default WebApp;
