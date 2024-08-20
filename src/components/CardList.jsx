import React from 'react'

function CardList() {
    return (
        <div className="w-full bg-gray-100 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <div key={idx} className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl p-6 text-center">
                        <img src="/iitdh.png" alt="iitdh logo" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardList
