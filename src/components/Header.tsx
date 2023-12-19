import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Container from "../components/Container"
import { FaGithub } from "react-icons/fa"

const Header = () => {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (username.trim() !== "") {
      navigate(`/profile/${username}`)
    }
  }
  return (
    <header className="bg-slate-950 py-4 fixed top-0 left-0 right-0 flex justify-center items-center">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <FaGithub className="w-8 h-8" />
            <h1 className="text-xl font-semibold">GitHub Profile Viewer</h1>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter Github username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-2 py-1 rounded-md h-8 text-gray-950"
            />
            <button
              onClick={handleSearch}
              className="px-4 text-lg rounded-md text-white bg-orange-600 h-8"
            >
              Search
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
