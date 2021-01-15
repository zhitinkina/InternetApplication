import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import { Home } from './Home';
import { Profile } from './Profile';
import { Info } from './Info';
import { Access } from './Access';
import { Editingprofile } from './Editingprofile';
import { Createpublication } from "./Createpublication";
import { Photos } from "./Photos";
import { Editingpublication } from "./Editingpublication";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/access" component={Access} />
        <Route path="/editingprofile" component={Editingprofile} />
        <Route path="/createpublication" component={Createpublication} />
        <Route path="/photos" component={Photos} />
        <Route path="/editingpublication" component={Editingpublication} />
      </Switch>
    </Router>

    <Footer />
    </>
  );
}

export default App;
