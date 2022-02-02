import React, { useState, useEffect } from 'react'
import "./App.css"
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom"
import Item from "./Item"
import Cards from './Cards'

const App = () => {
  const APP_ID = "13601c8f";
  const APP_KEY = "9e0b316194071e9adb95aca19539676a";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [btnSearch, setBtnSearch] = useState("chicken");
  const exampleReq = `https://api.edamam.com/search?q=${btnSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`

  // https://api.edamam.com/search?q=chicken&app_id=13601c8f&app_key=9e0b316194071e9adb95aca19539676a

  useEffect(() => {
    getRecipes();
  }, [btnSearch]);

  const getRecipes = async () => {
    const res = await fetch(exampleReq);
    const data = await res.json();
    setRecipes(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setBtnSearch(search);
    setSearch("");
  }

  return (
    <div className="App">
      <Router>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-input"
            type="text" value={search}
            onChange={updateSearch} />
          <button
            className="search-btn"
            type="submit">
            Search
          </button>
        </form>
        <Switch>
          <Route exact path={["/", "/home"]} component={() => <Cards recipes={recipes} />} />
          <Route path="/card-page/:id" component={Item} />
        </Switch>

      </Router>

    </div>
  )
}

export default App;
