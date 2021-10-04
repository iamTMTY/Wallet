import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './App.scss'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';

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
              path="/login"
              exact
              render={(props) => <Login />}
            />
            <Route
              path="/register"
              exact
              render={(props) => <Register />}
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
