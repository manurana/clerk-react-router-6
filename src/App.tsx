import "./App.css";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Hidden from "./pages/Hidden";
import Home from "./pages/Home";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import ApolloProviderWithAuth from "./providers/ApolloProviderWithAuth";
import AuthProviderWithHistory from "./providers/AuthProviderWithHistory";

function App() {
  return (
    <div className="App">
      <AuthProviderWithHistory>
        <ApolloProviderWithAuth>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* use Protected route for a single route */}
            {/* <Route
              path="/hidden"
              element={
                <ProtectedRoute>
                  <Hidden />
                </ProtectedRoute>
              }
            /> */}

            {/* Signup - Signin */}
            <Route path="/sign-in/*" element={<SignInScreen />} />
            <Route path="/sign-up/*" element={<SignUpScreen />} />

            {/* use Protected route as a Layout Route if for multiple routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/hidden" element={<Hidden />} />
              {/* <Route path="hidden2" element={<Hidden2 />} /> */}
            </Route>
          </Routes>
        </ApolloProviderWithAuth>
      </AuthProviderWithHistory>
    </div>
  );
}

export default App;
