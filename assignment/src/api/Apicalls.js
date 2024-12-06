import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reqres.in/api', 
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000, 
});


export const fetchUsers = async (page) => {
  try {
    const response = await apiClient.get('/users', { params: { page } });
    console.log('Fetched users:', response.data);
    return response.data;
  } catch (error) {
    handleError(error, `Failed to fetch users on page ${page}`);
  }
};


export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post('/login', { email, password });
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    handleError(error, 'Login failed');
  }
};


export const fetchUserDetails = async (id) => {
  try {
    const response = await apiClient.get(`/users/${id}`);
    console.log(`Fetched user details for ID ${id}:`, response.data);
    return response.data;
  } catch (error) {
    handleError(error, `Failed to fetch user details for user ID ${id}`);
  }
};


export const updateUser = async (id, userData) => {
  try {
    console.log(`Updating user with ID ${id}...`);
    console.log("Payload being sent:", userData);

    const response = await apiClient.put(`/users/${id}`, userData);
    console.log(`Updated user details for ID ${id}:`, response.data);

    return response.data;
  } catch (error) {
    handleError(error, `Failed to update user with ID ${id}`);
  }
};



export const deleteUser = async (id) => {
  try {
    const response = await apiClient.delete(`/users/${id}`);
    console.log(`Deleted user with ID ${id}:`, response.data);
    return response.data;
  } catch (error) {
    handleError(error, `Failed to delete user with ID ${id}`);
  }
};


const handleError = (error, defaultMessage) => {
  if (error.response) {
    
    console.error('Server Error:', error.response.data);
    throw new Error(error.response.data.error || defaultMessage);
  } else if (error.request) {
    
    console.error('No response received:', error.request);
    throw new Error('No response from the server. Check your network.');
  } else {
    
    console.error('Unexpected Error:', error.message);
    throw new Error(defaultMessage);
  }
};
