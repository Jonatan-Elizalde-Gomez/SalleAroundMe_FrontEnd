import ReturnIcon from "../../../assets/return-icon.svg";
import useMapAllAttractions from "../../../hooks/useMapAllAttractions";
import useMapAttractionsByCategory from "../../../hooks/useMapAttractionsByCategory";
import useMapCategoryButtons from "../../../hooks/useMapCategoryButtons";
import CardWeb from "../../basic/cards/CardWeb";

function AttractionsByCategory({ attractions }) {
  const { handleShowAllAttractions } = useMapAllAttractions();
  const { handleResetAllAttractionsByCategory } = useMapAttractionsByCategory();
  const { handleDectivateCategoryButton } = useMapCategoryButtons();

  const handleReturn = () => {
    handleDectivateCategoryButton();
    handleShowAllAttractions();
    handleResetAllAttractionsByCategory();
  };

  return (
    <div className="">
      <div className="flex gap-x-4 items-center">
        <div className="flex gap-x-4 items-center p-6">
          <button
            onClick={handleReturn}
            className="p-3 hover:bg-slate-100 rounded-full"
          >
            <img src={ReturnIcon} alt="return-icon" />
          </button>
          <h3 className="font-medium text-sw-black text-xl">
            {attractions[0].category_name}
          </h3>
        </div>
      </div>
      <div>
        {attractions.map((attraction) => (
          <CardWeb
            key={attraction.id}
            id={attraction.id}
            category={attraction.category_name}
            description={attraction.description}
            name={attraction.name}
            img={attraction.img}
          />
        ))}
      </div>
    </div>
  );
}

export default AttractionsByCategory;
