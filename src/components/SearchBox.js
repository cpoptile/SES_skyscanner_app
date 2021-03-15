import React, { useState } from 'react';
import './SearchBox.css';
import Places from './Places';
import Datepicker from 'react-datepicker';

function SearchBox() { 
  const [places, setPlaces] = useState([])
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [query, setQuery] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showPlaces,setShowPlaces] = useState(false)

  const handleStartDate = date => {
    setStartDate(date)
  }

  const handleEndDate = date => {
    setEndDate(date)
  }

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

  function handleSearch(fromLocation, toLocation, startDate){
    async function findFlights() {
      const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${fromLocation}/${toLocation}/${startDate}?` +
      new URLSearchParams({ inboundpartialdate: endDate });
      const reqOptions = {
        method: 'GET',
        headers: {
            "x-rapidapi-key": "42a5ad4309msh0f7539296c11895p172628jsn1bac294685a3",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        },
      };
      let response = await fetch(url, reqOptions)
      response = await response.json();
    }

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
                <label htmlFor="queryInput">From:</label>
                <input id="queryInput" value={fromLocation} onChange={e => setFromLocation(e.target.value)} required/>
                <label htmlFor="queryInput">To:</label>
                <input id="queryInput" value={toLocation} onChange={e => setToLocation(e.target.value)} required/>
                <button className="search">Submit</button>
          </form> { showPlaces ? <Places places={places}></Places> : <></>}
          <div>
            <Datepicker
              selected={startDate}
              onChange={handleStartDate}
            />
            <Datepicker
              selected={endDate}
              onChange={handleEndDate}
            />
          </div>
        </div>
    );
}

export default SearchBox;