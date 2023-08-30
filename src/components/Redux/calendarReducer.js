// reducers/calendarReducer.js
const initialState = [];

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    case 'UPDATE_EVENT':
      return state.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.payload);
    default:
      return state;
  }
};

export default calendarReducer;
