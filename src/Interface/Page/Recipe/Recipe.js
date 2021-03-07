import React from 'react'
import './Recipe.css'

 const Recipe = ({title, calories, img, ingredients}) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredients) => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>calories: {calories.toFixed(2)}</p>
            <img src={img} alt=" " className="img" />
        </div>
    )
}


export default Recipe