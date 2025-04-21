import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5'; // Cross icon

const getTodayKey = () => {
    const today = new Date().toISOString().split('T')[0];
    return `hidePopup-${today}`;
};

export default function PopupNotification() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hideForToday = localStorage.getItem(getTodayKey());
        if (!hideForToday) {
            const timer = setTimeout(() => setVisible(true), 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setVisible(false);
    };

    const handleDontShowToday = () => {
        localStorage.setItem(getTodayKey(), 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-xl border-2 border-gray-200 w-[30%] p-4 animate-slide-up z-50">
            <div className="flex flex-col items-center justify-center relative">
                <div className="w-full mb-2 flex flex-row-reverse items-center gap-2">
                    <button
                        onClick={handleClose}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-600 p-1 text-sm rounded-full transition"
                    >
                        <IoClose />
                    </button>
                    <button
                        onClick={handleDontShowToday}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 text-xs rounded-full transition"
                    >
                        Don’t show today
                    </button>
                </div>
                {/* Image */}
                <img
                    src="/Paper_Submission_Announcement.png"
                    alt="Popup"
                    className="rounded-xl shadow-xl border-2 border-gray-200"
                />
            </div>
        </div>
    );
}