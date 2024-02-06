import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faGoogle } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from 'react-router-dom';

const Login = () => {


    return (
        <div className='h-screen flex flex-col w-full'>
            <div className='flex w-full'>
                <div className='bg-[#605BFF] w-[100%] sm:w-1/2 flex flex-col  h-[50px] sm:h-screen  '>
                    <div className='flex-none flex justify-between items-center p-4 '>
                        <div className='hidden sm:block'>
                            <FontAwesomeIcon icon={faEye} className='text-white text-2xl hidden sm:block' />
                        </div>
                        {/* mobile heade icon and text */}
                        <div className='block sm:hidden flex justify-center text-center items-center '>
                            <FontAwesomeIcon icon={faEye} className='text-white text-2xl block sm:hidden' />
                            <p className='text-xl font-semibold text-[#ffffff] pl-3'>Base</p>
                        </div>
                    </div>
                    <div
                        className='flex-grow bg-[#605BFF] p-4 sm:flex items-center 
                         justify-center '>
                        <p className='text-white text-7xl font-bold hidden sm:block'
                            style={{ fontFamily: "Montserrat" }}
                        >
                            BASE
                        </p>
                    </div>
                    <div className='flex-none flex justify-between items-center p-4 '>
                        <div>
                            <FontAwesomeIcon icon={faEye} className='text-white text-2xl hidden sm:block' />
                        </div>
                    </div>
                </div>

                {/* for web form */}
                <div className=' bg-[#F8FAFF] w-full sm:w-1/2 sm:flex items-center sm:justify-center  hidden sm:block '>
                    <div className='text-left'>
                        <p className='font-bold text-2xl sm:text-4xl  '>Sign In</p>
                        <p className='text-base font-normal text-[#000000] pt-[5px] pb-[20px]'>Sign in to your account</p>
                        <div className='flex justify-normal'>
                            <button type='button' className='bg-[#ffffff] text-[#858585] text-xs  px-4 py-2 rounded'>
                                <FontAwesomeIcon icon={faEye} />
                                <span className='pl-2 text-sm sm:text-base'>Sign in with Google</span>
                            </button>
                            <div>
                                <button type='button' className='bg-[#ffffff] text-[#858585] text-xs px-4 py-2 rounded'>
                                    <FontAwesomeIcon icon={faEye} />
                                    <span className='pl-2'>Sign in with Apple</span>
                                </button>
                            </div>
                        </div>

                        <div className='mt-7 bg-[#ffffff] rounded-[20px] px-8 py-8'>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">Email address</label>
                                    <input
                                        type="text"
                                        id="email"
                                        className="w-full border p-2 rounded focus:outline-none bg-[#F5F5F5]"
                                        placeholder="johndoe@gmail.com"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full border p-2 rounded focus:outline-none bg-[#F5F5F5]"
                                        placeholder="password"
                                    />
                                </div>
                                <div>
                                    <button type='button' className='text-[#346BD4] text-base '>
                                        Forgot password?
                                    </button>
                                </div>
                                <div className='w-full pt-[21px]'>
                                    <button type='submit' className='bg-[#346BD4] text-[#ffffff]
                                    text-base font-bold w-full focus:outline-none border py-2.5 rounded-lg	'>
                                        Sign In
                                    </button>
                                </div>

                                <div className='flex  justify-center mt-[54px]'>
                                    <p className='text-[#858585] text-base pl-[2]'>Don’t have an account? </p>
                                    <button type='link' className='text-[#346BD4]'
                                    // onClick={handleSignIn}
                                    >
                                        Register here</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div >
            {/* for mobile form */}
            <div className='bg-red-500 sm:bg-[#F8FAFF] w-full   items-center justify-center  block sm:hidden'>
                <div >
                    <p className='font-bold text-2xl sm:text-4xl  text-center pt-2'>Sign In</p>
                    <p className='text-base font-normal text-[#000000] pt-[5px] pb-[20px] text-center'>
                        Sign in to your account</p>
                    <div className='flex justify-center '>
                        <button type='button' className='bg-[#ffffff] text-[#858585] text-xs  px-4 py-2 rounded mr-6'>
                            <FontAwesomeIcon icon={faEye} />
                            <span className='pl-2 text-sm '>
                                Sign in with Google</span>
                        </button>
                        <div>
                            <button type='button' className='bg-[#ffffff] text-[#858585] text-xs px-4 py-2 rounded'>
                                <FontAwesomeIcon icon={faEye} />
                                <span className='pl-2 text-sm '>
                                    Sign in with Apple</span>
                            </button>
                        </div>
                    </div>

                    <div className='mt-10 bg-[green] rounded-[20px] px-6 py-4 mx-auto w-[80%] '>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">Email address</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="w-full border p-2 rounded focus:outline-none bg-[#F5F5F5]"
                                    placeholder="johndoe@gmail.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full border p-2 rounded focus:outline-none bg-[#F5F5F5]"
                                    placeholder="password"
                                />
                            </div>
                            <div>
                                <button type='button' className='text-[#346BD4] text-base '>
                                    Forgot password?
                                </button>
                            </div>
                            <div className='w-full pt-[21px]'>
                                <button type='submit' className='bg-[#346BD4] text-[#ffffff]
                                    text-base font-bold w-full focus:outline-none border py-2.5 rounded-lg	'>
                                    Sign In
                                </button>
                            </div>

                            <div className='flex  justify-center mt-[54px]'>
                                <p className='text-[#858585] text-base pl-[2]'>Don’t have an account? </p>
                                <button type='link' className='text-[#346BD4]'
                                // onClick={handleSignIn}
                                >
                                    Register here</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Login;
