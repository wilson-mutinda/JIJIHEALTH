'use client'
import { createUser } from '@/api/utils';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const UserPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const router = useRouter();

    // function to handle submission, then create a user
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        try {
            await createUser(
                firstName,
                lastName,
                userName,
                email,
                password,
                confirmPassword,
            );
            alert('User created successfully');

            handleClear();
            router.push('/Login');

        } catch (error) {
            console.error("Error creating a user", error);
            throw error;
        }
    };

    // Function to handle clear
    const handleClear = () => {
        setFirstName('');
        setLastName('');
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-500">
            <form onSubmit={handleSubmit} className="bg-blue-800 shadow-lg rounded-lg p-8 w-96">
                
                {/* Logo */}
                <div className="relative">
                    <h2 className="text-white font-bold text-center mb-6">
                        <img src='https://damusasa.jiji.health/img/damusasa_logo.d9d02f92.svg' alt='Damusasa Logo' className='inline-block h-20 mx-2'/>
                    </h2>
                </div>

                {/* Welcome Message */}
                <div className="flex flex-col text-white font-semibold text-center pb-6">
                    <h2>Welcome to damu sasa,</h2>
                    <h3>Advancing <span className='text-yellow-500'>Healthcare</span> Tech!</h3>
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="first_name" className="block font-semibold text-white">First Name</label>
                        <input
                            type="text" 
                            name="first_name" 
                            placeholder="John" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="last_name" className="block font-semibold text-white">Last Name</label>
                        <input
                            type="text" 
                            name="last_name" 
                            placeholder="Doe" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Username & Email */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="username" className="block font-semibold text-white">Username</label>
                        <input
                            type="text" 
                            name="username" 
                            placeholder="johndoe" 
                            value={userName} 
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block font-semibold text-white">Email</label>
                        <input
                            type="email" 
                            name="email" 
                            placeholder="johndoe@gmail.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Password & Confirm Password */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label htmlFor="password" className="block font-semibold text-white">Password</label>
                        <input
                            type="password" 
                            name="password" 
                            placeholder="Your password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block font-semibold text-white">Confirm Password</label>
                        <input
                            type="password" 
                            name="confirmPassword" 
                            placeholder="Confirm Password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Submit & Clear Buttons */}
                <div className="flex p-2 gap-2">
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold hover:text-black"
                    >
                        Save
                    </button>
                    <button
                        type='button' 
                        onClick={handleClear} 
                        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold hover:text-black"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserPage;
