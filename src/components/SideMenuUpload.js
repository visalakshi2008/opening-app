import React, { useState } from 'react'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Uploading from './Uploading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from "../assets/profile.png"
import logo from "../assets/logo.jpg"
import navIcon from "../assets/navIcon.png"
import dashboards from "../assets/dashboards.png"
import notification from "../assets/notification.png"
import invoice from "../assets/invoice.png"
import setting from "../assets/settings.png"
import schedule from "../assets/schedule.png"
import upload from "../assets/uploadIcons.png"
import calendar from "../assets/calendar.png"
import logout from "../assets/logout.png"
const SideMenuUpload = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const handleLogout = () => {
        localStorage.setItem('loggedIn', false);
        window.location.reload();
    };
    return (
        <>
            <div className='w-full block sm:h-screen  sm:flex  '>
                <div className='w-full  sm:w-[18%]  p-4 h-[80px] sm:h-screen  bg-[#f5f5f5]'>
                    <div className="container mx-auto flex items-center justify-between">
                    </div>
                    <div className='pb-[30px]'>
                        <ol className=' flex justify-between  '>
                            <div className=' flex gap-4 items-center '>
                                <div>
                                    <div className={`fixed inset-0 overflow-hidden z-50 bg-gray-800 bg-opacity-50 transition-opacity 
                                    duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                                        <div className="absolute inset-y-0 left-0 w-64 bg-white shadow-lg pt-[30px] ">
                                            <button className="absolute  right-4" onClick={toggleDrawer}>
                                                <FontAwesomeIcon icon={faTimes} className="text-gray-600 text-3xl" />
                                            </button>
                                            <div className=' flex gap-3 pl-3 top-4'>
                                                <p className='text-xl font-semibold text-[#000000]'>Base</p></div>
                                            <div className='flex flex-col gap-4 items-center p-4'>
                                                <ul className="space-y-2 font-medium pt-8">
                                                    <li className='pb-2'>
                                                        <button className="flex  items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                                                            <img src={dashboards} width={20} alt="dashboard" />
                                                            <span className="ms-3 text-[#9A9AA9] font-semibold">Dashboard</span>
                                                        </button>
                                                    </li>
                                                    <li className='pb-2'>
                                                        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                                                            <img src={upload} width={20} alt="upload" />
                                                            <span className="ms-3 text-[#9A9AA9] font-semibold">Upload</span>
                                                        </button>
                                                    </li>
                                                    <li className='pb-2'>
                                                        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                                                            <img src={invoice} width={20} alt="invoice" />
                                                            <span className="ms-3 text-[#9A9AA9] font-semibold">Invoice</span>
                                                        </button>
                                                    </li>
                                                    <li className='pb-2'>
                                                        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                                                            <img src={schedule} width={20} alt="schedule" />
                                                            <span className="ms-3 text-[#9A9AA9] font-semibold">Schedule</span>
                                                        </button>
                                                    </li>
                                                    <li className='pb-2'>
                                                        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                                                            <img src={calendar} width={20} alt="calendar" />
                                                            <span className="ms-3 text-[#9A9AA9] font-semibold">Calendar</span>
                                                        </button>
                                                    </li>
                                                    <li className='pb-2'>
                                                        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                                                            <img src={notification} width={20} alt="notification" />
                                                            <span className="ms-3 text-[#9A9AA9] font-semibold">Notifications</span>
                                                        </button>
                                                    </li>
                                                    <li className='pb-2'>
                                                        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                                                            <img src={setting} width={20} alt="setting" />
                                                            <span className="ms-3 text-[#9A9AA9] font-semibold">Settings</span>
                                                        </button>
                                                    </li>
                                                    <li className='pb-2'>
                                                        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group" onClick={handleLogout}>
                                                            <img src={logout} width={20} alt="logout" />
                                                            <span className="ms-3 text-[#9A9AA9] font-semibold">Logout</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <li>
                                    <img src={navIcon} width={20} alt='menu' onClick={toggleDrawer} className='block sm:hidden' />
                                </li>
                                <li >
                                    <img src={logo} width={20} alt='menu' />
                                </li>


                                <p className='text-xl font-semibold text-[#000000]'>Base</p>

                            </div>
                            <div className=' flex  pr-3 gap-5 items-center block sm:hidden'>
                                <li><img src={notification} width={20} alt="Bell Icon" /></li>
                                <li><img src={profile} width={30} alt="Profile" /></li>
                            </div>
                        </ol>
                    </div>

                    <div className=" flex px-[50px] hidden  sm:block   ">

                        <ul className="space-y-2 font-medium pt-8">
                            <li className='pb-2'>
                                <button className="flex  items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <img src={dashboards} width={20} alt="dashboard" />
                                    <span className="ms-3 text-[#9A9AA9] font-semibold">Dashboard</span>
                                </button>
                            </li>
                            <li className='pb-2'>
                                <button className="flex   items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <img src={upload} width={20} alt="upload" />
                                    <span className="ms-3  text-[#9A9AA9] font-semibold">Upload</span>
                                </button>
                            </li>
                            <li className='pb-2'>
                                <button className="flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <img src={invoice} width={20} alt="invoice" />
                                    <span className="ms-3 text-[#9A9AA9] font-semibold">Invoice</span>
                                </button>
                            </li>
                            <li className='pb-2'>
                                <button className="flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <img src={schedule} width={20} alt="schedule" />
                                    <span className="ms-3 text-[#9A9AA9] font-semibold">Schedule</span>
                                </button>
                            </li>
                            <li className='pb-2'>
                                <button className="flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <img src={calendar} width={20} alt="calendar" />
                                    <span className="ms-3 text-[#9A9AA9] font-semibold">Calendar</span>
                                </button>
                            </li>
                            <li className='pb-2'>
                                <button className="flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <img src={notification} width={20} alt="notification" />
                                    <span className="ms-3 text-[#9A9AA9] font-semibold">Notifications</span>
                                </button>
                            </li>
                            <li className='pb-2'>
                                <button className="flex items-center p-2 text-gray-900  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <img src={setting} width={20} alt="setting" />
                                    <span className="ms-3 text-[#9A9AA9] font-semibold">Settings</span>
                                </button>
                            </li>
                            <li className='pb-2'>
                                <button className="flex items-center  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={handleLogout}>
                                    <img src={logout} width={20} alt="logout" />
                                    <span className="ms-3 text-[#9A9AA9] font-semibold">Logout</span>
                                </button>
                            </li>
                        </ul>
                    </div >
                </div >
                <div className='bg-[#fafafb] w-full sm:w-[84%] sm:overflow-y-auto  overflow-auto-x-auto'>
                    <Uploading />
                </div>


            </div >
        </>
    )
}

export default SideMenuUpload