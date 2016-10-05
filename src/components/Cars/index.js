import React, {Component, PropTypes} from 'react';
import './cars.styl';
import Car from './car';
import {connect} from 'react-redux';

import {fetchCars, setCurrentCar,addGoods} from '../../actions';

class Cars extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount (){
		this.props.dispatch(fetchCars());
	}
	handleDrop(index,order){
		console.log(index,order);
		this.props.dispatch(addGoods(index,order));
	}
	render() {
		const {dispatch} = this.props;
		const {loading, cars} = this.props.cars;

		return (
			
			<div className="cars full-height overflow-y">
				{

					(typeof loading !== 'undefined' && loading ) ? <p>Loading Cars Component...</p> :
					<table className="table table-striped table-bordered cars__table">
						<thead className="table__head">
							<tr className="table__row">
								<th className="table__header">Заказ</th>
								<th className="table__header">Товар (шт.)</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{cars.map((car, i) => {
								return (
									<Car onDrop={this.handleDrop.bind(this)} index={i} key={i} car={car} onClick={()=>{dispatch(setCurrentCar(car))}}/>
								)
							})}
						</tbody>
					</table>
				}
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