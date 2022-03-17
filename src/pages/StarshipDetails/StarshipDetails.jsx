import React, { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

const StarshipDetails = (props) => {

  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()
  
  useEffect(()=> {
    getDetails(location.state.starship.url)
    .then(starshipDetail => setStarshipDetails(starshipDetail))
  })


  return ( 
    <>
      <h1>STAR WARS STARSHIPS</h1>
      {starshipDetails.name ?
        <>
          <div>
              <div className='icon-container'>
                <div id="classDiv" >
                  <h2>NAME: {starshipDetails.name}</h2>
                  <h2>MODEL: {starshipDetails.model}</h2>
                  <Link class="return" to='/'> 
                      Return
                  </Link>
                </div>
              </div>
            </div>
        </>
          :
        <>
          <h2>Loading starship details...</h2>
        </>
      }       
    </>
  );
}
export default StarshipDetails;