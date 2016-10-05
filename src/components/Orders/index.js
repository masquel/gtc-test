import React, {Component, PropTypes} from 'react';
import { DropTarget } from 'react-dnd';
import {connect} from 'react-redux';

import './orders.styl';

import Order from './order';

import {fetchOrders,removeOrder,addOrdersFromCar} from '../../actions';


const ordersTarget = {
  drop(props, monitor) {
  	let car = monitor.getItem();
    props.dispatch(addOrdersFromCar(car.orders));
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Orders extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.dispatch(fetchOrders());
	}
	render() {
		const {dispatch,connectDropTarget,canDrop,isOver} = this.props;
		const {loading, orders} = this.props.orders;

		const isActive = isOver && canDrop;

		return connectDropTarget(
			<div className="orders half-height overflow-y" style={{
				backgroundColor: isActive ? '#2ecc71' : (canDrop ? '#3498db' : '')
			}}>
				{
					(typeof loading !== 'undefined' && loading ) ? <p>Loading Orders Component...</p> :
					<table className="table table-bordered table-striped orders__table">
						<thead className="table__head">
							<tr className="table__row">
								<th className="table__header">Заказ</th>
								<th className="table__header">Товар (шт.)</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{
								orders.length == 0 ? <tr><td colSpan="2" className="text-center">Заказов нет</td></tr> :
								orders.map((order,index) => {
									return (
										<Order order={order} onRemove={()=>{dispatch(removeOrder(index))}} key={index} />
									)
								})
							}
						</tbody>
					</table>

				}
				{isActive && <p className="lead">Перенесите автомобиль в эту область, чтобы сбросить все его товары</p>}
			</div>
		)
	}
}

Orders.propTypes = {

}
Orders = DropTarget('car_card', ordersTarget, collect)(Orders);
export default connect(s=>s)(Orders)