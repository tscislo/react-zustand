import React from 'react';
import './App.css';
import {CounterComponent} from "./basic-store/counter.component";
import {KindComponent} from "./basic-store/kind.component";
import {CounterSimpleComponent} from "./basic-store/counter-simple.component";

function App() {
    return (
        <>
            <CounterComponent/>
            <CounterSimpleComponent />
            <KindComponent/>
        </>
    );
}

export default App;
