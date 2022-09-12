import React from 'react';

import './Main.css';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';
import background from '../../background.png';
export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }} className="App">
      {animals.map((animal) => (
        //can use the spread operator here to get all the props of animals without writing them by hand
        <Animal key={animal.name} {...animal} />
      ))}
    </main>
  );
}
