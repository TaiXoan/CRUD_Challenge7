import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import CardList from './Components/CardList';
const App = () => {
  return (
    <Router>
      <div className="container">
        <div class="header">LIST SOCIAL CARD</div>
        <div className='navigation'>
          <NavigationBar></NavigationBar>
        </div>
        <div className='formcard'>
          <CardList></CardList>
        </div>
      </div>
    </Router>
  );
}
export default App;
