import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";

//useParams is a part of URL after /:
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

//XI
//all functionality is in this component
const SingleCocktail = () => {
  //1.
  //useParams is a part of URL after /:
  //=> this is 'id': destructuring 'id'
  const { id } = useParams();
  console.log(id);
  //state with default values
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  //
  //every time the Component renders, or 'id' changes =>
  //fetch the info about that specific cocktail:
  useEffect(
    () => {
      // loading=>true
      setLoading(true);
      //get specific cocktail
      async function getCocktail() {
        //fetch data
        try {
          const response = await fetch(`${url}${id}`);
          // `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
          // https: //www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

          //get data
          const data = await response.json();
          console.log(data); //{drinks: Array(1)}

          //if drink exists:
          if (data.drinks) {
            //destructure 'data.drinks' array
            //grab properties and give them alias
            const {
              strDrink: name,
              strDrinkThumb: image,
              strAlcoholic: info,
              strCategory: category,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            } = data.drinks[0];
            //data.drinks is an array with [0] first item in the array

            //set up 'ingredients' array
            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];

            //create a new Cocktail (shorthand)
            const newCocktail = {
              name,
              image,
              info,
              category,
              glass,
              instructions,
              ingredients,
            };
            //update state to new Cocktail
            setCocktail(newCocktail);
          }
          //---------------------
          //if drinks doesn't exist
          //set Cocktail to null and Loading to false
          else {
            //setCocktail back to null
            setCocktail(null);
          }
          //in both cases, set Loading to false
          setLoading(false);
          //==================
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
        //====================
        //set loading to false
        setLoading(false);
      }
      //invoke getCocktail
      getCocktail();
    },
    //when ID changes => invoke this useEffect
    [id]
  );

  //-----------------
  if (loading) {
    return <Loading />;
  }
  //----------------
  //if cocktail doesn't exist
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  //if cocktail exists:
  const { name, image, category, info, glass, instructions, ingredients } = cocktail;

  //=================
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn tbn-primary">
        back home
      </Link>

      <h2 className="section-title">{name}</h2>
      <div className="dirnk">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span> {name}
          </p>
          <p>
            <span className="drink-data">category:</span> {category}
          </p>
          <p>
            <span className="drink-data">info:</span> {info}
          </p>
          <p>
            <span className="drink-data">glass:</span> {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span> {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {/*map over ingrediets */}
            {ingredients.map((item, index) => {
              /*if ingredient in API is empty, don't display it */
              return item ? <span key={index}>{`${item} `}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
