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
		setFlights(props)

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
						<th>Quote ID</th>
						<th>Min Price
							<button onClick={onSortChange}>
								<i className={`fas fa-${sortTypes[sort].class}`} />
							</button>
						</th>
						<th>Outbound Carrier IDs</th>
						<th>Outbound Carrier Name</th>
						<th>Outbound Leg Departure Date</th>
						<th>Quote Date and Time</th>
					</tr>
				</thead>
				<tbody>
					{props.quotes.sort(sortTypes[sort].fn).map(quote => {
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

	// // declaring the default state
	// state = {
	// 	currentSort: 'default'
	// };


	// // method called every time the sort button is clicked
	// // it will change the currentSort value to the next one
	// onSortChange = () => {
	// 	const { currentSort } = this.state;
	// 	let nextSort;

	// 	if (currentSort === 'down') nextSort = 'up';
	// 	else if (currentSort === 'up') nextSort = 'default';
	// 	else if (currentSort === 'default') nextSort = 'down';

	// 	this.setState({
	// 		currentSort: nextSort
	// 	});
	// };


	// render() {
	// 	const { data } = this.props;
	//     console.log(this.props)
	// 	const { currentSort } = this.state;

	//     const sortTypes = {
	//         up: {
	//             class: 'sort-up',
	//             fn: (a, b) => a.net_worth - b.net_worth
	//         },
	//         down: {
	//             class: 'sort-down',
	//             fn: (a, b) => b.net_worth - a.net_worth
	//         },
	//         default: {
	//             class: 'sort',
	//             fn: (a, b) => a
	//         }
	//     };

	// 	return (
	// 		(
	// 			<table className='text-left'>
	// 				<thead>
	// 					<tr>
	// 						<th>Name</th>
	// 						<th>
	// 							Net Worth
	// 							<button onClick={this.onSortChange}>
	// 								<i className={`fas fa-${sortTypes[currentSort].class}`} />
	// 							</button>
	// 						</th>
	// 					</tr>
	// 				</thead>
	// 				<tbody>
	// 					{[data].sort(sortTypes[currentSort].fn).map(p => (
	// 						<tr>
	//                             {console.log(p)}
	//                             {console.log(p.Quotes.MinPrice)}

	// 							<td>{p.MinPrice}</td>

	// 							<td>${p.QuoteID}</td>
	// 						</tr>
	// 					))}
	// 				</tbody>
	// 			</table>
	// 		)
	// 	);
	// }
}

export default FlightTable;