import React from 'react';
import './style.scss';

import Navbar from '../../components/Navbar';
import GroupMember from '../../components/GroupMember';

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
        </section>

        <section className="Downloads" id="telechargements">
          <h1>Téléchargements</h1>
          <h2><a href="https://github.com/Crab-Wave/ora-specs/releases/download/v1.0/specifications.pdf">Cahier des charges</a></h2>
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
