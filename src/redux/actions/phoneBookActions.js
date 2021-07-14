import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phonebook/addContact", addContactPrepareFn);

const deleteContact = createAction("phonebook/deleteContact");

const filterContacts = createAction("phonebook/filterContacts");

function addContactPrepareFn(name, phoneNum) {
  return {
    payload: {
      id: uuidv4(),
      name,
      phoneNum,
    },
  };
}

export { addContact, deleteContact, filterContacts };
