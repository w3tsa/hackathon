import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/pages/Homepage";
import Instructions from "./components/pages/Instruction";
import SubmitEvent from "./components/pages/SubmitEvent";
const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/instructions" element={<Instructions />} />
          <Route exact path="/submitevent" element={<SubmitEvent />} />
          <Route exact path="/map" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
