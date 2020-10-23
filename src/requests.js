const API_KEY = "ece8585767d6e66ec3c2f6336d64e1dc";
// http://api.themoviedb.org/3/movie/157336?api_key=###&append_to_response=videos

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&append_to_response=videos`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&append_to_response=videos`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&append_to_response=videos`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&append_to_response=videos`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&append_to_response=videos`
}

export default requests;