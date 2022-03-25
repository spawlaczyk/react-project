import { createStore } from "redux";
import initialState from "./initialState";
import shortid from "shortid";
import strContains from "../utils/strContains";

// Funkcja odpowiadająca za modyfikację danych z magazynu
const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCHSTRING':
      return {...state, searchString: action.payload};
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

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;

export const addColumn = payload => ({type: 'ADD_COLUMN', payload});

export const addCard = payload => ({type: 'ADD_CARD', payload})

export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload })

export default store;