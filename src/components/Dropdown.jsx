import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Dropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-block"
        >
            <button className="flex items-center text-black text-lg font-sans font-normal">
                {title}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-7 pt-0.5 px-1.5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 w-48 bg-white border-gray-300 rounded-sm shadow-lg z-10">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
                                {item}
                            </div>
                            {index < items.length - 1 && <div className="border-t border-gray-300" />}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
}
