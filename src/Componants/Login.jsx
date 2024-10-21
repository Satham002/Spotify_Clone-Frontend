import React, { useContext } from 'react'
import { useState } from 'react';
import { PlayerContext } from '../Context/PlayerContext';
import { assets } from '../assets/frontend-assets/assets.js';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setShowLogin, loginPage, SetloginPage } = useContext(PlayerContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login submission logic
        console.log('Logging in with:', { email, password });
    };
    return (
        <>
            <div className='grid place-items-center'>
                <div className="absolute border border-white top-0 w-full max-w-md p-6 bg-gradient-to-b from-black to-gray-900 rounded-lg shadow-md">
                    <button onClick={() => setShowLogin(false)} class="absolute top-3 right-2 text-gray-500 hover:text-gray-700 font-bold focus:outline-none" aria-label="Close">
                        &times;
                    </button>
                    <div className='flex gap-2'>
                        <img className='w-8 h-8' src={assets.logo_small} alt="" />
                        <h2 className="text-2xl font-bold text-center text-white mb-3">{loginPage === "login" ? "Login to Spotify" : "Sign up to start listening"} </h2>
                    </div>
                    <div className='text-white font-bold'>
                        <div className='gap-5'>
                            <p className='flex gap-5 justify-center border mx-2 py-2 rounded-3xl my-3'><img src={assets.Google_search} className='w-5 h-5 mr-3' alt="" />Continue With Google</p>
                        </div>
                        <div className='gap-5'>
                            <p className='flex gap-5 justify-center border mx-2 py-2 rounded-3xl my-3'><img src={assets.Facebook} className='w-5 h-5' alt="" />Continue With Facebook</p>
                        </div>
                        <div className='gap-5'>
                            <p className='flex gap-5 justify-center border mx-2 py-2 rounded-3xl my-3'><img src={assets.apple} className='w-6 h-6' alt="" />Continue With Apple</p>
                        </div>
                        <div className='gap-5'>
                            <p className='flex gap-5 justify-center border mx-2 py-2 rounded-3xl my-3'>Continue With Phone Number</p>
                        </div>
                    </div>
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <p className="px-4 text-white">or</p>
                        <hr className="flex-grow border-t border-gray-300" />
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
                                className="font-semibold w-full px-4 py-2 mx-5 text-white bg-green-600 rounded-xl hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            >
                                Login
                            </button>
                        </div>
                        {loginPage === "login" ? (
                            <>
                                <p className='text-white mt-3 text-center cursor-pointer no-underline hover:text-green-600 '>Forgot yours Password?</p>
                                <div className='flex gap-1 items-center justify-center'>
                                    <p className='text-gray-500 mt-3 md:font-light'>Don't have an account? <span className='text-white mt-3 cursor-pointer no-underline hover:text-green-600' onClick={() => { SetloginPage("signup") }}>Sign up for Spotify</span></p>
                                </div>
                            </>
                        ) : <div className='flex gap-1 items-center justify-center'>
                            <p className='text-gray-500 mt-3 md:font-light'>Already have an account? <span className='text-white mt-3 cursor-pointer no-underline hover:text-green-600' onClick={() => { SetloginPage("login") }}>Sign up for Spotify</span></p>
                        </div>}


                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
