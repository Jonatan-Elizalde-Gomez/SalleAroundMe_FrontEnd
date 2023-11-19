function CardWeb({ id, category, name, description, img }) {
  
  

  const handleDetailAttraction = () => {

  }
  
  return (
    <button onClick={handleDetailAttraction} className="w-full text-left outline-none flex justify-between items-center px-8 py-4 border-b hover:bg-sw-main-lighter">
      <div className="w-[70%]">
        <p className="text-sw-gray text-xs">{category}</p>
        <p className="text-sw-black font-medium">{name}</p>
        <p className="text-sw-black text-xs font">{description}</p>
      </div>
      <img className="w-24 h-24 rounded-xl" src={img} alt="img-card" />
    </button>
  );
}

export default CardWeb;
