import {ACTIONS} from '../config/consts'

export const ordersLoad = (state = {loading: true,orders: []}, {type,loading,orders,index}) => {
	switch(type){
		case ACTIONS.ORDERS_LOAD: {
			return {
				loading
			}
		}
		case ACTIONS.ORDERS_SET:{
			return {
				orders,
				loading
			}
		}
		case ACTIONS.ORDER_REMOVE:{
			return {
				orders: [
					...state.orders.slice(0,index),
					...state.orders.slice(index+1)
				],
				loading
			}
		}
		case ACTIONS.ADD_ORDERS_FROM_CAR:{
			return {
				orders: [
					...state.orders,
					...orders
				]
			}
		}
		default:
			return state

	}
}