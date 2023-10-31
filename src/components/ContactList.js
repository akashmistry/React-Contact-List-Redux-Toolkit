// import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../redux/contactSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // DUMMY FOR DELETING THE CONTACT FROM THE API
    // ++++++++++++++++++++++++++++++++++++++++++++++
    // axios
    //   .delete("https://jsonplaceholder.typicode.com/users" + id)
    //   .then((res) => {
    //     dispatch(deleteContact({ id }));
    //   })
    //   .catch();
    dispatch(deleteContact({ id }));
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/2 p-3 border rounded-2xl border-green-400">
        <div className="flex justify-center">
          <Link to="/create" className="btn btn-success btn-sm mb-2 w-1/6">
            Add +
          </Link>
        </div>
        <table className="table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, id) => {
              return (
                <tr key={contact.id} className="hover">
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <Link
                      to="/update"
                      state={{ id: contact.id }}
                      className="btn btn-sm btn-success me-2 "
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="btn btn-sm btn-outline btn-error "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
