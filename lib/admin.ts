import { auth } from "@clerk/nextjs/server"

const adminIds = [
  "user_2ueqyN6ZcbSDO8kSQ8H8pFylCmV",
  "user_2dGb6YEarBAQHrNYoB5dMtISRWK"
];

export const getIsAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
