// Tarjeta con información de una película
const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded shadow p-3 flex flex-col items-center">

      {/* Poster de la película */}
      <img
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://via.placeholder.com/300x450?text=Sin+Poster'
        }
        alt={movie.Title}
        className="w-full h-72 object-cover rounded"
      />

      {/* Título y año */}
      <h2 className="font-bold text-center">{movie.Title}</h2>
      <p className="text-gray-500">{movie.Year}</p>
    </div>
  )
}

export default MovieCard