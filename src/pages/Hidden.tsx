import * as React from "react";

import { useAuth, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

import { useGetAllBikesQuery } from "../graphql/generated";

const Hidden = () => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();
  console.log(
    "🚀 ~ file: Hidden.tsx ~ line 11 ~ Hidden ~ isSignedIn",
    isSignedIn
  );

  const {
    data: getAllBikesData,
    loading: getAllBikesLoading,
    error: getAllBikesError,
  } = useGetAllBikesQuery();

  return (
    <React.Fragment>
      <main>
        <h2>Whoa!</h2>
        <p>You are not supposed to see this</p>
        {user ? <p>Hello, {user.firstName}!</p> : null}
        <p>{getAllBikesData?.bike.length}</p>
        <UserButton />
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </React.Fragment>
  );
};

export default Hidden;
