import React, { useEffect, useState } from 'react';

const UploadsTableData = ({ data }) => {
    const [selectedTags, setSelectedTags] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState({});

    const handleDropdownToggle = (index) => {
        setIsDropdownOpen(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const handleTagSelection = (tag, rowIndex) => {
        setSelectedTags(prevState => ({
            ...prevState,
            [rowIndex]: [...(prevState[rowIndex] || []), tag]
        }));
    };

    const handleTagRemoval = (tag, rowIndex) => {
        setSelectedTags(prevState => ({
            ...prevState,
            [rowIndex]: prevState[rowIndex].filter(item => item !== tag)
        }));
    };

    useEffect(() => {
        console.log("Received data in UploadsTableData:", data);
    }, [data]);

    return (
        <div className='w-[85%] justify-center'>
            <p className='text-2xl pt-[48px] font-semibold sm:font-bold pb-[23px] sm:pb-[46px] pl-[20px]'>Uploads</p>
            <div className="overflow-x-auto w-full">

                <table className="min-w-full bg-white border rounded shadow-md">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-back font-semibold">Sl.No</th>
                            <th className="py-2 px-4 border-b text-back font-semibold">Links</th>
                            <th className="py-2 px-4 border-b text-back font-semibold">Prefix</th>
                            <th className="py-2 px-4 border-b text-back font-semibold">Add Tags</th>
                            <th className="py-2 px-4 border-b text-back font-semibold">Selected Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((rowData, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-8 px-4 border-b text-center">{rowData.id}</td>
                                <td className="py-2 px-4 border-b text-center">
                                    <button type="link" className='text-blue-500 underline underline-blue'>{rowData.links}</button>
                                </td>
                                <td className="py-8 px-4 border-b text-center">{rowData.prefix}</td>
                                <td className=''>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <div className="relative inline-block">
                                            <span className="px-2 py-1 cursor-pointer pr-8 text-xs sm:text-sm">
                                                Select Tags
                                            </span>
                                            <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={() => handleDropdownToggle(index)}>
                                                {/* SVG icon for dropdown */}
                                                <svg className="w-6 h-6 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M7 10l5 5 5-5H7z" />
                                                </svg>
                                            </button>

                                            <div className={`absolute bg-white border border-gray-200 shadow-md rounded mt-1 right-0 ${isDropdownOpen[index] ? 'block' : 'hidden'}`} style={{ zIndex: 10 }}>
                                                {rowData["select tags"].split(",").map((tag, tagIndex) => (
                                                    <span key={tagIndex} className="block px-4 py-2 cursor-pointer" onClick={() => handleTagSelection(tag.trim(), index)}>
                                                        {tag.trim()}
                                                    </span>
                                                ))}
                                            </div>




                                        </div>
                                    </div>
                                </td>
                                <td className=''>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {selectedTags[index] && selectedTags[index].map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-white bg-[#605BFF] px-2 py-1 rounded-lg flex items-center">
                                                {tag}
                                                <button className="ml-1" onClick={() => handleTagRemoval(tag, index)}>
                                                    {/* SVG icon for cross */}
                                                    <svg className="w-3 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M2.647 2.646a1 1 0 0 1 1.415 0L10 8.586l6.938-6.939a1 1 0 0 1 1.415 1.415L11.414 10l6.939 6.938a1 1 0 0 1-1.415 1.415L10 11.414l-6.938 6.939a1 1 0 0 1-1.415-1.415L8.586 10 1.647 3.062a1 1 0 0 1 0-1.416z" />
                                                    </svg>
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UploadsTableData;
