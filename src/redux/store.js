import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contacts, error, isLoading } from "./Contact/contact-reducer";
import filter from "./Filter/filter-reducer";

const rootReducer = combineReducers({
  items: contacts,
  isLoading,
  error,
  filter: filter,
});

export const store = configureStore({
  reducer: rootReducer,
});
