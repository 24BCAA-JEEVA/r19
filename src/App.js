import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>My Student Profile</h1>
          <Navigation />
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </main>

        <footer>
          <p>Student Profile Website</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
