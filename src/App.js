import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import CardList from "./Components/CardList";
// import NoResult from "./Components/NoResult";

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="header">LIST SOCIAL CARD</div>
        <div className="content">
          <NavigationBar />
          <CardList />
          {/* <NoResult /> */}
        </div>
      </div>
    </Router>
  );
};
export default App;
