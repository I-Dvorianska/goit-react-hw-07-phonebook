import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const visibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    if (filter !== "") {
      if (contacts !== []) {
        return contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter)
        );
      }
    } else {
      return contacts;
    }
  }
);
