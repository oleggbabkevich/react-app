import './App.css';
import Movie from './components/movie'
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';

const Api_Url = "http://omdbapi.com?apikey=110694b3";

const App = () => {
  const [movies, setMovies] = useState();
  const searchMovies = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('superman');
  })
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='search for movies'
          value='Superman'
          onChange={() => { }} />
        <img
          src={SearchIcon}
          alt='search'
        />
      </div>
      <div className='container'>
        <Movie movie1={movies[0]} />
      </div>
    </div>
  );
}

export default App;
