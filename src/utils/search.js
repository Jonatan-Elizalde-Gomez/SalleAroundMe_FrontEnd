export const handleSearchChange = (
  event,
  setSearchQuery,
  setOpenSearchItems,
  AllAttractions,
  setSearchResults
) => {
  const query = event.target.value;
  setSearchQuery(query);
  setOpenSearchItems(true);
  // Filtrar las atracciones que coinciden con el valor de búsqueda
  const filteredResults = AllAttractions.reduce((acc, category) => {
    const filteredAttractions = category.attractions.filter((attraction) =>
      attraction.name.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredAttractions.length > 0) {
      acc.push(filteredAttractions);
    }
    return acc;
  }, []);

  setSearchResults(filteredResults);
};
