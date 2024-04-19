import axios from "axios";
import "dotenv/config";

const { TMDB_URL, TMDB_API_KEY } = process.env;

console.log(TMDB_URL);

const tmdbServices = {
  getPopularMovies: async () => {
    try {
      const allMovies = await axios.get(
        `${TMDB_URL}/movie/popular?api_key=${TMDB_API_KEY}`
      );
      return allMovies;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};

export default tmdbServices;
