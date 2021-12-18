import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from "./contact-action";

const ContactState = null;

const contacts = createReducer(ContactState, {
  [getContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => payload,
  [deleteContactSuccess]: (state, { payload }) => payload,
});
const isLoading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [getContactRequest]: () => true,
  [getContactError]: () => false,
});
const contactReducer = combineReducers({
  contacts,
  isLoading,
});
export default contactReducer;
