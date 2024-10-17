import React, { useContext } from 'react'
import { useState } from 'react';
import { PlayerContext } from '../Context/PlayerContext';
import { assets } from '../assets/frontend-assets/assets.js';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setShowLogin } = useContext(PlayerContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login submission logic
        console.log('Logging in with:', { email, password });
    };
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
                <div className="w-full max-w-md p-6 bg-black rounded-lg shadow-md">
                    <div className='flex gap-2'>
                        <img className='w-8 h-8' src={assets.logo_small} alt="" />
                        <h2 className="text-2xl font-bold text-center text-white mb-6">Login to Spotify</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white" htmlFor="email">
                                Email or username
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-black border rounded-lg focus:outline-none focus:ring-2 hover:text-white focus:ring-green-500 focus:border-transparent"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-white" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-black border rounded-lg focus:outline-none focus:ring-2 hover:text-white focus:ring-green-500 focus:border-transparent"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className='flex gap-2'>
                            <button
                                type="submit"
                                className="font-semibold w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowLogin(false)}
                                className="font-semibold w-full px-4 py-2 text-black bg-white rounded-lg hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            >
                                Close
                            </button>
                        </div>
                        <p className='text-white underline mt-5 text-center'>Forgot yours Password?</p>
                        <div className='flex gap-1 items-center justify-center'>
                            <p className='text-gray-500 mt-5'>Don't have an account?</p>
                            <p className='text-white underline mt-5'>Sign up for Spotify</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
