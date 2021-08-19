import React, { Fragment } from "react";
import Card from "../components/Card";
import urlKandM from "../assets/images/rickmorty.png";

import "./styles/Portfolio.css";

const Portfolio = () => (
  <Fragment>
    <section className='Portfolio'>
      <h2 className='Portfolio__title'>$ls /Proyectos</h2>
      <div className='Portfolio__container'>
        <Card
          url={urlKandM}
          alt='App Rick and Morty'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque exercitationem similique.'
          title='App Rick And Morty'
        />

        <Card
          url={urlKandM}
          alt='App Rick and Morty'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque exercitationem similique.'
          title='App Rick And Morty'
        />

        <Card
          url={urlKandM}
          alt='App Rick and Morty'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque exercitationem similique.'
          title='App Rick And Morty'
        />
      </div>
    </section>
  </Fragment>
);

export default Portfolio;
