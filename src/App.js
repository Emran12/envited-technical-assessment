import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event/Event";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
