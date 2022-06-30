import * as React from "react";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

// https://www.robinwieruch.de/react-router-private-routes/
// This can be used as a layout route, as well as wrapper

type ProtectedRouteProps = {
  children?: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return (
    <React.Fragment>
      <SignedIn>{children ? children : <Outlet />}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </React.Fragment>
  );
};

export default ProtectedRoute;
