import React from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';
import { v4 as uuid } from 'uuid'


const Cards = ({ recipes }) => {

    return (
        <div className="recipe">
            {recipes.map(recipe => {
                const id = uuid();
                return (
                    <button className="items" key={id}>
                        <Link to={{
                            pathname: `/card-page/${id}`,
                            state: {
                                image: recipe.recipe.image,
                                title: recipe.recipe.label,
                                ingredients: recipe.recipe.ingredients,
                                calories: recipe.recipe.calories
                            }
                        }}
                        >
                            <Recipe
                                title={recipe.recipe.label}
                                image={recipe.recipe.image}
                            />
                        </Link>
                    </button>
                );
            })}
        </div>
    );
}

export default Cards;