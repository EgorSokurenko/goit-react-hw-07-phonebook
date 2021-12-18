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
const axios = require("axios");

export const asyncGetContact = () => async (dispatch) => {
  dispatch(getContactRequest());
  axios
    .get("https://61bc594cd8542f00178246b9.mockapi.io/contacts/contacts")
    .then((response) => dispatch(getContactSuccess(response.data)))
    .catch((error) => dispatch(getContactError(error)));
};
export const asyncAddContact = (name, phone) => async (dispatch) => {
  dispatch(addContactRequest());
  const newContact = { name, phone };
  try {
    const contacts = await axios.get(
      "https://61bc594cd8542f00178246b9.mockapi.io/contacts/contacts"
    );
    const reallyContacts = contacts.data;
    if (
      reallyContacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const addContact = await axios.post(
      "https://61bc594cd8542f00178246b9.mockapi.io/contacts/contacts",
      newContact
    );
    dispatch(addContactSuccess([...reallyContacts, addContact.data]));
  } catch (error) {
    console.log(error);
    dispatch(addContactError(error));
  }
};
export const asyncDeleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest);
  try {
    const deleteContact = await axios.delete(
      `https://61bc594cd8542f00178246b9.mockapi.io/contacts/contacts/${id}`
    );
    const newContact = await axios.get(
      "https://61bc594cd8542f00178246b9.mockapi.io/contacts/contacts"
    );
    dispatch(deleteContactSuccess(newContact.data));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
