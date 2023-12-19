import React from "react";

interface ProfileBioProps {
  bio: string | null | undefined ;
}

const ProfileBio: React.FC<ProfileBioProps> = ({ bio }) => {
  return <div className="mt-4">{bio ? <p className="text-gray-300">{bio}</p> : <p>No bio available</p>}</div>;
};

export default ProfileBio;
