import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar.js';
import HomePage from './views/Home/HomePage.js';
import ProjectsPage from './views/Projects/ProjectsPage.js';
import WhatToEatPage from './views/WhatToEat/WhatToEatPage.js';
import Error404Page from './views/Error404Page';
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="content">
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/projects" component={ProjectsPage} />
                    <Route exact path="/what-to-eat" component={WhatToEatPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route component={Error404Page} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
