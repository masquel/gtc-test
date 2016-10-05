import {combineReducers} from 'redux'
import {ordersLoad} from './orders'
import {carsLoad, currentCar} from './cars'

const gtcApp = combineReducers({
	orders: ordersLoad,
	cars: carsLoad,
	currentCar
})

export default gtcApp