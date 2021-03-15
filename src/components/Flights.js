import React from 'react';
import './Flights.css';

function Flights(props) { 

    return(
        <div className="flights">
            <table>
                <thead>
                    <tr>
                        <th>Quote ID</th>
                        <th>Min Price</th>
                        <th>Outbound Carrier IDs</th>
                        <th>Outbound Carrier Name</th>
                        <th>Outbound Leg Departure Date</th>
                        <th>Inbound Carrier IDs</th>
                        <th>Inbound Carrier Name</th>
                        <th>Inbound Leg Departure Date</th>
                        <th>Direct Flight?</th>
                        <th>Quote Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quotes.map(quote => {
                        return (<tr id={quote.QuoteId}>
                            <th>${quote.MinPrice}</th>
                            <th>{quote.OutboundLeg.CarrierIds}</th>
                            <th>{quote.OutboundLeg.DepartureDate}</th>
                            <th>{quote.InboundLeg.CarrierIds}</th>
                            <th>{quote.InboundLeg.DepartureDate}</th>
                            <th>{quote.Direct}</th>
                            <th>{quote.QuoteDateTime}</th>
                        </tr>);
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Flights;