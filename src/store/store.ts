import { createStore } from "redux";
import { counterReducer } from './storeModels/defineStoreFunctions';

export const store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))
