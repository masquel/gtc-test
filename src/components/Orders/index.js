import React, {Component, PropTypes} from 'react';
import './orders.styl';

import Order from './order';

import {fetchOrders,removeOrder} from '../../actions';
import {connect} from 'react-redux';

class Orders extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.dispatch(fetchOrders());
	}
	render() {
		const {dispatch} = this.props;
		const {loading, orders} = this.props.orders;
		return (
			<div className="orders half-height overflow-y">
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
			</div>
		)
	}
}

Orders.propTypes = {

}

export default connect(s=>s)(Orders)