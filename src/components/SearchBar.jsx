// Barra de búsqueda de películas
const SearchBar = ({ onSearch }) => {

  // Ejecuta la búsqueda al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.search.value.trim()
    if (value) onSearch(value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        name="search"
        type="text"
        placeholder="Buscar película..."
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded">
        Buscar
      </button>
    </form>
  )
}

export default SearchBar