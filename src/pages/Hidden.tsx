import { UserButton, useUser } from "@clerk/clerk-react";
import * as React from "react";
import { Link } from "react-router-dom";

const Hidden = () => {
  const { user } = useUser();
  return (
    <React.Fragment>
      <main>
        <h2>Whoa!</h2>
        <p>You are not supposed to see this</p>
        {user ? <p>Hello, {user.firstName}!</p> : null}
        <UserButton />
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </React.Fragment>
  );
};

export default Hidden;
