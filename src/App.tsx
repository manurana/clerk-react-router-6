import "./App.css";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Hidden from "./pages/Hidden";
import Home from "./pages/Home";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* use Protected route for a single route */}
          <Route
            path="/hidden"
            element={
              <ProtectedRoute>
                <Hidden />
              </ProtectedRoute>
            }
          />

          {/* Signup - Signin */}
          {/* <Route path="/sign-in/*" element={<SignInScreen />} />
          <Route path="/sign-up/*" element={<SignUpScreen />} /> */}

          <Route
            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />

          {/* use Protected route as a Layout Route if for multiple routes */}
          {/* <Route element={<ProtectedRoute />}>
            <Route path="/hidden" element={<Hidden />} />
            <Route path="hidden2" element={<Hidden2 />} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
