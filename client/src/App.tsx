import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import SearchImage from './components/SearchImage/SearchImage';

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={SearchImage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
