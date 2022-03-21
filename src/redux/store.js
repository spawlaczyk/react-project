import { createStore } from "redux";
import initialState from "./initialState";

// Funkcja odpowiadająca za modyfikację danych z magazynu
const reducer = (state, action) => {
  return state;
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