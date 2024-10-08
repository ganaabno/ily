import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Yes from "./pages/Yes"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
