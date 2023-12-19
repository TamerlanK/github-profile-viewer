import React from "react"
import { formatDate } from "../../lib/utils"

interface ProfileDetailsProps {
  company: string | null | undefined
  location: string | null | undefined
  email: string | null | undefined
  createdAt: string | undefined
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  company,
  location,
  email,
  createdAt,
}) => {
  return (
    <div className="mt-4">
      <p>
        <strong className="text-gray-300">Company:</strong>{" "}
        {company || "Not specified"}
      </p>
      <p>
        <strong className="text-gray-300">Location:</strong>{" "}
        {location || "Not specified"}
      </p>
      <p>
        <strong className="text-gray-300">Email:</strong>{" "}
        {email || "Not specified"}
      </p>
      <p>
        <strong className="text-gray-300">Member Since:</strong>{" "}
        {formatDate(createdAt || "")}
      </p>
    </div>
  )
}

export default ProfileDetails
