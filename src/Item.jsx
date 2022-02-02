import React from 'react'
import { useLocation } from 'react-router';

const Item = () => {

    const loc = useLocation();

    return (
        <div>
            <h1>{loc.state.title}</h1>
            <ol>
                {loc.state.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h1>Calories : {loc.state.calories}</h1>
            <img src={loc.state.image} alt="" />
        </div>
    );
}



export default Item;