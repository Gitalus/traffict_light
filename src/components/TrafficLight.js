import React from 'react'

export const TrafficLight = () => {
    const trafficLightStyle = {
        alignItems: "center",
        background: "black",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "auto",
        padding: "0 0 5px 0",
        width: "70px",
    }

    const lightsArray = ["red", "orange", "green"];
    
    function styleCircle(color) {
        return {
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            margin: "5px 5px 0",
            background: color
        }
    }
    
    const handleLight = (event) => {
        event.target.style.boxShadow = selected.boxShadow;
    };
    
    const selected = {
        boxShadow: "0 0 20px 15px rgb(255 255 255)"
    }

    return (
        <div style={ trafficLightStyle }>
            {
                lightsArray.map( light => {
                    return <div key={ light } style={ styleCircle(light) } onClick={ handleLight }></div>
                })
            }
        </div>
    )
}
