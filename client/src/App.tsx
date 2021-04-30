import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import HomePage from './pages/HomePage/HomePage';

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
