import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Header } from './components';
import { Cart, Home } from './pages';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';


class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			this.props.setPizzas(data.pizzas);
		});
	}
	render() {
		return (
			<div className="wrapper">
				<Header />
				<div className="content">
					<Route path="/" render={() => <Home items={[this.props.items]} />} exact /> 	{/* Если в компонент который рендериться нужно
																		 прокинуть ещё компоненты, тогда мы выбираем
																		такой вариант */}
					<Route path="/cart" component={Cart} exact />		{/* Если нет, тогда такой вариант */}
				</div>
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		items: state.pizzas.items,
	};
};

const mapDispitchToProps = (dispatch) => {
	return {
		setPizzas: (items) => dispatch(setPizzasAction(items)),
	};
};

export default connect(mapStateToProps, mapDispitchToProps)(App);




// function App() {

// 	React.useEffect(() => {
// 		fetch('http://localhost:3000/db.json')
// 			.then((resp) => resp.json())
// 			.then((json) => {
// 				setPizzas(json.pizzas);
// 			});
// 	}, []);

// 	return
// }

// componentDidMount() {
// 	fetch('http://localhost:3000/db.json')
// 		.then((resp) => resp.json())
// 		.then((json) => {
// 			window.store.dispatch(setPizzas(json.pizzas));
// 		});