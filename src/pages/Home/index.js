import React from 'react';
import './style.scss';

import Navbar from '../../components/Navbar';
import GroupMember from '../../components/GroupMember';

import specifications from '../../assets/specifications.pdf';

import github from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Navbar />

        <section className="Accueil">
          <h1>ORA</h1>
          <p>ORA est un logiciel de stockage de fichier en P2P</p>
        </section>

        <section className="Presentation"
                 id="presentation">
          <h1>Présentation</h1>
        </section>

        <section className="Group"
                 id="groupe">
          <h1>Groupe</h1>
          <p>ORA est actuellement développé par Crab Wave: un groupe d'étudiants en première année à EPITA</p>

          <div className="Group-members">
            <div className="Group-members-column">
              <GroupMember name="Léo Benito"
                           picture="https://avatars2.githubusercontent.com/u/31016188"
                           github="https://github.com/TrAyZeN"
                           mail=""
                           linkedin="" />

              <GroupMember name="Raffaël Moraisin"
                           picture="https://avatars3.githubusercontent.com/u/59165594"
                           github="https://github.com/raffaelmoraisin"
                           mail=""
                           linkedin="" />
            </div>

            <div className="Group-members-column">
              <GroupMember name="Adam Thibert"
                           picture="https://avatars3.githubusercontent.com/u/9221023"
                           github="https://github.com/Adamaq01"
                           mail=""
                           linkedin="" />

              <GroupMember name="Pierre-Corentin Auger"
                           picture="https://avatars1.githubusercontent.com/u/59179789"
                           github="https://github.com/PierreCorentin"
                           mail=""
                           linkedin="" />
            </div>
          </div>
        </section>

        <section className="Downloads"
                 id="telechargements">
          <h1>Téléchargements</h1>

          <div className="Downloads-ora">
            <h2>ORA</h2>
            <p>L'application ORA</p>
            <a href="https://github.com/Crab-Wave/ora">
              <button>
                Télécharger
              </button>
            </a>
          </div>

          <div className="Downloads-ora-tracker">
            <h2>ORA tracker</h2>
            <p>Le tracker ORA</p>
            <a href="https://github.com/Crab-Wave/ora-tracker">
              <button>
                Télécharger
              </button>
            </a>
          </div>

          <div className="Downloads-reports">
            <h2>Rapports</h2>
            <p>Tous les documents ecrits</p>
            <h2><a href={specifications}
                  target="_blank"
                  rel="noopener noreferrer">Cahier des charges</a></h2>
          </div>
        </section>

        <section className="Contacts" id="contacts">
          <h1>Nous contacter</h1>
          <div className="Contacts-links">
            <a href="https://github.com/Crab-Wave"
               target="_blank"
               rel="noopener noreferrer">
              <img src={github} />
            </a>

            <a href="mailto:crabwave.contact@gmail.com">
              <img src={gmail} />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
