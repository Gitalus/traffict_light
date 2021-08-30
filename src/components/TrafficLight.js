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
    const lightStyle = {
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        background: "white",
        margin: "5px 5px 0",
    }

    return (
        <div style={ trafficLightStyle }>
            <div style={ lightStyle }></div>
            <div style={ lightStyle }></div>
            <div style={ lightStyle }></div>
        </div>
    )
}
