import React, { useState } from 'react';
import './Flights.css';

function Flights(props) { 

    return(
        <div className="quotes">
            <table>
                <caption> Flights Found </caption>
                <thead>
                    <tr>
                        <th>Quote ID</th>
                        <th>Min Price</th>
                        <th>Outbound Carrier IDs</th>
                        <th>Outbound Carrier Name</th>
                        <th>Outbound Leg Departure Date</th>
                        <th>Quote Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quotes.map(quote => {
                        return (<tr id={quote.QuoteId}>
                            <th>${quote.MinPrice}</th>
                            <th>{quote.OutboundLeg.CarrierIds}</th>
                            <th>{quote.OutboundLeg.DepartureDate}</th>
                            <th>{quote.QuoteDateTime}</th>
                        </tr>);
                    })}
                </tbody>
            </table>
         </div>
    );
}


export default Flights;