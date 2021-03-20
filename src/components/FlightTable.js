// IMPORTS
import React, { useState } from 'react';

/**
 * Function creates a table that displays flight information
 * that can be sorted by dollar amount.
 * 
 * @param {*} props Objects returned from API call
 * @returns a table containing flight information 
 */
function FlightTable(props) {
	const [sort, setSort] = useState("default");
	const [flights, setFlights] = useState([]);

	/**
	 * Const initializes the sort methods to be used on the table.
	 */
	const sortTypes = {
		up: {
			class: 'sort-up',
			fn: (a, b) => a.MinPrice - b.MinPrice
		},
		down: {
			class: 'sort-down',
			fn: (a, b) => b.MinPrice - a.MinPrice
		},
		default: {
			class: 'sort',
			fn: (a, b) => a
		}
	};

	/**
	 * Const changes sort as button is clicked.
	 */
	const onSortChange = () => {
		let nextSort;

		if (sort === 'down') nextSort = 'up';
		else if (sort === 'up') nextSort = 'default';
		else if (sort === 'default') nextSort = 'down';

		setFlights(props.Quotes)
		console.log(flights)
		setSort(nextSort)
	};

	// function mapCarriers() {
	// 	console.log("TESTTT")
	// 	setCarriers(props.quotes.Carriers.map(carrier => {
	// 		return {
	// 			value: carrier.CarrierId,
	// 			name: carrier.Name
	// 		}
	// 	}))

	// }



	/**
	 * Table containing flight information is returned.
	 */
	return (
		<div className="flights">
			<table>
				<thead>
					<tr>
						<th>Direct Flight?</th>
						{/* <th>Carrier Name</th> */}
						<th>Outbound Leg Departure Date</th>
						<th>Min Price
							<button onClick={onSortChange}>
								<i className={`fas fa-${sortTypes[sort].class}`} />
							</button>
						</th>
					</tr>
				</thead>
				<tbody>
					{props.quotes.Quotes.sort(sortTypes[sort].fn).map(quote => {
							let departDate = new Date(quote.OutboundLeg.DepartureDate.toString())
							let direct
							if (!quote.Direct) {
								direct = "No"
							} else {
								direct = "Yes"
							}
							return (<tr id={quote.QuoteId}>
								<th>{direct}</th>
								{/* <th>{carriers.get(quote.OutboundLeg.CarrierIds[0])}</th> */}
								<th>{departDate.toDateString()}</th>
								<th>{props.quotes.Currencies[0].Symbol + " " + quote.MinPrice}</th>
							</tr>);
						})}
				</tbody>
			</table>
		</div>
	);

}

// Default export statement
export default FlightTable;