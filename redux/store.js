import { createStore } from 'redux';

import reducer from './reducers/index';

export default function (initialState) {
	return createStore(reducer, initialState);
}
