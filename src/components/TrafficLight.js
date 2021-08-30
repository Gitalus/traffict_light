import React, { useState } from 'react'

export const TrafficLight = () => {

    const [selected, setSelected] = useState('');

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

    const selectedColor = (color) => {
        return {
            boxShadow: `0 0 20px 15px ${color}`,
        }
    }

    return (
        <div style={ trafficLightStyle }>
            {
                lightsArray.map( light => (
                    <div 
                        key={ light } 
                        style={ { ...styleCircle(light), ...(selected === light ? selectedColor(light) : null) } } 
                        onClick={ ()=> {
                            setSelected(light) } }
                    >
                    </div>
                ))
            }
        </div>
    )
}
