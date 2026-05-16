// Lista de películas obtenidas desde la API
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {

  // Mensaje si no hay resultados
  if (movies.length === 0) {
    return <p className="text-center text-gray-400">No hay películas para mostrar.</p>
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList