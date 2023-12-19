import { useQuery } from "@tanstack/react-query"
import { UserProfile } from "../lib/types"
import { userProfileQueryKey } from "../lib/queryKeys"
import axios from "axios"

export const fetchUserProfile = async (
  username: string
): Promise<UserProfile> => {
  const response = await axios.get(`https://api.github.com/users/${username}`)
  return response.data
}

export const useUserProfile = (username: string) => {
  return useQuery<UserProfile, Error>({
    queryKey: userProfileQueryKey(username),
    queryFn: () => fetchUserProfile(username),
  })
}
