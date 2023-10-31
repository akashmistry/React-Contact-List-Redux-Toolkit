import axios from "axios";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../redux/contactSlice";

const CreateContact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // DUMMY FOR CREATING THE CONTACT USING THE API
    // ++++++++++++++++++++++++++++++++++++++++++++++
    //     axios
    //       .post("https://jsonplaceholder.typicode.com/users", {
    //         name,
    //         email,
    //         contact,
    //       })
    //       .then((res) => {
    //         const data = {
    //           id: res.data._id,
    //           name: res.data.name,
    //           email: res.data.email,
    //           age: res.data.age,
    //         };
    //         dispatch(addContact(data));
    //         navigate("/");
    //       })
    //       .catch((err) => console.log(err));
    const data = {
      id: parseInt(Math.random().toString().slice(2)),
      name: name,
      email: email,
      phone: contact,
    };
    dispatch(addContact(data));
    navigate("/");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/4 h-1/2 p-3 border rounded-2xl border-green-400">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center px-0 py-5"
        >
          <h2 className="text-2xl mb-2">Add Contact</h2>
          <div className="mb-2 form-control w-full max-w-xs">
            <label htmlFor="" className="label label-text">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input w-full max-w-xs border-green-400	"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2 form-control w-full max-w-xs">
            <label htmlFor="" className="label label-text">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input w-full max-w-xs border-green-400"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2 form-control w-full max-w-xs">
            <label htmlFor="" className="label label-text">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="Enter Contact Number"
              className="input w-full max-w-xs border-green-400"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <button className="btn btn-success mt-8">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
