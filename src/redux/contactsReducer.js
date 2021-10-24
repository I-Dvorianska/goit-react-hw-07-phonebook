import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, getFilterName } from "./actions";
import { fetchContacts } from "./contactsOperation";

const itemReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) => {
    return state.filter((contact) => {
      return contact.id !== action.payload;
    });
  },
});
const filterReducer = createReducer("", {
  [getFilterName]: (state, action) => (state = action.payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  isLoading,
});

export default contactsReducer;
