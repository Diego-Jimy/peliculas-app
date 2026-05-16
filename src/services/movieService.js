// URL base y clave de la API
const API_KEY = '897ad38d'
const BASE_URL = 'https://www.omdbapi.com/'

// Busca películas por nombre
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`)
  const data = await response.json()
  return data.Search || []
}