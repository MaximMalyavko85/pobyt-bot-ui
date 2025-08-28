import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import { Header } from "@features";
import { About } from "@pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
