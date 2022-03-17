import React, { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const Starships = (props) => {

  // Change this to an empty array, as we'll set state via API now!
  const [starships, setStarships] = useState([])
  
  useEffect(()=> {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])

  return (
    <>
      <h1>STAR WARS STARSHIPS</h1>
      {starships.length ?
        <>
          <div>
          <div className='icon-container'>
              {starships.map((starship) => (
                <Link class="details" to='/starship' state={{starship}} key={starship.index}>
                  <div id="classDiv" >
                    {starship.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
        :
        <>
          <h2>Loading starships...</h2>
        </>
      }      
    </>  
  );
} 

export default Starships;