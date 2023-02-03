import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import 'tachyons'
import MovieCardList from './Components/MovieCardList';
import Footer from './Components/footer'


function App() {

  const [movies, setMovies] = useState([])
  const [searching, setSearchin] = useState('friends')


  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searching}`)
      .then(resp => resp.json())
      .then(data => { setMovies(data) })
  }, [searching])

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      setSearchin(event.target.value.toLowerCase());
      event.target.value = ''
    }
  }




  if (movies.length === 0) {

    return (<div className='tc'>
      < h1 className='f1 site-title'>MovieFinder</h1>
      <h1 >There are no movies with this title</h1>
      <SearchBar onKeyPress={onKeyPress} />
    </div>
    )
  } else {
    return (

      <div className='tc'>
        <h1 className='f1 site-title'>MovieFinder</h1>
        <div>
          <SearchBar onKeyPress={onKeyPress} />
        </div>
        <div className='movieCard'>
          <MovieCardList movies={{ movies }} />
        </div>
        <Footer></Footer>
      </div>
    )
  }

}


export default App;
