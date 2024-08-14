import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const navItems = [
    {
        title: 'Home',
        dropdownItems: [],
        routes: ["/"],
    },
    {
        title: 'About',
        dropdownItems: ['Organizing Committee', 'Chairs'],
        routes: ['/about/organizing-committee', '/about/chairs'],
    },
    {
        title: 'Authors',
        dropdownItems: ['Call for Papers', 'Submission & Registration'],
        routes: ['/authors/call-for-papers', '/authors/submission-registration'],
    },
    {
        title: 'Program',
        dropdownItems: ['Keynote Speakers'],
        routes: ['/program/keynote-speakers'],
    },
    {
        title: 'Students & YPs',
        dropdownItems: [],
        routes: ["/students-yp"],
    },
    {
        title: 'Contact',
        dropdownItems: [],
        routes: ["/contact"],
    },
];

export default function DrawerAppBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const drawerRef = useRef(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleDropdown = (index) => {
        if (navItems[index].dropdownItems.length > 0) {
            setActiveIndex(activeIndex === index ? null : index);
        }
    };

    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setIsDrawerOpen(false);
        }
    };

    useEffect(() => {
        if (isDrawerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDrawerOpen]);

    return (
        <div>
            <header className="sticky w-[100%] bg-white text-black top-0 z-40 shadow-md">
                <div className="flex items-center justify-between p-2 md:p-4">
                    <div className="flex items-center">
                        <img
                            src="/Logo_PESGRE_1.png"
                            alt="Logo"
                            className="h-8 md:h-12" // Adjust the height as needed
                        />
                    </div>
                    <button
                        className="md:hidden p-2"
                        onClick={toggleDrawer}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <nav className="hidden md:flex space-x-4">
                        {navItems.map(({ title, dropdownItems, routes }) => (
                            <Dropdown key={title} title={title} items={dropdownItems} routes={routes} />
                        ))}
                    </nav>
                </div>
            </header>

            {/* Drawer for mobile */}
            {isDrawerOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-40 md:hidden">
                    <div ref={drawerRef} className="absolute top-0 left-0 w-64 bg-white h-full shadow-lg">
                        <div className="flex items-center justify-between p-4">
                            <img
                                src="/Logo_PESGRE_1.png"
                                alt="Logo"
                                className="h-6"
                            />
                            <button onClick={toggleDrawer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col px-4">
                            {navItems.map(({ title, dropdownItems, routes }, index) => (
                                <div key={title} className="border-b border-gray-300 py-2">
                                    <button
                                        className="flex items-center justify-between w-full text-black text-left"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        {dropdownItems.length == 0?<Link to={routes[0]}>{title}</Link>:<>{title}</>}
                                        {dropdownItems.length > 0 && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </button>
                                    {activeIndex === index && dropdownItems.length > 0 && (
                                        <div className="mt-2 ml-4">
                                            {dropdownItems.map((item, i) => (
                                                <Link key={i} to={routes[i]} className="text-black py-1 block">
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
