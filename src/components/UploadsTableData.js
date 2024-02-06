import React, { useState } from 'react';

const UploadsTableData = () => {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownEnter = (index) => {
        setHoveredRow(index);
        setIsDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
        setHoveredRow(null);
        setIsDropdownOpen(false);
    };


    const rowsData = [
        {
            slNo: '01',
            link: 'www.gmail.com',
            prefix: 'prefixsample',
            tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']
        },
        {
            slNo: '02',
            link: 'www.gmail.com',
            prefix: 'prefixsample',
            tags: ['Tag 1', 'Tag 2',]
        },
        {
            slNo: '03',
            link: 'www.gmail.com',
            prefix: 'prefixsample',
            tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']
        },
        {
            slNo: '04',
            link: 'www.gmail.com',
            prefix: 'prefixsample',
            tags: ['Tag 1',]
        },
        {
            slNo: '05',
            link: 'www.gmail.com',
            prefix: 'prefixsample',
            tags: ['Tag 1', 'Tag 2',]
        },
    ];

    return (
        <div className='w-[85%] justify-center'>
            <p className='text-2xl'>Uploads</p>
            <table className="min-w-full bg-white border rounded shadow-md">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b  text-back font-semibold ">Sl.No</th>
                        <th className="py-2 px-4 border-b  text-back font-semibold ">Links</th>
                        <th className="py-2 px-4 border-b  text-back font-semibold ">Prefix</th>
                        <th className="py-2 px-4 border-b  text-back font-semibold ">Add Tags</th>
                        <th className="py-2 px-4 border-b  text-back font-semibold ">Selected Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {rowsData.map((rowData, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-8 px-4 border-b text-center ">{rowData.slNo}</td>
                            <td className="py-2 px-4 border-b text-center ">
                                <button type="link" className=' text-blue-500 underline underline-blue'>{rowData.link}</button>
                            </td>
                            <td className="py-8 px-4 border-b  text-center">{rowData.prefix}</td>
                            <td className=''>
                                <div className='flex gap-2 justify-center items-center'>
                                    <div className="relative inline-block" onMouseEnter={() => handleDropdownEnter(index)} onMouseLeave={handleDropdownLeave}>
                                        <span className="px-2 py-1 cursor-pointer pr-16">
                                            Select Tags
                                        </span>
                                        <svg className="w-6 h-6 fill-current text-black   absolute right-0 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M7 10l5 5 5-5H7z" />
                                        </svg>
                                        <div className={`absolute bg-white border border-gray-200 shadow-md rounded mt-1 right-0 ${isDropdownOpen && hoveredRow === index ? 'block' : 'hidden'}`} onMouseEnter={() => handleDropdownEnter(index)} onMouseLeave={handleDropdownLeave}>
                                            {rowData.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="block px-4 py-2">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className=''>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {rowData.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-[white] bg-[#605BFF] px-2 py-1 rounded-lg flex items-center">
                                            {tag}
                                            <button className="ml-1">
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

    );
};

export default UploadsTableData;
