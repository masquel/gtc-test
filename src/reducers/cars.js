import {ACTIONS} from '../config/consts'

export const carsLoad = (state = {loading: true,cars: []}, {type,loading,cars,index,order}) => {
	switch(type){
		case ACTIONS.CARS_LOAD: {
			return {
				loading
			}
		}
		case ACTIONS.CARS_SET:{
			return {
				cars,
				loading
			}
		}
		case ACTIONS.ADD_GOODS:{
			return {
				cars:[
					...state.cars.slice(0, index),
					{
						brand: state.cars[index].brand,
						orders: [
							...state.cars[index].orders || [],
							order
						]
					},
					...state.cars.slice(index+1)
				],
				loading
			}
		}
		case ACTIONS.CLEAR_GOODS:{
			return {
				cars:[
					...state.cars.slice(0, index),
					{
						brand: state.cars[index].brand,
						orders: []
					},
					...state.cars.slice(index+1)
				],
				loading
			}
		}
		default:
			return state

	}
}

export const currentCar = (state = -1, {type,index}) => {
	switch(type){
		case ACTIONS.ADD_GOODS:
		case ACTIONS.CLEAR_GOODS:
		case ACTIONS.SET_CURRENT_CAR:
			return index;
		default: 
			return state;
	}
}