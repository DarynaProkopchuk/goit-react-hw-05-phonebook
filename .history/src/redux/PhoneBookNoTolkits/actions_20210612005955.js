import { v4 as uuid } from 'uuid';
import types from './types';

export const addContact = ({ name, phone }) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: uuid(),
    name,
    phone,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});

export const filterContacts = value => ({
  type: types.FILTER_CONTACTS,
  payload: value,
});
