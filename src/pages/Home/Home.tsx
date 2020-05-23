import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white text-2xl">
        <p>Taiwlind with React</p>

        <Link to="/about" className="text-blue-300">
          Go to About
        </Link>
      </header>
    </div>
  )
}

export default Home
