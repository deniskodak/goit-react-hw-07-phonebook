import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  addContact,
  deleteContact,
  filterContacts,
} from "../actions/phoneBookActions";

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer("", {
  [filterContacts.type]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
