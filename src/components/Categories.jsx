import React from 'react';

function Categories({items, onClickItem}) {
	const [activeItem,  setActiveItem] = React.useState(null);

	const onSelectItem = (index) => {
		setActiveItem(index);
		onClickItem(index);
	}


	return (
		<div className="categories">
			<ul>
				<li className={activeItem === null ? 'active' : ''}
					onClick={() => onSelectItem(null)}>Все</li>	
				{items &&
					items.map((name, index) => (
					<li className={activeItem === index ? 'active' : ''}
						onClick={() => onSelectItem(index)}
						key={`${name}_${index}`}>
						{name}</li>))}
					{/* Когда используешь свойство map, то елементы должны иметь свойство
					 key - каждый своё уникальное значение.
					Для этого мы используем строку  key={`${name}_${index}`}*/}
			</ul>
		</div>
		
	)
}


// ----------------КЛАССОВЫЙ КОМПОНЕНТ, ВЫШЕ ФУНКИЦИОНАЛЬНЫЙ КОМПОНЕНТ----------------
// class Categories extends React.Component {
// 	state = {
// 		activeItem: '',

// 	};

// 	onSelectItem = (index) => {
// 		this.setState({
// 			activeItem: index,
// 		})
// 	}
// 	render() {
// 		const { items, onClickItem } = this.props;
// 		return (
// 			<div className="categories">
// 				<ul>
// 					<li>Все</li>
// 					{items.map((name, index) => (
// 						<li className={this.state.activeItem === index ? 'active' : ''}
// 							onClick={() => this.onSelectItem(index)} key={`${name}_${index}`}>
// 							{name}</li>))}
// 					{/* Когда используешь свойство map, то елементы должны иметь свойство
//  					 key - каждый своё уникальное значение.
//  					Для этого мы используем строку  key={`${name}_${index}`}*/}
					
// 				</ul>
// 			</div>
// 		);
// 	}
// }


export default Categories
