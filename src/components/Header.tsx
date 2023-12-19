import React, { useState, FormEvent } from "react"
import { useNavigate, Link } from "react-router-dom"
import Container from "../components/Container"
import { FaGithub, FaSearch } from "react-icons/fa"

const Header: React.FC = () => {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (username.trim() !== "") {
      navigate(`/profile/${username}`)
    }
    setUsername("")
  }

  return (
    <header className="bg-slate-950 py-4 fixed top-0 left-0 right-0 flex justify-center items-center">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          <Link
            to="/"
            className="flex items-center gap-4 mb-2 md:mb-0 text-white hover:text-gray-200"
          >
            <FaGithub className="w-8 h-8" />
            <span className="text-xl font-semibold">GitHub Profile Viewer</span>
          </Link>
          <form className="flex items-center gap-4" onSubmit={handleSearch}>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter Github username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-8 py-1 rounded-md h-8 text-gray-950 focus:outline-none"
              />
              <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <button
              type="submit"
              className="px-4 text-lg rounded-md text-gray-200 bg-slate-800 h-8"
            >
              Search
            </button>
          </form>
        </div>
      </Container>
    </header>
  )
}

export default Header
