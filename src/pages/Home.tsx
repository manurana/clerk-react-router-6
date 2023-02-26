import * as React from "react";

import { useApolloClient } from "@apollo/client";
import { Link } from "react-router-dom";

const Home = () => {
  const client = useApolloClient();
  client.resetStore();

  return (
    <React.Fragment>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <br />
        <Link to="/hidden">Hidden</Link>
      </nav>
    </React.Fragment>
  );
};

export default Home;
