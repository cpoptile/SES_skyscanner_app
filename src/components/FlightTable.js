// IMPORTS
import React, { useState } from 'react';

function FlightTable(props) {
	const [sort, setSort] = useState("default");
	const [flights, setFlights] = useState([]);

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

	const onSortChange = () => {
		let nextSort;

		if (sort === 'down') nextSort = 'up';
		else if (sort === 'up') nextSort = 'default';
		else if (sort === 'default') nextSort = 'down';

		console.log(flights)
		setFlights(props.Quotes)

		console.log(props.quotes)
		console.log(sort)
		console.log(flights)
		setSort(nextSort)
	};


	return (
		<div className="flights">
			<head>
				<script src="https://kit.fontawesome.com/ec53680016.js" crossorigin="anonymous"></script>
			</head>
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
					{console.log(props),
					console.log(props.Quotes),
					props.quotes.Quotes.sort(sortTypes[sort].fn).map(quote => {
						let departDate = new Date(quote.OutboundLeg.DepartureDate.toString())
						let direct
						console.log(props)
						if (!quote.Direct){ 
							direct = "No"
						} else {
							direct = "Yes"
						}
						return (<tr id={quote.QuoteId}>
							<th>{direct}</th>
							{/* <th>{props.quotes.Carriers[0].Name}</th> */}
							<th>{departDate.toDateString()}</th>
							<th>{props.quotes.Currencies[0].Symbol + " " + quote.MinPrice}</th>
						</tr>);
					})}
				</tbody>
			</table>
		</div>
	);

}

export default FlightTable;