

import React from 'react';
import ReactDOM from 'react-dom';
import { TrafficLight } from './components/TrafficLight';

function App() {
    return (
        <>
            <TrafficLight />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));