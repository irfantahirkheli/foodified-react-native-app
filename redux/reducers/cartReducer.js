let defaultState = {
	selectedItem: { items: [], restaurantName: '' },
};

let cartReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART': {
			let newState = { ...state };
			newState.selectedItem = {
				items: [...newState.selectedItem.items, action.payload],
				restaurantName: action.payload.restaurantName,
			};
			console.log(newState.selectedItem.items.length, 'add');
			return newState;
		}
		case 'REMOVE_FROM_CART': {
			let newState = { ...state };
			newState.selectedItem = {
				items: [
					...newState.selectedItem.items.filter(
						(item) => item.title !== action.payload.title
					),
				],
				restaurantName: action.payload.restaurantName,
			};
			console.log(newState.selectedItem.items, 'remove');
			return newState;
		}

		default:
			return state;
	}
};

export default cartReducer;
