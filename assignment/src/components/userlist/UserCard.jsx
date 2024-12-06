import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { deleteUser, updateUser } from '../../api/Apicalls';
import UserEditModal from '../modal/UserModal';

function UserCard({ user, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      toast.success('User successfully deleted!', { position: 'top-center' });
      onDelete(id);
    } catch (error) {
      toast.error('Error deleting user.');
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateUser(id, updatedData);
      toast.success('User successfully updated!', { position: 'top-center' });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="flex justify-center w-full md:w-80 lg:w-96">
      <div className="w-full p-4">
        <div className="flex flex-col justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <div className="prod-title mb-4 text-center">
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="prod-img mb-6 flex justify-center">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="object-cover w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-200 shadow-md"
            />
          </div>

          <div className="prod-info mb-6 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none w-full sm:w-auto"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="px-6 py-2 text-sm sm:text-base font-medium text-white bg-red-500 hover:bg-red-600 rounded-full transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none w-full sm:w-auto"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <UserEditModal
          user={user}
          onClose={() => setIsEditing(false)}
          onUpdate={(updatedData) => handleUpdate(user.id, updatedData)}
        />
      )}
    </div>
  );
}

export default UserCard;