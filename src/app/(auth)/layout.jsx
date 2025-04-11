import React from 'react'

function Layout({ children }) {
  return (
    <div className="w-[27%] mx-auto px-10 pb-5">
      {children}
    </div>
  )
}

export default Layout
