import { useState } from 'react'
import { movies } from './movieData'
import styled from 'styled-components'
import './App.css'

function App() {

  return (
    <>
      <div className='background'>
        <div className='movieContainer'>
          {movies.results.map((movie, index) => (
            <div key={index} className='contentContainer'>
              <div className='movieContent'>
                <div>{movie.title}</div>
                <div>{movie.overview}</div>
              </div>

              <div className='posterContainer'>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="moviePoster"
                />
              </div>

              <div className='titleContainer'>
                <div>{movie.title}</div>
                <div>{movie.vote_average}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
