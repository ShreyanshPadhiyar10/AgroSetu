import React from 'react'

function DescriptionCard({ iconClass, title, description, isSelected, onClick, className }) {
  return (
    <>
      <div className={`px-5 py-6 rounded-xl border w-40 space-y-2 cursor-pointer transition-all ${isSelected ? "bg-green-100 border-green-500" : "bg-green-50 border-green-100 hover:border-green-400"} ${className}`}
        onClick={onClick}
      >
        {iconClass && <i className={`${iconClass} text-lightGreen text-xl px-2.5 py-3 rounded-full bg-green-100`}></i>}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm tracking-wide">{description}</p>
      </div>
    </>
  )
}

export default DescriptionCard
