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
            <div className='grid place-items-center'>
                <div className="absolute  top-0 w-full max-w-md p-6 bg-gradient-to-b from-black to-gray-900 rounded-lg shadow-md">
                    <button onClick={() => setShowLogin(false)} class="absolute top-3 right-2 text-gray-500 hover:text-gray-700 font-bold focus:outline-none" aria-label="Close">
                        &times;
                    </button>
                    <div className='flex gap-2'>
                        <img className='w-8 h-8' src={assets.logo_small} alt="" />
                        <h2 className="text-2xl font-bold text-center text-white mb-3">Login to Spotify</h2>
                    </div>
                    <div className='text-white font-bold'>
                        <div className='gap-5'>
                            <p className='flex gap-5 justify-center border mx-2 py-2 rounded-3xl my-3'><img src={assets.Google_search} className='w-5 h-5 mr-3' alt="" />Continue With Google</p>
                        </div>
                        <div className='gap-5'>
                            <p className='flex gap-5 justify-center border mx-2 py-2 rounded-3xl my-3'><img src={assets.Facebook} className='w-5 h-5' alt="" />Continue With FaceBook</p>
                        </div>
                        <div className='gap-5'>
                            <p className='flex gap-5 justify-center border mx-2 py-2 rounded-3xl my-3'><img src={assets.apple} className='w-6 h-6' alt="" />Continue With Apple</p>
                        </div>
                        <div className='gap-5'>
                            <p className='flex gap-5 justify-center border mx-2 py-2 rounded-3xl my-3'>Continue With Phone Number</p>
                        </div>
                    </div>
                    <hr className='my-4' />

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
                                className="font-semibold w-full px-4 py-2 mx-5 text-white bg-green-600 rounded-xl hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            >
                                Login
                            </button>
                        </div>
                        <p className='text-white underline mt-3 text-center'>Forgot yours Password?</p>
                        <div className='flex gap-1 items-center justify-center'>
                            <p className='text-gray-500 mt-3'>Don't have an account?</p>
                            <p className='text-white underline mt-3'>Sign up for Spotify</p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
