import * as React from "react";
import "./App.css";
import AuthProviderWithHistory from "./providers/AuthProviderWithHistory";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Hidden from "./pages/Hidden";

function App() {
  return (
    <div className="App">
      <AuthProviderWithHistory>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          {/* use Protected route for a single route */}
          <Route
            path="hidden"
            element={
              <ProtectedRoute>
                <Hidden />
              </ProtectedRoute>
            }
          />

          {/* use Protected route as a Layout Route if for multiple routes */}
          {/* <Route element={<ProtectedRoute />}>
            <Route path="hidden" element={<Hidden />} />
            <Route path="hidden2" element={<Hidden2 />} />
          </Route> */}
        </Routes>
      </AuthProviderWithHistory>
    </div>
  );
}

export default App;
