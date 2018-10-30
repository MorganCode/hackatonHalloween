import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Receiver from './pages/Receiver';
import Giver from './pages/Giver';
import MapContainer from './Components/Map';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MapContainer /> */}
            <BrowserRouter>
              <Switch>
                <Route exact path="/" render={()=><HomePage/>}/>
                <Route exact path="/giver" render={()=><Giver/>}/>
                <Route exact path="/receiver" render={()=><Receiver/>} />
              </Switch>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
