// Componente principal de la aplicación
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import { searchMovies } from './services/movieService'

const App = () => {
  // Lista de películas y estado de carga
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  // Llama a la API y actualiza la lista
  const handleSearch = async (query) => {
    setLoading(true)
    const results = await searchMovies(query)
    setMovies(results)
    setLoading(false)
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Buscador de Películas</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p className="text-center">Cargando...</p> : <MovieList movies={movies} />}
    </div>
  )
}

export default App