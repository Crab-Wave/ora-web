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
          <p>ORA est actuellement développé par Crab Wave: un groupe d'étudiants à EPITA</p>
          <div className="Group-members">
            <div className="Group-member">
              <img src="https://avatars2.githubusercontent.com/u/31016188"
                   alt="leo-img"></img>
              <h1>Léo Benito</h1>
            </div>

            <div className="Group-member">
              <img src="https://avatars3.githubusercontent.com/u/59165594"
                   alt="raffael-img"></img>
              <h1>Raffaël Moraisin</h1>
            </div>

            <div className="Group-member">
              <img src="https://avatars3.githubusercontent.com/u/9221023"
                   alt="adam-img"></img>
              <h1>Adam Thibert</h1>
            </div>

            <div className="Group-member">
              <img src="https://avatars1.githubusercontent.com/u/59179789"
                   alt="pierre-corentin-img"></img>
              <h1>Pierre-Corentin Auger</h1>
            </div>
          </div>
        </section>

        <section className="Downloads" id="telechargements">
          <h1>Téléchargements</h1>
        </section>

        <section className="Contacts" id="contacts">
          <h1>Contacts</h1>
        </section>
      </div>
    );
  }
}

export default Home;
