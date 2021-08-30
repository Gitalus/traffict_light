

import React from 'react';
import ReactDOM from 'react-dom';
import { TrafficLight } from './components/TrafficLight';

function App() {

    const myStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div style={ myStyle }>
            <TrafficLight />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));