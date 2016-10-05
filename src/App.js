import React from 'react'
import { Provider, connect } from 'react-redux'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import store from './store';

import Orders from './components/Orders';
import Cars from './components/Cars';
import CurrentCar from './components/CurrentCar';

import DevTools from './containers/DevTools';



class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render(){
		
		const {
			dispatch,
			currentCar,
			cars,
			orders
		} = this.props;

		return (
			<Provider store={store}>
				<div className="main__container full-height">
					<div className="columns full-height">
						<div className="column column--left full-height">
							<Orders/>
							<CurrentCar/>
						</div>
						<div className="column column--right full-height">
							<Cars/>
						</div>
					</div>
					{(process.env.NODE_ENV !== "production") && <DevTools/> }
				</div>
				
			</Provider>
		)
	}
}

export default DragDropContext(HTML5Backend)(App);