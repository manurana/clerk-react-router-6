import * as React from "react";

import { SignIn } from "@clerk/clerk-react";

const SignInScreen = () => {
  return <SignIn routing="path" path="/sign-in" />;
};

export default SignInScreen;
