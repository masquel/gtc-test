import React, {Component, PropTypes} from 'react';
import { DropTarget } from 'react-dnd';
//import {connect} from 'react-redux';


const carTarget = {
  drop(props, monitor) {
  	let order = monitor.getItem();
    props.onDrop(props.index, order);

  }
};


const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Car extends Component {
	constructor(props){
		super(props);
	}
	render(){
		
		const {connectDropTarget, car, onClick} = this.props;
		const {orders} = car;
		let sum = 0;
		(typeof orders !== 'undefined' && orders.length) && orders.map(curr => sum += curr.goodsNum);
		return connectDropTarget(
			<tr className="table__row car" onClick={()=>{onClick()}}>
				<td className="table__cell car__address">{car.brand}</td>
				<td className="table__cell car__good-number text-right">{sum}</td>
			</tr>
		)
	}
}

Car.proptypes = {
    connectDropTarget: PropTypes.func.isRequired
}

export default DropTarget('order_card', carTarget, collect)(Car);