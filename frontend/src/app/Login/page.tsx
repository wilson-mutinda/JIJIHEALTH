'use client'

import { loginUSer } from '@/api/utils';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>( null )

    const router = useRouter();


    // Function to clear inputs
    const handleClear = () => {
        setEmail('');
        setPassword('');
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        setError(null); // No error message is shown when the page mounts

        try {
            const response = await loginUSer(email, password);
    
            // Save token and redirect
            if (response.token) {
                localStorage.setItem('token', response.token);
                alert("Login successful!")
                router.push('/')
            } else {
                setError('Invalid Email or Password!');
                handleClear();
            }
        } catch (error) {
            console.error("Login Error", error)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-500">
            <form onSubmit={handleSubmit} className="bg-blue-800 shadow-lg rounded-lg p-8 w-96">
                <div className="relative">
                    <h2 className="text-white font-bold text-center mb-6">
                        <img src='https://damusasa.jiji.health/img/damusasa_logo.d9d02f92.svg' alt='Damusasa Logo' className='inline-block h-20 mx-2'/>
                    </h2>
                </div>
                <div className="flex flex-col text-white font-semibold text-center pb-6">
                    <h2>Welcome to damu sasa,</h2>
                    <h3>Advancing <span className='text-yellow-500'>Healthcare</span> Tech!</h3>
                </div>

                {/* Error message */}
                {error && <p className='text-sm text-red-500 text-center'>{error}</p>}

                {/* Email */}
                <label htmlFor="email" className="block font-semibold text-white">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="johndoe@gmail.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                {/* Password */}
                <label htmlFor="password" className="block font-semibold text-white">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                {/* Buttons */}
                <div className="flex p-2 gap-2">
                    <button 
                        type="submit" 
                        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold hover:text-black">
                        Login
                    </button>
                    <button 
                        type="button" 
                        onClick={handleClear} 
                        className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition duration-300 font-semibold">
                        Clear
                    </button>
                </div>
                <div className="flex flex-col space-y-2 text-center font-semibold">
                    <a href="" className='text-white'>Forgot your password?</a>
                    <a href="" className='text-white'>Terms and Conditions</a>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;



