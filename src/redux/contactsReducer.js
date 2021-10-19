import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, getFilterName } from "./actions";

const itemReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) => {
    return state.filter((contact) => {
      return contact.id !== action.payload;
    });
  },
});
const filterReducer = createReducer("", {
  [getFilterName]: (state, action) => (state = action.payload),
});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactsReducer;
