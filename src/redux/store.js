import { createStore } from "redux";
import initialState from "./initialState";
import shortid from "shortid";

// Funkcja odpowiadająca za modyfikację danych z magazynu
const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload }]};
    default:
      return state;
  }
};

// Funkcja odpowiadająca za stworzenie magazynu
const store = createStore(
  reducer,
  // Dane początkowe magazynu
  initialState,
  // Opcjonalny argument, w którym ustalamy jakie pluginy należy wykorzystać
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;