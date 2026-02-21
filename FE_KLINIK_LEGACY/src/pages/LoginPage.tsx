import React, { useState } from 'react';
import { PlusIcon, UserIcon, LockIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import axios, { AxiosError }  from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../pages/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
    const [error, setError] = useState('');

const { login } = useAuth();

interface PostData {
  email: string;
  password: string;
}

interface PostResponse {
    message: string;
    access_token: string;
    token_type: string;
    user: {
      id: string;
      nama: string;
      email: string;
      role: string;
    }
}


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newPost: PostData = { email, password };
    // const API_URL = "http://127.0.0.1:8000/api/login"; 
        const API_URL = import.meta.env.VITE_PROJECT_URL + 'api/login'; 

     try {
      const response = await axios.post<PostResponse>(API_URL, newPost);
      console.log('response: ',response.data)

      login(response.data.access_token, 
       { 
        id: response.data.user.id,
        nama: response.data.user.nama, 
        email: response.data.user.email,
        role: response.data.user.role 
      }
    );

      setMessage(response.data.message);
      // setToken(response.data.access_token);
      // localStorage.setItem('token', token);
      // localStorage.setItem('token', response.data.access_token);
      setError('');
      navigate('/dashboard', { replace: true });
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(`Error post: ${axiosError.message}`);
      setMessage('');
    }


    setTimeout(() => {
      setIsLoading(false);

    }, 1000);
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg" noPadding>
        {/* Header with Gradient */}
        <div className="bg-gradient-to-b from-[#E0F2FE] to-white p-8 pb-4 text-center border-b border-gray-100">
          <div className="mx-auto bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4 border border-blue-100">
            <PlusIcon className="w-8 h-8 text-[#0066CC]" strokeWidth={3} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            HealthCare System
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            {/* Masuk untuk mengakses dashboard */}
            { message && <span className="block mt-1 text-green-600">{message} </span> }
             { error && <span className="block mt-1 text-red-600">{error} </span> }
          </p>
        </div>

        {/* Login Form */}
        <div className="p-8 pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
              type="text"
              placeholder="Masukkan email anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<UserIcon className="w-5 h-5" />}
              required />


            <Input
              label="Password"
              type="password"
              placeholder="Masukkan password anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<LockIcon className="w-5 h-5" />}
              required />


            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-[#0066CC] focus:ring-[#0066CC]" />

                Ingat saya
              </label>
              <a
                href="#"
                className="text-[#0066CC] hover:text-[#0052a3] font-medium">

                Lupa password?
              </a>
            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              isLoading={isLoading}
              className="mt-2">

              Masuk
            </Button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-400">
            &copy; 2024 HealthCare System. Hak cipta dilindungi.
          </div>
        </div>
      </Card>
    </div>);

}