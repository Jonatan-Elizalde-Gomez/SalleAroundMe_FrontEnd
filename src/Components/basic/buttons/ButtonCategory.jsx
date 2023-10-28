function CategoryBtn({id, category}) {
  return (
    <button className='bg-sw-white px-4 py-1 text-sw-black font-medium shadow-md rounded-full hover:bg-sw-main-lighter'>
        {category}
    </button>
  )
}

export default CategoryBtn;