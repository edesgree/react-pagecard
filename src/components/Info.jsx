import React from 'react';
import Photo from '../assets/edouard.jpg';

const name = 'Edouard Desgrée';
function Info() {
  return (
    <header className="section-info">
      <img src={Photo} alt={name} className="photo" />
      <h1>{name}</h1>
      <span className="subtitle">Front End Developer</span>
      <p>
        <a href="https://github.com/edesgree">my projects</a>
      </p>
      <div className="buttons">
        <a className="button" href="mailto:edouard.desgree@gmail.com">
          Contact me
        </a>
      </div>
    </header>
  );
}
export default Info;
