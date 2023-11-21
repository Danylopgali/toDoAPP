import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./views/home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;

