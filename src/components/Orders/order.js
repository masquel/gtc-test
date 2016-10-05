import React, {Component, PropTypes} from 'react';
import { DragSource } from 'react-dnd';
//import {connect} from 'react-redux';


const orderSource = {
  beginDrag(props) {
  	const {order} = props;
    return {
    	order
    };
  },endDrag(props,monitor){
  	if (!monitor.didDrop()) {
		return;
	}
  	props.onRemove();
  }
};


const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Order extends Component {
	render(){
		const {isDragging, connectDragSource, order} = this.props;
		return connectDragSource(
			<tr className="table__row order">
				<td className="table__cell order__address">{order.address}</td>
				<td className="table__cell order__good-number text-right">{order.goodsNum}</td>
			</tr>
		)
	}
}

Order.proptypes = {
	isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
}

export default DragSource('order_card', orderSource, collect)(Order);