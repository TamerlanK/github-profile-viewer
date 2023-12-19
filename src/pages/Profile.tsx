import React from "react"
import { useParams } from "react-router-dom"
import { useUserProfile } from "../queries/useUserProfile"
import { FaUsers, FaUserFriends } from "react-icons/fa"
import Loader from "../components/Loader"
import { formatDate } from "../lib/utils"

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>()
  const {
    data: userProfile,
    isLoading: isUserLoading,
    isFetching: isUserFetching,
    error: isUserError,
  } = useUserProfile(username as string)

  if (isUserLoading || isUserFetching) {
    return <Loader />
  }

  if (isUserError) {
    return <div>Error: {isUserError.message}</div>
  }

  return (
    <div className="pt-16 bg-slate-600 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            src={userProfile?.avatar_url}
            alt="avatar"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl font-semibold">{userProfile?.name}</h1>
            <p className="text-gray-300">@{userProfile?.login}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-300">
            {userProfile?.bio || "No bio available"}
          </p>
        </div>

        <div className="mt-4">
          <p>
            <strong className="text-gray-300">Company:</strong>{" "}
            {userProfile?.company || "Not specified"}
          </p>
          <p>
            <strong className="text-gray-300">Location:</strong>{" "}
            {userProfile?.location || "Not specified"}
          </p>
          <p>
            <strong className="text-gray-300">Email:</strong>{" "}
            {userProfile?.email || "Not specified"}
          </p>
          <p>
            <strong className="text-gray-300">Member Since:</strong>{" "}
            {formatDate(userProfile?.created_at || "")}
          </p>
        </div>

        <div className="mt-4 flex items-center">
          <FaUsers className="text-gray-300 mr-2" />
          <p>
            <strong className="text-gray-300">Followers:</strong>{" "}
            {userProfile?.followers}
          </p>
        </div>

        <div className="mt-2 flex items-center">
          <FaUserFriends className="text-gray-300 mr-2" />
          <p>
            <strong className="text-gray-300">Following:</strong>{" "}
            {userProfile?.following}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
