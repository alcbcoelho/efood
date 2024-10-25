import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Profile />} path="restaurante/:id"></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
