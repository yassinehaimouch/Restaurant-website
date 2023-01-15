import React from "react";
import Dish from "../../../components/dish/Dish";
import img1 from "../../../assets/food-1.png";
import "./dishes.css";

const Dishes = () => {
  return (
    <section className="diches-container">
      <h1 className="diches-title">Top Dishes</h1>
      <div className="diches">
        <Dish title="Vegan Salad bowl" price="12" image={img1} />
        <Dish title="Vegan Salad bowl" price="12" image={img1} />
        <Dish title="Vegan Salad bowl" price="12" image={img1} />
        <Dish title="Vegan Salad bowl" price="12" image={img1} />
        <Dish title="Vegan Salad bowl" price="12" image={img1} />
        <Dish title="Vegan Salad bowl" price="12" image={img1} />
      </div>
    </section>
  );
};

export default Dishes;
