import * as React from "react";

import { SignUp } from "@clerk/clerk-react";

const SignUpScreen = () => {
  return <SignUp routing="path" path="/sign-up" />;
};

export default SignUpScreen;
