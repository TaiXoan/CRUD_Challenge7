
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CardList from "./Components/CardList";
import NoResult from "./Components/NoResult";
import Modal from "./Components/Modal";
import Trash from "./Components/Trash";
const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/home" element={<Trash/>}/>
        <Route path="/" element={<CardList />} />
        <Route path="/about" element={<NoResult />} />
        <Route path="/contact" element={<Modal />} />
      </Routes>

    </BrowserRouter>
  );
};
export default App;
