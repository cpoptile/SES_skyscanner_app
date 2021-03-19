/** 
 * Description: SearchBox.js contains all fields neccessary to make a flight search
 * with the input of destinations, dates, and currency used.
 * 
 * @returns default SearchBox component
*/

// IMPORTS
import React, { useState } from 'react';
import Datepicker from 'react-datepicker';
import Flights from './Flights';
import Currencies from './Currencies';
import Locations from './Locations';
import './SearchBox.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBox() {
  // Hook statements used to keep track of input.
  const [flights, setFlights] = useState([])
  const [showFlights, setShowFlights] = useState(false)
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [currency, setCurrency] = useState("USD")

  // Const handles setting the start date of flight inquiry.
  const handleStartDate = date => {
    setStartDate(date)
  }

  // Const handles setting the end date of flight inquiry.
  const handleEndDate = date => {
    setEndDate(date)
  }

  /**
   * Function handles the Get Quotes call to the API in order to
   * display the cheapest flights to the user.
   * 
   * @param {*} e when Search Flights button is clicked
   */
  function handleSearch(e) {
    e.preventDefault()
    /**
     * Function fetches the API in order to find the quotes of flights
     * matching the user's inputs.
     */
    async function findFlights() {
      const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/${currency}/en-US/${fromLocation}/${toLocation}/${startDate.toISOString().substring(0, 10)}`
      const reqOptions = {
        method: 'GET',
        headers: {
          "x-rapidapi-key": "42a5ad4309msh0f7539296c11895p172628jsn1bac294685a3",
          "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "useQueryString": true
        }
      }
      // Get response from API and record into a table.
      let response = await fetch(url, reqOptions)
      response = await response.json();
      setFlights(response.Quotes)
    }
    // Call API fetch function and reset inputs
    findFlights()
    setToLocation("")
    setFromLocation("")
    setShowFlights(true)
  }

  /**
   * Function gets the currency selected from Currencies.js file.
   * 
   * @param {*} value currency ID selected
   */
  function getCurrency(value) {
    setCurrency(value)
  }

  /**
   * Function gets the origin city selected from the Locations.js file.
   * 
   * @param {*} value CityId selected
   */
  function getToCity(value) {
    setToLocation(value)
  }

  /**
   * Function gets the destination city selected from the Locations.js file.
   * 
   * @param {*} value CityId selected
   */
  function getFromCity(value) {
    setFromLocation(value)
  }

  /**
   * Return function returning the complete SearchBox with its components.
   */
  return (
    // div takes up rest of screen after Header.js
    <div className="searchbox">
      {/* div encompasses the entire search field */}
      <form className="searchForm">
        {/* div for destination inputs */}
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
        {/* div for date inputs and search button*/}
        <div className="datePickers">
          <div className="dates">
            <label>Depart</label>
            <Datepicker className="calender"
              selected={startDate}
              onChange={handleStartDate}
            /></div>
          <div className="dates">
            <label>Return</label>
            <Datepicker
              selected={endDate}
              onChange={handleEndDate}
            /></div>
          <button className="search" onClick={handleSearch}>Search Flights</button>
        </div>
      </form>
      {/* remainder of page dedicated to a table of search results */}
      { showFlights ? <Flights quotes={flights} className="flightTable"></Flights> : <></>}
      {/* currency dropdown menu */}
      <Currencies value={currency} sendCurrency={getCurrency} ></Currencies>
    </div>
  );
}

/**
 * Default export statement.
 */
export default SearchBox;