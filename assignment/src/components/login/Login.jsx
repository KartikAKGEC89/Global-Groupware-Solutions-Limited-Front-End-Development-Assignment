import React, { useState } from 'react';
import { loginUser } from '../../api/Apicalls';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      toast.success('Login Successful!', { position: 'top-center' });
      navigate('/users?page=1');
    } catch (err) {
      toast.error('Invalid email or password!', { position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap w-full min-h-screen">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="/" className="p-4 text-xl font-bold text-white bg-black">
            Global Groupware Solutions Limited
          </a>
        </div>
        <div className="flex flex-col justify-center px-8 my-auto md:justify-start md:px-24 lg:px-32">
          <h2 className="text-3xl font-extrabold text-center text-gray-800">Welcome Back!</h2>
          <form onSubmit={handleLogin} className="flex flex-col pt-6 md:pt-8">

            <div className="flex flex-col pt-4">
              <div className="flex relative">
                <span className="inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm">
                  <Mail size={16} />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col pt-4 mb-6">
              <div className="flex relative">
                <span className="inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm">
                  <Lock size={16} />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>

          <div className="pt-6 text-center">
            <p>
              Don't have an account?{' '}
              <a href="/" className="font-semibold underline">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 shadow-2xl">
        <img
          className="hidden object-cover w-full h-screen md:block"
          src="https://www.atsi.in/images//inner/emp-payroll.png"
          alt="Background"
        />
      </div>
    </div>
  );
}

export default Login;