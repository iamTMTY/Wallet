import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import './styles/App.scss'

function App() {
    return (
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home />}
            />
            <Route
              path="/contact"
              render={(props) => <Contact />}
            />
            <Route render={(props) => <PageNotFound />} />
          </Switch>
        </BrowserRouter>
      </div>

    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
