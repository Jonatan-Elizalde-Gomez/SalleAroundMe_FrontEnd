import useMapAttraction from "../../../hooks/useMapAttraction";
import useMapCategoryButtons from "../../../hooks/useMapCategoryButtons";

function CardWeb({ id, category, name, description, img }) {
  
  const { handleGetAttractionById } = useMapAttraction();
  const { handleDectivateCategoryButton } = useMapCategoryButtons();
  
  const handleDetailAttraction = () => {
    handleDectivateCategoryButton();
    handleGetAttractionById(id);
  };

  const truncateDescription = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ");
    }
    return text;
  };

  const truncatedDescription = truncateDescription(description, 40);

  return (
    <button
      onClick={handleDetailAttraction}
      className="w-full text-left outline-none flex justify-between items-center px-8 py-4 border-b hover:bg-sw-main-lighter"
    >
      <div className="w-[70%]">
        <p className="text-sw-gray text-xs">{category}</p>
        <p className="text-sw-black font-medium">{name}</p>
        <p className="text-sw-black text-xs font">{truncatedDescription}...</p>
      </div>
      <img
        className="w-32 h-32 rounded-xl object-cover"
        src={img[0]}
        alt="img-card"
        loading="lazy"
      />
    </button>
  );
}

export default CardWeb;
