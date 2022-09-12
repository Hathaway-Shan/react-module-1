import React from 'react';

import './Main.css';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';
import background from '../../background.png';
export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }} className="App"></main>;
}
