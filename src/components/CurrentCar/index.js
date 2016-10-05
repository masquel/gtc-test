import React, {Component, PropTypes} from 'react';
import './currentCar.styl';
import {connect} from 'react-redux';

class CurrentCar extends Component {
	constructor(props){
		super(props)
	}
	render() {
		const index = this.props.currentCar;
		const {cars} = this.props.cars;
		var brand,orders;
		if(typeof cars !== 'undefined' && index !== -1){
			console.log(cars[index]);
			brand = cars[index].brand;
			orders = cars[index].orders;
		}
		let sum = 0;
		(typeof orders !== 'undefined' && orders.length) && orders.map(curr => sum += curr.goodsNum);
		return (
			index !== -1 ? 
			<div className="current-car half-height overflow-y">
				<div className="current-car__inner">
					<div className="current-car__brand">{brand}</div>
					<div className="current-car__number">				

						Всего: {sum}
					</div>
				</div>
			</div> :
			<div className="current-car half-height overflow-y">
				<div className="current-car__inner">
					Выберите автомобиль для отображения заказов
				</div>
			</div>


		)
	}
}

CurrentCar.propTypes = {
	
}

export default connect(s=>s)(CurrentCar)