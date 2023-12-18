import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  const handleSearch = () => {
    if (username.trim() !== "") {
      navigate(`/profile/${username}`)
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Github username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Home
