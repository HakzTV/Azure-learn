// Types to be used by the auth provide hook 
export type UserInfo = {
  userId: string;
  userDetails: string;
  identityProvider: string;
  userRoles: string[];
};

export type AuthContextType = {
  user: UserInfo | null;
  login: () => void;
  logout: () => void;
  loading: boolean;
};
