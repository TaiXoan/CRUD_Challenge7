import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import CardList from "./Components/CardList";
import NoResult from "./Components/NoResult";
import Modal from "./Modal";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="header">LIST SOCIAL CARD</div>
        <div className="content">
          <NavigationBar />
          {/* <CardList />
          <NoResult />
          <Modal></Modal> */}
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<CardList />} />
        <Route path="/about" element={<NoResult />} />
        <Route path="/contact" element={<Modal />} />
      </Routes>

    </BrowserRouter>
  );
};
export default App;
