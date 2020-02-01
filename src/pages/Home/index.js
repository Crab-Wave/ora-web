import React from 'react';
import './style.scss';

import Navbar from '../../components/Navbar';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Navbar />

        <section className="Introduction">
          <h1>Introduction</h1>
        </section>

        <section className="Presentation" id="presentation">
          <h1>Présentation</h1>
        </section>

        <section className="Team" id="equipe">
          <h1>Groupe</h1>
        </section>

        <section className="Downloads" id="telechargements">
          <h1>Téléchargements</h1>
        </section>
      </div>
    );
  }
}

export default Home;
