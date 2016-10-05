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
		default:
			return state

	}
}

export const currentCar = (state = {}, {type,car}) => {
	switch(type){
		case ACTIONS.SET_CURRENT_CAR:
			return car;
		default: 
			return state;
	}
}