import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./views/home"
import NewDuties from "./componets/newDuties";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/newdutie" element={<NewDuties />} /> */}

      </Routes>
    </BrowserRouter>
  );
}




export default App;

