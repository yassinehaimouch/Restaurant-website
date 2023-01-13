import React from 'react';
import Image1 from '../../../assets/food-3.png';
import Image2 from '../../../assets/food-1.png';
import Button from '../../../components/Button/Button'
import Special from '../../../components/special/Special';
import './specials.css';

const Specials = () => {
  return (
    <section className='specials'>
      <div className="specials-right-side">
        <Special className='special-item special' image={Image1} title="Sweet Potato Fries Bowl" price="18" desc="These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder, garlic, and onion, these spicy sweet potato fries are full of flavor."/>
        <Special className='special-item special' image={Image2} title="Vegan Salad bowl" price="15" desc="Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion of flavors and textures."/>
      </div>
      <div className='specials-left-side'>
        <h1>Our Specials</h1>
        <h3>All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are delivered to our customers</h3>
        <Button value="Book Table"/>
      </div>
    </section>
  )
}

export default Specials