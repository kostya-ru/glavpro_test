import { API_BASE_URL } from "./constants";
import type { ApiUsersResponse, ApiUserDataForUpdate } from "./types";

export const getUsers = async (): Promise<ApiUsersResponse> => {
  const response = await fetch(`${API_BASE_URL}/users?limit=10`);
  return response.json();
};

export const updateUser = async (
  id: number,
  data: ApiUserDataForUpdate
) => {
  const response = fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
};
