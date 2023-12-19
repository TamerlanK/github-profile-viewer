import React from "react";

interface ProfileHeaderProps {
  avatarUrl: string | undefined;
  name: string | undefined;
  login: string | undefined;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ avatarUrl, name, login }) => {
  return (
    <div className="flex items-center">
      <img src={avatarUrl} alt="avatar" className="w-20 h-20 rounded-full mr-4" />
      <div>
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-gray-300">@{login}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
