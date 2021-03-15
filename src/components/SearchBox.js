import React, { useState } from 'react';
import './SearchBox.css';
import Places from './Places';

function SearchBox() { 
  const [places, setPlaces] = useState([])
  const [query, setQuery] = useState("")
  const [showPlaces,setShowPlaces] = useState(false)

  function handleSubmit(e) {
      e.preventDefault()
      async function fetchMyAPI() {
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
          setPlaces(response.Places)
          
      }
      fetchMyAPI()
      setQuery("")
      setShowPlaces(true)
  }

  // function doAjaxRequest(){
  //   $.ajax({
  //     url: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/"
  //     data: 
  //   })
  // }
  
    return(
       <div className="searchbox">
          <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">State or Country:</label>
                <input id="queryInput" value={query} onChange={e => setQuery(e.target.value)} required/>
                <button className="search">Submit</button>
          </form> { showPlaces ? <Places places={places}></Places> : <></>}
          <div>
              <label className="block">Departure date</label>
            </div>
        </div>
    );
}

export default SearchBox;