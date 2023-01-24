import "./App.css";
import Home from "./views/Home";
import Form from "./components/Form";
import Details from "./components/Details";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Form} />
        {/* <Route path="*" component={Error404} /> */}
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
