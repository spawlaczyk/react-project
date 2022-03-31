import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import listsReducer from "./listsRedux";
import columnsReducer from "./columnsRedux";
import cardsReducer from "./cardsRedux";
import searchStringReducer from "./searchStringRedux";

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
};

const reducer = combineReducers(subreducers);

// Funkcja odpowiadająca za stworzenie magazynu
const store = createStore(
  reducer,
  // Dane początkowe magazynu
  initialState,
  // Opcjonalny argument, w którym ustalamy jakie pluginy należy wykorzystać
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;