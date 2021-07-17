import axios from 'axios';

import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from '../actions/phoneBookActions';

axios.defaults.baseURL = 'http://localhost:4000';

const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  try {
    const response = await axios.get('/contacts');
    dispatch(getContactsSuccess(response.data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

const addContact = (name, phone) => async dispatch => {
  const contact = {
    name,
    phone,
  };

  dispatch(addContactsRequest());

  try {
    const response = await axios.post('./contacts', contact);
    dispatch(addContactsSuccess(response.data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactsRequest());

  try {
    await axios.delete(`./contacts/${id}`);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};
export { getContacts, addContact, deleteContact };
