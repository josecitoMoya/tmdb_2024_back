import tmdbServices from "../services/tmdbServices.js";

export const tmdb = async (req, res) => {
  try {
    const popularMovies = await tmdbServices.getPopularMovies();
    const rta = "ESTAS EN CONTROLLERS";
    res.send(popularMovies.data);
  } catch (error) {
    console.log("SOT GETPOPULARMOVIES DE CONTROLLERS", error);
    throw new Error(error);
  }
};

export const otroTmdb = async (req, res) => {
  try {
    const movies = await tmdbServices.getPopularMovies();

    res.send(movies);
  } catch (error) {
    console.log("SOT GETPOPULARMOVIES DE CONTROLLERS", error);
    throw new Error(error);
  }
};
