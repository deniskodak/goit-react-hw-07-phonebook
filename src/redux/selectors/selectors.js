import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getFilter = state => state.contacts.filter;
export const getErrorMessage = state => state.contacts.error.message;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts;
  },
);
