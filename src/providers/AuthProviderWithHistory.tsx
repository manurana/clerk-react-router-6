import * as React from "react";

import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

type AuthProviderWithHistoryProps = {
  children: React.ReactNode;
};

const AuthProviderWithHistory = ({
  children,
}: AuthProviderWithHistoryProps) => {
  const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

  const navigate = useNavigate();

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
};

export default AuthProviderWithHistory;
