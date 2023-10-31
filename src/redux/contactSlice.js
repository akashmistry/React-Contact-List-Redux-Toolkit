import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    getContact: (state, action) => {
      state.contacts = action.payload.map((contact) => {
        return {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
        };
      });
    },
    deleteContact: (state, action) => {
      const id = action.payload.id;
      state.contacts = state.contacts.filter((index) => index.id !== id);
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action) => {
      const index = state.contacts.findIndex((x) => x.id === action.payload.id);
      state.contacts[index] = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.contact,
      };
    },
  },
});

export const { getContact, deleteContact, addContact, updateContact } =
  contactSlice.actions;
export default contactSlice.reducer;
