import React, { useEffect, useRef, useState } from 'react';
import './SearchBox.css';
import Places from './Places';
import Datepicker from 'react-datepicker';
import Flights from './Flights';
import FlightTable from './FlightTable';
import Autosuggest from 'react-autosuggest';
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Currencies from './Currencies';
import Locations from './Locations';
import Auto from './Locations';

function SearchBox() { 
  const [flights, setFlights] = useState([])
  const [showFlights, setShowFlights] = useState(false)
  const [places, setPlaces] = useState([])
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [query, setQuery] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showPlaces,setShowPlaces] = useState(false)
  const [currency, setCurrency] = useState("USD")

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

  function handleSearch(e){
    e.preventDefault()
    console.log(toLocation)
    async function findFlights() {
      const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/${currency}/en-US/${fromLocation}/${toLocation}/${startDate.toISOString().substring(0,10)}` 
      const reqOptions = {
        method: 'GET',
        headers: {
            "x-rapidapi-key": "42a5ad4309msh0f7539296c11895p172628jsn1bac294685a3",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "useQueryString": true
        }
      }
      let response = await fetch(url, reqOptions)
      console.log(url)
      response = await response.json();
      console.log(response)
      console.log(startDate.toDateString().substring(0,6))
      console.log(startDate.toISOString().substring(0,10))
      console.log(startDate.toString())
      console.log(startDate.valueOf())
      setFlights(response.Quotes)

    }

    console.log(currency)
    console.log(startDate)
    findFlights()
    console.log(startDate)
    setToLocation("")
    setFromLocation("")
    setShowFlights(true)

    }

  function getCurrency (value) { 
    setCurrency(value)
  }

  function getToCity (value) {
    setToLocation(value)
  }

  function getFromCity (value) {
    setFromLocation(value)
  }

  
    return(
       <div className="searchbox">
          <form className="searchForm" onSubmit={handleSubmit}>
            <div className="destinations">
              <div className="toFrom">
                <label htmlFor="queryInput">From</label>
                <Locations value={fromLocation} onChange={getFromCity} required></Locations>
                {/* <input id="queryInput" value={fromLocation} onChange={e => setFromLocation(e.target.value)} required/> */}
              </div>
              <div className="toFrom">
                <label htmlFor="queryInput">To</label>
                <Locations value={toLocation} onChange={getToCity} required></Locations>
                {/* <input id="queryInput" value={toLocation} onChange={e => setToLocation(e.target.value)} required/> */}
              </div>
            </div>
            <div className="datePickers">
              <div className="dates">
                <label>Depart</label>
                <Datepicker className ="calender"
                  selected={startDate}
                  onChange={handleStartDate}
              /></div>
              <div className="dates">
                <label>Return</label>
                <Datepicker
                  selected={endDate}
                  onChange={handleEndDate}
              /></div>
              <button className="search" onClick ={handleSearch}>Search Flights</button>
            </div>
          </form> 
          { showFlights ? <Flights quotes={flights} className="flightTable"></Flights> : <></>}
          {/* { showFlights ? <FlightTable quotes={flights}></FlightTable> : <></>} */}
          <Currencies value={currency} sendCurrency={getCurrency} ></Currencies> 
          {/* <select
            value= {currency}
            onChange = {e => setCurrency(e.target.value)}
            >
              <option value = "USD">USD</option>
              <option value = "GBP">GBP</option>
            </select> */}
        </div>
    );
}

export default SearchBox;