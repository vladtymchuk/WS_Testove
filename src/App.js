import React from "react";
import {News} from "./pages/News";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";

function App() {
  return (
      <BrowserRouter>
          <main>
              <Header/>
              <Routes>
                  <Route index element={<Home />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
              </Routes>
          </main>
      </BrowserRouter>
  );
}

export default App;
