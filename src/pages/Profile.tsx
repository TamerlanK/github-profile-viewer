// Profile.tsx
import React from "react"
import { useParams } from "react-router-dom"
import { useUserProfile } from "../queries/useUserProfile"
import Loader from "../components/Loader"
import ErrorDisplay from "../components/ErrorDisplay" // Import the ErrorDisplay component
import {
  ProfileBio,
  ProfileHeader,
  ProfileDetails,
  ProfileStats,
} from "../components/profile"

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>()
  const {
    data: userProfile,
    isLoading: isUserLoading,
    isFetching: isUserFetching,
    isError,
    error: userError,
    refetch,
  } = useUserProfile(username!)

  if (isUserLoading || isUserFetching) {
    return <Loader />
  }

  if (isError) {
    const errorCode = parseInt(userError.message.slice(-3), 10)

    return <ErrorDisplay errorCode={errorCode} onRetry={refetch} />
  }

  return (
    <div className="pt-16 bg-slate-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 rounded-lg bg-slate-800">
        <ProfileHeader
          avatarUrl={userProfile?.avatar_url}
          name={userProfile?.name}
          login={userProfile?.login}
        />
        <ProfileBio bio={userProfile?.bio} />
        <ProfileDetails
          company={userProfile?.company}
          location={userProfile?.location}
          email={userProfile?.email}
          createdAt={userProfile?.created_at}
        />
        <ProfileStats
          followers={userProfile?.followers}
          following={userProfile?.following}
        />
      </div>
    </div>
  )
}

export default Profile
