import React from 'react'
import './Movie.css'
import plus from '../../image/plus.png'
import minus from '../../image/minus.png'
import { Link } from 'react-router-dom'

export default function Movie(props) {



  return (
    <div className='container'>
      <Link to={`/movies/${props.movie.id}`}><img src={props.movie.img} className='image'/></Link>
      {!props.movie.isRented? <img src={plus} onClick={()=> props.updateRented( "plus",props.movie)}  className='icon'/> : <img src={minus} onClick={()=> props.updateRented( "minus",props.movie)}  className='icon'/>}
      
    </div>
  )
}


