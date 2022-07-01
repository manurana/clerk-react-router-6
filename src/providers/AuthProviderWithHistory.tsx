import * as React from "react";

import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

type AuthProviderWithHistoryProps = {
  children: React.ReactNode;
};

const AuthProviderWithHistory = ({
  children,
}: AuthProviderWithHistoryProps) => {
  if (!process.env.REACT_APP_CLERK_FRONTEND_API) {
    throw new Error("REACT_APP_CLERK_FRONTEND_API  must be set");
  }
  const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

  const navigate = useNavigate();

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
};

export default AuthProviderWithHistory;
