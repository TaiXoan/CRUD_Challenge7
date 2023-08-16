
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CardList from "./Components/CardList";
import EmptyResults from "./Components/EmptyResults";
import AddCardModal from "./Components/AddCardModal";
import TrashModal from "./Components/TrashModal";
import DetailPage from "./Components/DetailPage";
const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/TrashModal" element={<TrashModal/>}/>
        <Route path="/CardList" element={<CardList />} />
        <Route path="/EmptyResults" element={<EmptyResults />} />
        <Route path="/AddCardModal" element={<AddCardModal />} />
        <Route path="/Detailpage" element={<DetailPage/>}/>
      </Routes>

    </BrowserRouter>
  );
};
export default App;
