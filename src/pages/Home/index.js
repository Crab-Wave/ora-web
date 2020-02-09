import React from 'react';
import './style.scss';

import Navbar from '../../components/Navbar';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Navbar />

        <section className="Accueil">
          <h1>ORA</h1>
          <p>ORA est un logiciel de stockage de fichier en P2P</p>
        </section>

        <section className="Presentation" id="presentation">
          <h1>Présentation</h1>
        </section>

        <section className="Group" id="groupe">
          <h1>Groupe</h1>
          <p>ORA est actuellement développé par Crab Wave: un groupe d'étudiants en première année à EPITA</p>
          <div className="Group-members">
            <div className="Group-member">
              <img src="https://avatars2.githubusercontent.com/u/31016188"
                   alt="leo-img"></img>
              <div>
                <h1>Léo Benito</h1>
                <h1><a href="https://github.com/TrAyZeN">github</a></h1>
                <h1><a>mail</a></h1>
                <h1><a>linkedin</a></h1>
              </div>
            </div>

            <div className="Group-member">
              <img src="https://avatars3.githubusercontent.com/u/59165594"
                   alt="raffael-img"></img>
              <div>
                <h1>Raffaël Moraisin</h1>
                <h1><a href="https://github.com/raffaelmoraisin">github</a></h1>
                <h1><a>mail</a></h1>
                <h1><a>linkedin</a></h1>
              </div>
            </div>

            <div className="Group-member">
              <img src="https://avatars3.githubusercontent.com/u/9221023"
                   alt="adam-img"></img>
              <div>
                <h1>Adam Thibert</h1>
                <h1><a href="https://github.com/Adamaq01">github</a></h1>
                <h1><a>mail</a></h1>
                <h1><a>linkedin</a></h1>
              </div>
            </div>

            <div className="Group-member">
              <img src="https://avatars1.githubusercontent.com/u/59179789"
                   alt="pierre-corentin-img"></img>
              <div>
                <h1>Pierre-Corentin Auger</h1>
                <h1><a href="https://github.com/PierreCorentin">github</a></h1>
                <h1><a>mail</a></h1>
                <h1><a>linkedin</a></h1>
              </div>
            </div>
          </div>
        </section>

        <section className="Downloads" id="telechargements">
          <h1>Téléchargements</h1>
          <h2><a href="https://github.com/Crab-Wave/ora-specs/releases/download/v1.0/specifications.pdf" target="_blank">Cahier des charges</a></h2>
          <h2><a href="https://github.com/Crab-Wave/ora">ORA</a></h2>
          <h2><a href="https://github.com/Crab-Wave/ora-tracker">Tracker ORA</a></h2>
        </section>

        <section className="Contacts" id="contacts">
          <h1>Contacts</h1>
        </section>
      </div>
    );
  }
}

export default Home;
