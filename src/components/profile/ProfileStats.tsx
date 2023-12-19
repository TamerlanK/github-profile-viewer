import React from "react";
import { FaUsers, FaUserFriends } from "react-icons/fa";

interface ProfileStatsProps {
  followers: number | undefined;
  following: number | undefined;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ followers, following }) => {
  return (
    <div className="mt-4 flex items-start flex-col gap-1">
      <div className="flex items-center mr-4">
        <FaUsers className="text-gray-300 mr-2" />
        <p className="text-gray-300">
          <strong>Followers:</strong> {followers}
        </p>
      </div>
      <div className="flex items-center">
        <FaUserFriends className="text-gray-300 mr-2" />
        <p className="text-gray-300">
          <strong>Following:</strong> {following}
        </p>
      </div>
    </div>
  );
};

export default ProfileStats;
