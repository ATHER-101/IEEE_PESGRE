import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown({ title, items, routes }) {
    const [isOpen, setIsOpen] = useState(false);

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
            className="relative inline-block"
        >
            <button
                className="flex items-center text-black text-lg font-sans font-normal"
            // Add other click handlers as needed for normal button behavior
            >
                {items.length == 0 ? <Link to={routes[0]}>{title}</Link> : <>{title}</>}
                {items.length > 0 && (
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
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                )}
            </button>
            {isOpen && items.length > 0 && (
                    <div className="absolute left-0 w-[250px] pt-4 bg-white rounded-sm shadow-lg z-50">
                        {items.map((item, index) => (
                            <Link to={routes[index]} key={index}>
                                <div className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
                                    {item}
                                </div>
                                {index < items.length - 1 && <div className="border-t border-gray-300" />}
                            </Link>
                        ))}
                    </div>
            )}
        </div>
    );
}
