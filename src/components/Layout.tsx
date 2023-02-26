import { Outlet } from "react-router-dom";

import ApolloProviderWithAuth from "../providers/ApolloProviderWithAuth";
import AuthProviderWithHistory from "../providers/AuthProviderWithHistory";

const Layout = () => {
  return (
    <AuthProviderWithHistory>
      <ApolloProviderWithAuth>
        <Outlet />
      </ApolloProviderWithAuth>
    </AuthProviderWithHistory>
  );
};

export default Layout;
