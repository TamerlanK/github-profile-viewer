// src/components/Profile.tsx
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

interface UserProfile {
  // Define the structure of the GitHub user profile
  // You can customize this based on the actual GitHub API response
  login: string
  name: string
  avatar_url: string
  // ... other fields
}

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        )
        setUserProfile(response.data)
      } catch (error) {
        // Handle error (e.g., user not found)
        console.error(error)
      }
    }

    fetchUserProfile()
  }, [username])

  if (!userProfile) {
    return <div>Loading...</div>
  }

  console.log(userProfile)

  return (
    <div>
      <h1>{userProfile.name}</h1>
      <p>{userProfile.login}</p>
      <img
        src={userProfile.avatar_url}
        alt="avatar"
        className="w-6 h-6 rounded-full"
      />
    </div>
  )
}

export default Profile
