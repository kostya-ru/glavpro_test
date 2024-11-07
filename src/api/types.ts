export type ApiUser = {
  id: number;
  firstName: string | number;
  lastName: string | number;
  age: string | number;
};

export type ApiUserKeys = keyof ApiUser;

export type ApiUsersResponse = {
  limit: number;
  skip: number;
  total: number;
  users: ApiUser[];
};

export type ApiUserDataForUpdate =
  | { id: ApiUser['id'] }
  | { firstName: ApiUser['firstName'] }
  | { lastName: ApiUser['lastName'] }
  | { age: ApiUser['age'] };
