import React, { useState } from 'react';
import bellIcon from "../assets/bellIcon.png";
import profile from "../assets/profile.png";
import Papa from "papaparse";
import UploadsTableData from './UploadsTableData';
import xlIcon from "../assets/xlIcon.png"
import uploadIcon from "../assets/uploadIcon.png"

const Uploading = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [csvData, setCsvData] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        console.log("Selected File:", file);
        setSelectedFile(file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setCsvData([]);
    };



    const parseCSV = (file) => {

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                console.log("papa parse", results.data)
                setCsvData(results.data)
            },
        });

    };

    const handleUpload = () => {
        if (selectedFile) {
            console.log("Uploading file:", selectedFile);
            parseCSV(selectedFile)
        } else {
            console.log("No file selected");
        }
    };

    return (
        <>

            <div className='flex justify-between items-center pt-8 px-[30px] pb-[137px] sm:w-ful'>

                <div>
                    <p className='text-2xl font-semibold text-[#000000]'>Upload csv</p>
                </div>
                {/* mobile view header */}

                <div className=' flex justify-between items-center text-center space-x-2 gap-3 sm:flex hidden sm:block'>
                    <img src={bellIcon} width={18} alt="Bell Icon" />
                    <img src={profile} width={30} alt="Profile" />
                </div>
            </div>

            <div className='flex justify-center items-center w-full'>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#FFFFFF] w-[90%] ">
                    <label className="bg-white text-center rounded w-full sm:w-[360px] min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2
                     border-gray-300 mx-auto font-[sans-serif] m-4">
                        <img src={xlIcon} alt='excel' width={36} className='pb-4' />
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
                            <p className="text-[#999CA0] font-semibold text-sm ">
                                Drop your excel sheet here or <span className="text-[#007bff]">browse</span> to upload
                            </p>
                        )}
                        <input
                            type="file"
                            id='uploadFile1'
                            className="hidden"
                            accept=".xlsx, .xls, .csv"
                            onChange={handleFileChange}
                        />
                    </label>

                    <div className='bg-[#605BFF] flex justify-center mx-auto w-[90%] items-center py-4 px-10 mb-[20px] rounded-lg '>
                        <div className='flex justify-center pl-[20px] pr-[20px] '>
                            <button type='submit' className="flex cursor-pointer text-[#ffffff] items-center gap-3 font-semibold text-sm" onClick={handleUpload}>

                                <img src={uploadIcon} width={24} alt='uploadicon' />
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <UploadsTableData data={csvData} />
        </>

    );
};

export default Uploading;
