import React, { useEffect, useState } from 'react';
import logo from "../assets/logo-black-updated.png";
import gitHub from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import discordgray from "../assets/discordGray.png";
import twittergray from "../assets/twitterGray.png";
import linkedingray from "../assets/linkedinGray.png";
import githubgray from "../assets/linkedinGray.png"
import apple from "../assets/apple.png";
import google from "../assets/googleIcon.png";
import SideMenuUpload from './SideMenuUpload';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [clipPath, setClipPathStyle] = useState()

    const handleSignIn = (event) => {
        event.preventDefault();

        if (email === 'admin' && password === 'admin') {

            localStorage.setItem('loggedIn', true);

            setLoggedIn(true);
        } else {
            setError('Invalid username or password');
        }
    };


    useEffect(() => {
        const updateClipPath = () => {
            if (window.innerWidth > 500) {
                setClipPathStyle('polygon(80% 100%, 0 100%, 0 0, 100% 0)');
            } else {
                setClipPathStyle('none');
            }
        };

        updateClipPath();

        window.addEventListener('resize', updateClipPath);

        return () => window.removeEventListener('resize', updateClipPath);
    }, []);
    return (
        <div className='h-screen flex flex-col w-full'>
            {loggedIn ? (
                <SideMenuUpload />
            ) : (
                <div className="flex flex-col sm:flex-row">
                    <div className='bg-[#605BFF] w-[100%] sm:w-1/2 flex flex-col h-[50px] sm:h-screen' style={{ clipPath: window.innerWidth > 500 ? 'polygon(80% 100%, 0 100%, 0 0, 100% 0)' : 'none' }}>

                        {/* <div className='bg-[#605BFF] w-[100%] sm:w-1/2 flex flex-col h-[50px] sm:h-screen' style={{ clipPath: clipPathStyle }}> */}

                        <div className='flex justify-between items-center p-4'>
                            <div className='hidden sm:block'>
                                <img src={logo} alt="Logo" width={80} />
                            </div>
                            <div className='block sm:hidden flex flex-row justify-center items-center'>
                                <img src={logo} alt="Logo" width={30} className='block sm:hidden' />
                                <p className='text-2xl font-semibold text-[#ffffff] pl-3 text-center'>Base</p>
                            </div>
                        </div>
                        <div className='flex-grow p-4 sm:flex items-center justify-center'>
                            <p className='text-white text-7xl font-bold hidden sm:block' style={{ fontFamily: "Montserrat" }}>
                                BASE
                            </p>
                        </div>
                        <div className='flex justify-center items-center pb-[70px]'>
                            <div className='flex justify-center gap-[38px]'>
                                <img src={gitHub} alt="GitHub" width={40} />
                                <img src={twitter} alt="Twitter" width={40} />
                                <img src={linkedin} alt="LinkedIn" width={40} />
                                <img src={discord} alt="Discord" width={40} />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F8FAFF] w-full sm:w-1/2 sm:flex items-center sm:justify-center hidden sm:block'>
                        <div className='text-left w-[65%]'>
                            <p className='font-bold text-2xl sm:text-4xl'>Sign In</p>
                            <p className='text-base font-normal text-[#000000] pt-5 pb-[27px]'>Sign in to your account</p>
                            <div className='flex justify-center'>
                                <button type='button' className='bg-[#ffffff] text-[#858585] text-xs px-4 py-2 
                                rounded mr-6 flex items-center'>
                                    <img src={google} width={12} className="mr-2" alt="google-icon" />
                                    <span className='text-sm'>Sign in with Google</span>
                                </button>

                                <div>
                                    <button type='button' className='bg-[#ffffff] text-[#858585] text-xs px-4 py-2 
                                    rounded flex items-center'>
                                        <img src={apple} width={18} className="mr-1" alt="apple-icon" />
                                        <span className='pl-2 text-sm'>Sign in with Apple</span>
                                    </button>
                                </div>
                            </div>
                            <form onSubmit={handleSignIn}>
                                <div className="text-red-500 mb-4">
                                    {error}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600 text-sm font-medium mb-2 pt-[32px]"
                                        htmlFor="email">Email address</label>
                                    <input
                                        type="text"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full border p-2 rounded focus:outline-none bg-[#F5F5F5]"
                                        placeholder="johndoe@example.com"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full border p-2 rounded focus:outline-none bg-[#F5F5F5]"
                                        placeholder="password"
                                    />
                                </div>
                                <div className='w-full pt-21'>
                                    <button type='submit' className='bg-[#346BD4] text-[#ffffff] text-base font-bold w-full focus:outline-none border py-2.5 rounded-lg'>
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            )
            }
            {
                !loggedIn && (
                    <div className='sm:bg-[#F8FAFF] w-full items-center justify-center block sm:hidden'>
                        <div>
                            <p className='font-bold text-2xl sm:text-4xl text-left pt-[20px] pl-[28px]'>Sign In</p>
                            <p className='text-base font-normal text-[#000000] pt-[5px] pb-[20px] text-left pl-[28px]'>Sign in to your account</p>
                            <div className='flex justify-center'>
                                <button type='button' className='bg-[#ffffff] text-[#858585] text-xs px-4 py-2 rounded mr-6 flex items-center'>
                                    <img src={google} width={12} className="mr-2" alt="google-icon" />
                                    <span className='text-sm'>Sign in with Google</span>
                                </button>

                                <div>
                                    <button type='button' className='bg-[#ffffff] text-[#858585] text-xs px-4 py-2 rounded flex items-center'>
                                        <img src={apple} width={18} className="mr-1" alt="apple-icon" />
                                        <span className='pl-2 text-sm'>Sign in with Apple</span>
                                    </button>
                                </div>
                            </div>
                            <div className='mt-8 rounded-[20px] px-6 py-4 mx-auto w-[80%]'>
                                <form onSubmit={handleSignIn}>
                                    <div className="text-red-500 mb-4">
                                        {error}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">Email address</label>
                                        <input
                                            type="text"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full border p-2 rounded focus:outline-none bg-[#F5F5F5]"
                                            placeholder="johndoe@example.com"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full border p-2 rounded focus:outline-none bg-[#F5F5F5]"
                                            placeholder="password"
                                        />
                                    </div>
                                    <div className='w-full pt-[10px]'>
                                        <button type='submit' className='bg-[#346BD4] text-[#ffffff] text-base font-bold w-full focus:outline-none border py-2.5 rounded-lg'>
                                            Sign In
                                        </button>
                                    </div>
                                    <div className='flex  justify-center mt-[10px]'>
                                        <p className='text-[#858585] text-base pl-[2px]'>
                                            Don’t have an account? </p>


                                    </div>
                                    <div className='flex justify-center pt-1' mb-2>
                                        <button type='link' className='text-[#346BD4]'

                                        >
                                            Register here
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='flex justify-center items-center  block sm:hidden '>
                                <div className='flex justify-center gap-[38px] mb-2 '>
                                    <img src={githubgray} alt="GitHub" width={40} className='text-green-500' />
                                    <img src={twittergray} alt="Twitter" width={40} />
                                    <img src={linkedingray} alt="LinkedIn" width={40} />
                                    <img src={discordgray} alt="Discord" width={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default Login;
