// // IMPORTS
// import React from 'react';
// import './Flights.css';

// /**
//  * Function maps an array of quotes to a table.
//  * 
//  * @param {*} props An array of quotes returned by an API call
//  * @returns A table containing flight information.
//  */
// function Flights(props) {

//     return (
//         <div className="flights">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Quote ID</th>
//                         <th>Min Price</th>
//                         <th>Outbound Carrier IDs</th>
//                         <th>Outbound Carrier Name</th>
//                         <th>Outbound Leg Departure Date</th>
//                         <th>Quote Date and Time</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.quotes.map(quote => {
//                         return (<tr id={quote.QuoteId}>
//                             <th>${quote.MinPrice}</th>
//                             <th>{quote.OutboundLeg.CarrierIds}</th>
//                             <th>{quote.OutboundLeg.DepartureDate}</th>
//                             <th>{quote.QuoteDateTime}</th>
//                         </tr>);
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// // Default export statement.
// export default Flights;