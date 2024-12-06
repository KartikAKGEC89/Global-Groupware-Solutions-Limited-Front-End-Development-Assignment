import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/Apicalls';
import UserCard from './UserCard';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function UserList() {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState(''); 

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers(currentPage);
      setUsers(data.data);
      setTotalPages(data.total_pages);
    };
    getUsers();
  }, [currentPage]);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  const filteredUsers = users.filter(user => 
    user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedUsers = filteredUsers.slice(0, 6);

  const handleLogout = () => {
    localStorage.clear();
  };

  const handleNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  return (
    <div className="min-h-screen p-8 bg-white text-black">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-semibold text-black mb-8 bg-white p-6 rounded-md shadow-md">
          EmployWise Assignment
        </h2>

        <div className="absolute top-6 right-6 w-64 flex">
          <button 
            onClick={handleLogout} 
            className="p-3 bg-black text-white rounded-lg shadow-md hover:bg-black-800 transition duration-200"
          >
          <a href='/'>Logout</a>
        </button>
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border-2 border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {displayedUsers.map((user) => (
            <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">

          <button 
            onClick={handlePrev} 
            disabled={currentPage === 1} 
            className={`p-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-black'} text-white rounded-full disabled:bg-gray-300 transition duration-200 ease-in-out hover:bg-gray-800`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <span className="text-lg text-black">
            {`Page ${currentPage} of ${totalPages}`}
          </span>

          <button 
            onClick={handleNext} 
            disabled={currentPage === totalPages} 
            className={`p-2 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-black'} text-white rounded-full disabled:bg-gray-300 transition duration-200 ease-in-out hover:bg-gray-800`}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserList;