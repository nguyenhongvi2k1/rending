import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import CategoryPage from "./pages/categoryPage";
import FoodPage from "./pages/foodPage";
import TechnologyPage from "./pages/technologyPage";
import TravelPage from "./pages/travelPage";
import BusinessPage from "./pages/businessPage";


function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path ="/" component = {HomePage}/>
        <Route path ="/category" component = {CategoryPage}/>
        <Route path ="/food" component = {FoodPage}/>

        <Route path ="/technology" component = {TechnologyPage}/>
        <Route path ="/travel" component = {TravelPage}/>
        <Route path ="/business" component = {BusinessPage}/>

      </Router>
    </Fragment>
  );
}

export default App;