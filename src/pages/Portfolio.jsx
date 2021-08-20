import React, { Fragment } from "react";
import Card from "../components/Card";
import urlKandM from "../assets/images/rickmorty.png";
import urlPlatziBadges from "../assets/images/platzibadges.png";
import urlJuego from "../assets/images/juego.png";

import "./styles/Portfolio.css";

const Portfolio = () => (
  <Fragment>
    <section className='Portfolio'>
      <h2 className='Portfolio__title'>$ls /Proyectos</h2>
      <div className='Portfolio__container'>
        <Card
          url={urlKandM}
          location='https://jeiffergarciag.github.io/spa-Javascript_Vanilla/'
          alt='App Rick and Morty'
          description='Spa creada con la api de Rick and morty, usando vanilla JavaScript.'
          title='App Rick And Morty'
        />

        <Card
          url={urlPlatziBadges}
          location='https://platzi-badges-jeifferg.herokuapp.com/'
          alt='Platzi Badges'
          description='App de Badges creada con React JS, React Router.'
          title='Platzi Badges'
        />

        <Card
          location='https://jeiffergarcia.github.io/Prueba-Animasles/'
          url={urlJuego}
          alt='Juego animales'
          description='Juego para reconocer los sonidos de animales creado en javascript vanilla  .'
          title='Juego de animale'
        />
      </div>
    </section>
  </Fragment>
);

export default Portfolio;
