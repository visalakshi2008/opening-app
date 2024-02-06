import React, { useState } from 'react';
import bellIcon from "../assets/bellIcon.png";
import profile from "../assets/profile.png";
import menuIcon from "../assets/menuIcon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faSpinner, faGoogle } from "@fortawesome/free-solid-svg-icons";

const Uploading = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Handle the selected file
        console.log("Selected File:", file);
        setSelectedFile(file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
    };

    const handleUpload = () => {
        // Handle the file upload logic
        if (selectedFile) {
            console.log("Uploading file:", selectedFile);
            // Add your logic for file upload here
        } else {
            console.log("No file selected");
        }
    };

    return (
        <>
            <div className='flex justify-between items-center pt-12 px-[30px] pb-[137px] sm:w-ful'>
                <div>
                    <p className='text-2xl font-semibold text-[#000000] hidden sm:block '>Upload csv</p>
                </div>
                {/* mobile view header */}
                <div className='flex justify-between items-center text-center space-x-2 gap-3 hidden sm:flex'>
                    <img src={bellIcon} width={18} alt="Bell Icon" />
                    <img src={profile} width={30} alt="Profile" />
                </div>
            </div>

            <div className='flex justify-center items-center w-full'>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#FFFFFF] w-[90%]">
                    <label className="bg-white text-center rounded w-full sm:w-[360px] min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto font-[sans-serif] m-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mb-6 fill-gray-400" viewBox="0 0 24 24">
                            <path d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z" data-original="#000000" />
                            <path d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z" data-original="#000000" />
                        </svg>
                        {selectedFile ? (
                            <>
                                <p className="text-[#999CA0] font-normal text-sm">
                                    {selectedFile.name}
                                </p>
                                <button type="button" className="text-red-500 buttont-4 font-normal px-[20px] py-[5px] mt-[10px]" onClick={handleRemoveFile}>
                                    Remove
                                </button>
                            </>
                        ) : (
                            <p className="text-[#999CA0] font-semibold text-sm">
                                Drop your excel sheet here or <span className="text-[#007bff]">browse</span> to upload
                            </p>
                        )}
                        <input
                            type="file"
                            id='uploadFile1'
                            className="hidden"
                            accept=".xlsx, .xls"
                            onChange={handleFileChange}
                        />
                    </label>

                    <div className='bg-[#605BFF] flex justify-center mx-auto w-[90%] items-center py-4 px-10 mb-[20px] rounded-lg'>
                        <div className='flex justify-center pl-[20px] pr-[20px]'>
                            <button type='submit' className="flex cursor-pointer text-[#ffffff] items-center gap-3 font-semibold text-sm" onClick={handleUpload}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-gray-400" viewBox="0 0 24 24" width="24">
                                    <path d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z" data-original="#000000" />
                                    <path d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z" data-original="#000000" />
                                </svg>
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Uploading;
