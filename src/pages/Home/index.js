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

        <section className="Presentation">
          <h1>Présentation</h1>
        </section>

        <section className="Team">
          <h1>Groupe</h1>
        </section>

        <section className="Download">
          <h1>Téléchargement</h1>
        </section>
      </div>
    );
  }
}

export default Home;
