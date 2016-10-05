import React, {Component, PropTypes} from 'react';
import './currentCar.styl';
import {connect} from 'react-redux';

class CurrentCar extends Component {
	constructor(props){
		super(props)
	}
	render() {
		const {brand,orders} = this.props.currentCar;
		let sum = 0;
		(typeof orders !== 'undefined' && orders.length) && orders.map(curr => sum += curr.goodsNum);
		return (
			brand ? 
			<div className="current-car half-height overflow-y">
				<div className="current-car__inner">
					<div className="current-car__brand">{brand}</div>
					<div className="current-car__number">				
						{sum}
					</div>
				</div>
			</div> :
			<div></div>


		)
	}
}

CurrentCar.propTypes = {
	
}

export default connect(s=>s)(CurrentCar)