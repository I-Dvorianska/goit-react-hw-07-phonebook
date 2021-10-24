import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllContacts } from "../contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchAllContacts();
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
