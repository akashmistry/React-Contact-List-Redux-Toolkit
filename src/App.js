import "./App.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getContact } from "./redux/contactSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import CreateContact from "./components/CreateContact";
import UpdataContact from "./components/UpdataContact";

const App = () => {
  const dispatch = useDispatch();

  // FETCH THE DATA THE DISPATCH IT INTO STORE
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        dispatch(getContact(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/update" element={<UpdataContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
