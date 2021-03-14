import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchForm.css';

class SearchForm extends Component {

    constructor(){
        super();
        this.state = {
            departureDate: new Date(),
            returnDate: new Date()
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
    
    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.departureDate)
        console.log(this.state.returnDate)
    }
    
    handleSearch(e){

    }

    render() {
        return (
            <div className = "searchForm">
                <form onSubmit={ this.onFormSubmit }>
                    <div className="date-pickers">
                        <p> Start Date: </p>
                        <DatePicker
                            selected={ this.state.departureDate }
                            onChange={ this.handleDepartureDate }
                            name="departureDate"
                            dateFormat="MM/dd/yyyy"
                        />
                        <p> End Date: </p>
                        <DatePicker
                            selected={ this.state.returnDate }
                            onChange={ this.handleReturnDate }
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