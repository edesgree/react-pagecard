import React from 'react';
import Photo from '../assets/edouard.jpg';
import IconEmail from '../assets/icon-email.svg';

const name = 'Edouard Desgrée';
function Info() {
  return (
    <header className="section-info">
      <img src={Photo} alt={name} className="photo" />
      <h1>{name}</h1>
      <span className="subtitle">Front End Developer</span>
      <p>
        <a href="https://github.com/edesgree">My projects</a>
      </p>
      <div className="buttons">
        <a className="button with-icon" href="mailto:edouard.desgree@gmail.com">
          <img src={IconEmail} alt="email" />
          Contact me
        </a>
      </div>
    </header>
  );
}
export default Info;
