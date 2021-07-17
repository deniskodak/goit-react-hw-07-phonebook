import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

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
  filterContacts,
} from '../actions/phoneBookActions';

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [filterContacts.type]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const error = createReducer(
  {},
  {
    [getContactsError]: (_, { payload }) => payload,
    [addContactsError]: (_, { payload }) => payload,
    [deleteContactsError]: (_, { payload }) => payload,
  },
);
export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
