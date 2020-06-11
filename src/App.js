import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import index from './components/index';
import styles from './App.module.css'

const App = () => {
    return (
        <div className={styles.body}>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={index} />
            </Switch>
        </div>
            
            
        
    );
}
export default App;
