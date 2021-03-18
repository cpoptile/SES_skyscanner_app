import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import SearchBox from './SearchBox';
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchForm.css';

class SearchForm extends Component {

    constructor(){
        super();
        
        this.state = {
            departureDate: new Date(),
            returnDate: new Date(),
            toLocation: "",
            fromLocation: ""
        };

        this.handleDepartureDate = this.handleDepartureDate.bind(this);
        this.handleReturnDate = this.handleReturnDate.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleDepartureDate(date) {
        this.setState({
          departureDate: date
        })
    }

    handleReturnDate(date) {
        this.setState({
          returnDate: date
        })
    }

    handleTo(input) {
        this.setState({
          toLocation: input
        })
    }

    handleFrom(input) {
        this.setState({
          fromLocation: input
        })
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.departureDate)
        console.log(this.state.returnDate)
    }
    
    // handleSearch(e){
    //     e.preventDefault()
    //     async function fetchMyAPI(){
    //         const reqOptions = {
    //             method: 'GET',
    //             headers: {
    //                 "x-rapidapi-key": "42a5ad4309msh0f7539296c11895p172628jsn1bac294685a3",
    //                 "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    //                 "useQueryString": true
    //             }
    //         }
    //         let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams(toLocation), reqOptions)
    //         response = await response.json()
    //         console.log(response)

    //     }
    //     fetchMyAPI()
    //     this.state.toLocation.setState("")

    // }

    render() {
        return (
            <div className = "searchForm">
                <form onSubmit={ this.onFormSubmit }>
                    <div>
                        <label htmlFor="toInput">TO:</label>
                        <input placeholder="Enter Destination City" ref={node => {this.toLocation = node;}}/>
                        <label htmlFor="fromInput">FROM:</label>
                        <input placeholder="Enter Destination City" ref={node => {this.fromLocation = node;}}/>
                        <button className="search">Search</button>
                    </div>
                    <div className="date-pickers">
                        <label htmlFor="startDate">Start Date:</label>
                        <DatePicker
                            selected={ this.state.departureDate }
                            onChange={ this.handleDepartureDate } required
                            name="departureDate"
                            dateFormat="MM/dd/yyyy"
                        />
                        <p> End Date: </p>
                        <DatePicker
                            selected={ this.state.returnDate }
                            onChange={ this.handleReturnDate } required
                            name="returnDate"
                            dateFormat="MM/dd/yyyy"
                        />
                    </div>
                </form>
            </div>
        );
    }
      
}

export default SearchForm;