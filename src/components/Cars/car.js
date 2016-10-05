import React, {Component, PropTypes} from 'react';
import { DropTarget,DragSource } from 'react-dnd';

//import flow from 'lodash/function/flow';


const carTarget = {
  drop(props, monitor) {
  	let {order} = monitor.getItem();
    props.onDrop(props.index, order);
  }
};


const collectDrop = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const collectDrag = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const carSource = {
	canDrag(props) {
		const {car} = props;
		const {orders} = car;
		return (typeof orders !== 'undefined' && orders.length);
	},
	beginDrag(props) {
		const {car} = props;
		return car;
	},
	endDrag(props,monitor,component){
		if (!monitor.didDrop()) {
			return;
		}
		props.onClear()
	}
};

class Car extends Component {
	constructor(props){
		super(props);
	}
	render(){
		
		const {className,connectDropTarget, car, onClick, canDrop, isOver,connectDragSource,forbidDrag} = this.props;
		const {orders} = car;
		const isOrders = (typeof orders !== 'undefined' && orders.length);
		const isActive = isOver && canDrop;

		let sum = 0;
		isOrders && orders.map(curr => sum += curr.goodsNum);
		
		return connectDropTarget(connectDragSource(
			<tr className={className + " table__row car"} onClick={()=>{onClick()}} style={
				{
					backgroundColor: isActive ? '#2ecc71' : (canDrop ? '#3498db' : ''),
					color: (isActive || canDrop) && '#fff',
					cursor: !isOrders ? 'pointer' : 'move' 
				}
			}>
				<td className="table__cell car__address">{car.brand}</td>
				<td className="table__cell car__good-number text-right">{sum}</td>
			</tr>
		))
	}
}

Car.proptypes = {
    connectDropTarget: PropTypes.func.isRequired
}

Car = DropTarget('order_card', carTarget, collectDrop)(Car);
Car = DragSource('car_card', carSource, collectDrag)(Car)

export default Car