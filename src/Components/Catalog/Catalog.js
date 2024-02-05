import React from 'react'
import './Catalog.css'
import { useState } from 'react';
import {MOVIES} from '../../Constants'
import Movie from './Movie';


export default function Catalog() {

    let [budget, setBudget] = useState(8);
    let [movies, setMovies] = useState(MOVIES)
    let [rented, setRented] = useState([])
    let [isSearching , setIsSearching] = useState(false)
    let [searchInput, setSearchInput] = useState("")
    let [movieResult, setMovieResult] = useState(rented)
    let [rentedResult, setRentedResult] = useState(rented)
    let rentedLen = rented.length


    function updateRented(update, movie){
        let rentedBB = [...rented]
        let moviesBB = [...movies]
        if(update=="plus" & budget>2){
            rentedBB.push(movie)
            setRented(rentedBB)

            const index = moviesBB.indexOf(movie)
            moviesBB[index].isRented = true
            setMovies(moviesBB)

            setBudget(budget-3)
        }
        if(update=="plus" & budget<3){
            alert("No Budgetttt")
        }
        if(update=="minus"){
            let index = rentedBB.indexOf(movie);
            rentedBB.splice(index, 1);
            setRented(rentedBB)

            index = moviesBB.indexOf(movie)
            moviesBB[index].isRented = false
            setMovies(moviesBB)

            setBudget(budget+3)
        }
    }



    function handleChange(event){
        const inputValue = event.target.value;
        setSearchInput(inputValue);

    
        if (inputValue.trim() !== '') {
          const searchMoviesResults = performSearch(inputValue , [...movies])
          setMovies(searchMoviesResults)
          const searchRentedResults = performSearch(inputValue, [...rented])
          setRentedResult(searchRentedResults)
          setIsSearching(true)

        } else {
          setIsSearching(false)
          setRented(rented)
          setMovies(MOVIES)
        }
    }

    const performSearch = (query, data) => {
        return data.filter((item) => item.title.toLowerCase().includes(query));
      }

  return (

    <div>
        <p className="budget">Budget : ${budget}</p>
         <input type="text" onChange={handleChange} placeholder="Search..."></input>
         {isSearching ? <div>        
                        {rentedLen>0 ?
                            <div> <h3>rented :</h3>
                            {[...rentedResult].map(movie =><div className='image'><Movie movie={movie} updateRented={updateRented}/></div>)} </div>:
                            <div></div>} 
                        </div>    
                        :
                        <div>   
                            {rentedLen>0 ?
                                <div> <h3>rented :</h3>
                                {[...rented].map(movie =><div className='image'><Movie movie={movie} updateRented={updateRented}/></div>)} </div>:
                                <div></div>}
                        </div>
        }
        <div>
         <h3>catalog :</h3>
         {[...movies].map(movie =><div className='image'><Movie movie={movie} updateRented={updateRented}/></div>)}
        </div>
      
    </div>

  )
}
