import React from 'react'

function InfoCard({ title, description, iconClass, required }) {
  return (
    <div>
      <div className="flex items-center justify-between py-2 bg-white rounded-xl">
        <div className="flex items-center space-x-4">
          <div className="bg-green-50 p-3 rounded-xl">
            <i className={`h-5 w-5 text-center rounded-lg text-lightGreen ${iconClass}`}></i>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{title}</p>
            <p className="text-sm text-gray-500 tracking-wide">{description}</p>
          </div>
        </div>
        <label className="cursor-pointer">
          <input type="file" className="hidden" required={`${required}`} />
          <i className="w-5 h-5 fa-solid fa-file-arrow-up text-gray-500 hover:text-green-500 transition"></i>
        </label>
      </div>
    </div>
  )
}

export default InfoCard
