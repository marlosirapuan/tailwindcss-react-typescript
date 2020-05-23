import React from 'react'
import { Link } from 'react-router-dom'

const Restrict: React.FC = () => {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white text-2xl">
        <p>Restrict page</p>

        <Link to="/" className="text-blue-300">
          Go to Home
        </Link>
      </header>
    </div>
  )
}

export default Restrict
