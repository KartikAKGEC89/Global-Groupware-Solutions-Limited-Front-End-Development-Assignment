import React, { useState } from 'react';
import { updateUser } from '../../api/Apicalls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserModal({ user, onClose, onUpdate }) {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

const handleUpdate = async (e) => {
  e.preventDefault();

  
  const updatedData = {
    name: firstName + ' ' + lastName,  
    job: user.id                          
  };

  console.log("Payload being sent:", updatedData);

  try {
    const result = await updateUser(user.id, updatedData);

    toast.success("User updated successfully!", {
      position: "top-center",
    });
    onUpdate(user.id, result); 
    onClose(); 
  } catch (error) {
    toast.error("Failed to update user. Please try again.");
  }
};



  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <div className="p-4 border-t-2 border-indigo-400 rounded-t-lg bg-gray-100">
          <div className="flex items-center space-x-4">
            <img
              alt="profile"
              src={user.avatar || '/images/person/default.jpg'}
              className="object-cover rounded-full h-16 w-16"
            />
            <h1 className="text-gray-800 text-xl font-semibold">{`${firstName} ${lastName}`}</h1>
          </div>
        </div>

        <form className="space-y-6 bg-white" onSubmit={handleUpdate}>
          <div className="p-4 space-y-4 text-gray-600">
            <div className="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
              <label className="w-full md:w-1/3 font-medium">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full md:w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
              <label className="w-full md:w-1/3 font-medium">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full md:w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
              <label className="w-full md:w-1/3 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 p-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserModal;
