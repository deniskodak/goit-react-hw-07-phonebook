import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('phonebook/getContactsRequest');
export const getContactsSuccess = createAction('phonebook/getContactsSuccess');
export const getContactsError = createAction('phonebook/getContactsError');

export const addContactsRequest = createAction('phonebook/addContactsRequest');
export const addContactsSuccess = createAction('phonebook/addContactsSuccess');
export const addContactsError = createAction('phonebook/addContactsError');

export const deleteContactsRequest = createAction(
  'phonebook/deleteContactsRequest',
);
export const deleteContactsSuccess = createAction(
  'phonebook/deleteContactsSuccess',
);
export const deleteContactsError = createAction(
  'phonebook/deleteContactsError',
);

export const filterContacts = createAction('phonebook/filterContacts');
