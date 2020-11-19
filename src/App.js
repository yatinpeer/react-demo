import React from 'react';
import './App.css';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Listing from './components/Listing';
import ListingPage from './pages/ListingPage';
import FadePage from './pages/FadePage';
import AccordionPage from './pages/AccordionPage';
import FetchData from './pages/FetchData';
import DragDropPage from './pages/DragDropPage';
import TabsPage from './pages/TabsPage';
import AxiosPage from './pages/AxiosPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container text-left">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/listing" component={ListingPage} />
          <Route path="/fadepage" component={FadePage} />
          <Route path="/accordion" component={AccordionPage} />
          <Route path="/fetchdata" component={FetchData} />
          <Route path="/dragDrop" component={DragDropPage} />
          <Route path="/tabs" component={TabsPage} />
          <Route path="/axios-page" component={AxiosPage} />
        </div>
      </Router>

    </div>
  );
}

export default App;
