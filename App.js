import  React ,{ Fragment } from "react";
import Header from "./component/Layout/Header"
import MealSummary from "./component/Meals/MealSummary";
import Meal from "./component/Meals/Meal";
import Cart from "./component/Cart/Cart"

function App() {
  return (
    <>
    <Cart />
      <Header />
      <MealSummary />
      <Meal />

    </>
  );
}
export default App;
