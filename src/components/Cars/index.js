import React, {Component, PropTypes} from 'react';
import './cars.styl';

import {connect} from 'react-redux';

import {fetchCars} from '../../actions';

class Cars extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount (){
		this.props.dispatch(fetchCars());
	}
	render() {
		const {loading, cars} = this.props.cars;
		return (
			(typeof loading !== 'undefined' && loading ) ?
			<p>Loading Component...</p> :
			<div className="cars">

				<table className="table table-striped cars__table">
					<thead className="table__head">
						<tr className="table__row">
							<th className="table__header">Заказ</th>
							<th className="table__header">Товар (шт.)</th>
						</tr>
					</thead>
					<tbody className="table__body">
						{cars.map((car, i) => {
							return (
								<tr className="table__row car" key={i}>
									<td className="table__cell car__address">{car.brand}</td>
									<td className="table__cell car__good-number">{car.goodsNum || 0}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

Cars.propTypes = {
	
}

const mapStateToProps = (state) => {
	return {
		cars: state.cars
	}
}

export default connect(s=>s)(Cars)