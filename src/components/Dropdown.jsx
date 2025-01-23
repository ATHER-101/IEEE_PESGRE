import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Dropdown({ title, items, routes }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleMouseEnter = () => {
        if (items.length > 0) setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center"
        >
            <button
                className={`flex items-center text-lg font-semibold transition-all px-3 py-2 rounded-md text-[#168BEE] ${
                    isOpen ? 'bg-[#168BEE33]':''
                } ${routes.includes(location.pathname)? 'bg-[#168BEE] text-white' : 'hover:bg-[#168BEE33]'}`}
            >
                {items.length === 0 ? (
                    <Link to={routes[0]} className="hover:text-[#168BEE]">
                        {title}
                    </Link>
                ) : (
                    <>
                        {title}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-7 pt-0.5 px-1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={4}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </>
                )}
            </button>
            {isOpen && items.length > 0 && (
                <div className="absolute left-0 top-11 w-[250px] pt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {items.map((item, index) => (
                        <Link to={routes[index]} key={index}>
                            <div
                                className="px-4 py-2 text-[#168BEE] hover:bg-[#168BEE33] hover:text-[#168BEE] cursor-pointer transition-all"
                            >
                                {item}
                            </div>
                            {index < items.length - 1 && (
                                <div className="border-t border-gray-200" />
                            )}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}