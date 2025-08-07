import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Men from "./pages/Men/men";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/Men/men" element={<Men />} />
    </Routes>
  );
}

export default App;
