// import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateContact } from "../redux/contactSlice";

function UpdateContact() {
  const location = useLocation();
  const { id } = location.state;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();

  const contacts = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
    const user = contacts.find((u) => u.id === id);
    setName(user.name);
    setEmail(user.email);
    setContact(user.phone);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    // DUMMY FOR CREATING THE CONTACT USING THE API
    // ++++++++++++++++++++++++++++++++++++++++++++++
    //     axios
    //       .put("https://crud-mern-redux-toolkit.onrender.com/update/" + id, {
    //         name,
    //         email,
    //         contact,
    //       })
    //       .then((res) => {
    //         dispatch(updateUser({ id, name, email, age }));
    //         navigate("/");
    //       })
    //       .catch((err) => console.log(err));
    dispatch(updateContact({ id, name, email, contact }));
    navigate("/");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/4 h-1/2 p-3 border rounded-2xl border-green-400">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col items-center px-0 py-5"
        >
          <h2 className="text-2xl mb-2">Update User</h2>
          <div className="mb-2 form-control w-full max-w-xs">
            <label htmlFor="" className="label label-text">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input w-full max-w-xs border-green-400	"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              value={email}
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
              value={contact}
            />
          </div>
          <button className="btn btn-success mt-8">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateContact;
