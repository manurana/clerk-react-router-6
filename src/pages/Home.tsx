import * as React from "react";

import { Link } from "react-router-dom";

const Home = () => {
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
