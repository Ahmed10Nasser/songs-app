import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Receipt from "./components/Receipt";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/submit">
            <Receipt/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
