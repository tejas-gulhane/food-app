import  React ,{ Fragment } from "react";
import Header from "./component/Layout/Header"
import MealSummary from "./component/Meals/MealSummary";
import Meal from "./component/Meals/Meal";

function App() {
  return (
    <>
      <Header />
      <MealSummary />
      <Meal />

    </>
  );
}
export default App;
