import { SET_CONCERTS, ADD_CONCERT } from '../actions';
import { getId } from '../utils';

function setConcerts(state, concerts) {
  return concerts.slice();
}

function addConcert(state, title) {
  return state.concat({
  	id: getId(),
  	title
  });
}

export default function concertReducer(state = [], action) {
	switch (action.type) {
  	case SET_CONCERTS:
  		return setConcerts(state, action.concerts);
  	case ADD_CONCERT:
  		return addConcert(state, action.title);
  	default:
  		return state;
  	}
}