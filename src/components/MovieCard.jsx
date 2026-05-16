// Tarjeta con información de una película
const MovieCard = ({ movie }) => {

  // Imagen por defecto
  const defaultPoster =
    'https://placehold.co/300x450?text=Sin+Poster'

  return (
    <div className="border rounded shadow p-3 flex flex-col items-center">

      {/* Poster de la película */}
      <img
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : defaultPoster
        }
        alt={movie.Title}

        // Si la imagen falla, coloca imagen por defecto
        onError={(e) => {
          e.currentTarget.src = defaultPoster
        }}

        className="w-full h-72 object-cover rounded"
      />

      {/* Título y año */}
      <h2 className="font-bold text-center mt-3">
        {movie.Title}
      </h2>

      <p className="text-gray-500">
        {movie.Year}
      </p>
    </div>
  )
}

export default MovieCard