import React from 'react'
import { useParams } from 'react-router-dom';
import {MOVIES} from '../../Constants'

export default function MovieDetail() {
  const { movieID } = useParams();
  let movie = MOVIES.find(movie => movie.id ==movieID )
  return (
    <div>
      <h1>{movie.title} ({movie.year})</h1>
      <img src={movie.img}  className='image'/>
      <div>{movie.descrShort}</div>
    </div>
  )
}
