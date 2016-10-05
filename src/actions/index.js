import fetch from 'isomorphic-fetch'
import {ACTIONS} from '../config/consts.js'


/* ORDERS ACTIONS */

const loadOrders = () => {
	return {
		type: ACTIONS.ORDERS_LOAD,
		loading: true
	}
}

const loadOrderError = (error) => {
	return {
		type: ACTIONS.ORDERS_LOAD_ERROR,
		loading: false,
		error
	}
}


const setOrders = (orders) => {

	return {
		type: ACTIONS.ORDERS_SET,
		loading: false,
		orders
	}
}


export const fetchOrders = () => {
	return dispatch => {
		dispatch(loadOrders())
		return fetch('./orders.json').then(response => response.json()).then(json => dispatch(setOrders(json))).catch(error=>dispatch(loadOrderError(error)))
	}
}

export const removeOrder = (index) => {
	return {
		type: ACTIONS.ORDER_REMOVE,
		index
	}
}

export const addOrdersFromCar = (orders) => {
	console.log(orders);
	return {
		type: ACTIONS.ADD_ORDERS_FROM_CAR,
		orders
	}
}



/* CARS ACTIONS */

const loadCars = () => {
	return {
		type: ACTIONS.CARS_LOAD,
		loading: true
	}
}

const loadCarsError = (error) => {
	return {
		type: ACTIONS.CARS_LOAD_ERROR,
		loading: false,
		error
	}
}

const setCars = (cars) => {

	return {
		type: ACTIONS.CARS_SET,
		loading: false,
		cars
	}
}

export const fetchCars = () => {
	return dispatch => {
		dispatch(loadCars())
		return fetch('./cars.json').then(response => response.json()).then(json => dispatch(setCars(json))).catch(error=>dispatch(loadOrderError(error)))
	}
}


export const setCurrentCar = (index) => {
	return {
		type: ACTIONS.SET_CURRENT_CAR,
		index
	}
}



export const addGoods = (index, order) => {
	return {
		type: ACTIONS.ADD_GOODS,
		index,
		order
	}
}

export const clearGoods = (index) => {
	return {
		type: ACTIONS.CLEAR_GOODS,
		index
	}	
}