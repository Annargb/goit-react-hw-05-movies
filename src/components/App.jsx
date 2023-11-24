import { NavLink, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Layout from './AppLayout-component/AppLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast-component/Cast';
import Reviews from './Reviews-component/Reviews';
import AppLayout from './AppLayout-component/AppLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
