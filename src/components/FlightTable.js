import React from 'react';

class FlightTable extends React.Component {
	// declaring the default state
	state = {
		currentSort: 'default'
	};
    

	// method called every time the sort button is clicked
	// it will change the currentSort value to the next one
	onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
	};


	render() {
		const { data } = this.props;
        console.log(data)
		const { currentSort } = this.state;

        const sortTypes = {
            up: {
                class: 'sort-up',
                fn: (a, b) => a.net_worth - b.net_worth
            },
            down: {
                class: 'sort-down',
                fn: (a, b) => b.net_worth - a.net_worth
            },
            default: {
                class: 'sort',
                fn: (a, b) => a
            }
        };

		return (
			data.length > 0 && (
				<table className='text-left'>
					<thead>
						<tr>
							<th>Name</th>
							<th>
								Net Worth
								<button onClick={this.onSortChange}>
									<i className={`fas fa-${sortTypes[currentSort].class}`} />
								</button>
							</th>
						</tr>
					</thead>
					<tbody>
						{[data].sort(sortTypes[currentSort].fn).map(p => (
							<tr>
                                {console.log(p)}
                                {console.log(p.Quotes.MinPrice)}

								<td>{p.MinPrice}</td>

								<td>${p.QuoteID}</td>
							</tr>
						))}
					</tbody>
				</table>
			)
		);
	}
}

export default FlightTable;