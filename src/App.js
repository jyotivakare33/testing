import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
