import React, { useState } from 'react';
import Places from './Places';
import './SearchBox.css';

function SearchBox() { 
  const [places,setPlaces] = useState([])
  const [query,setQuery] = useState("")
  const [showPlaces,setShowPlaces] = useState(false)

  function handleSubmit(e) {
      e.preventDefault()
      async function fetchMyAPI() {
        let mounted = true;
          const reqOptions = {
              method: 'GET',
              headers: {
                  "x-rapidapi-key": "42a5ad4309msh0f7539296c11895p172628jsn1bac294685a3",
                  "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                  "useQueryString": true
              }
          }
          let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: query}), reqOptions)
          response = await response.json()
          console.log(response.Places)
          if (mounted){
            setPlaces(response.Places)
          }
      }
      fetchMyAPI()
      setShowPlaces(true)
      setQuery("")
  }

  return(
      <div className="searchbox">
         <form onSubmit={handleSubmit}>
              <label htmlFor="queryInput">State or Country:</label>
              <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/>
              <button className="search">Submit</button>
         </form>
         { showPlaces ? <Places places={places}></Places> : <></>}
      </div>
  )
}

export default SearchBox;