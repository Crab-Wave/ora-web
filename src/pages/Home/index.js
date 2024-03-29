import React from 'react';
import './style.scss';

import Navbar from '../../components/Navbar';
import GroupMember from '../../components/GroupMember';

import specifications from '../../assets/specifications.pdf';
import outline1 from '../../assets/outline1.pdf';
import report1 from '../../assets/report1.pdf';
import outline2 from '../../assets/outline2.pdf';
import report2 from '../../assets/report2.pdf';
import outline3 from '../../assets/outline3.pdf';
import report3 from '../../assets/report3.pdf';
import installationManual from '../../assets/installation_manual.pdf';
import userManual from '../../assets/user_manual.pdf';
import setup from '../../assets/setup.exe';

import github from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg';

function Home() {
  return (
    <div className="Home">
      <Navbar />

      <section className="Accueil">
        <h1>ORA</h1>
        <p>ORA est une application qui vous permet de partager directement vos fichiers avec vos amis grâce à la technologie Peer-to-Peer.</p>
      </section>

      <section className="Presentation"
               id="presentation">
        <h1>Présentation</h1>
        <p>
          ORA est une application développée en C# par 4 étudiants en école d'ingénieur dans le cadre d'un projet de groupe.
          Notre but est de proposer un moyen rapide et sécurisé de partager des fichiers en utilisant la technologie Peer-to-Peer.
        </p>
        <br />
        <p>
          "Mais qu'est-ce que le Peer-to-Peer ?"
        </p>
        <br />
        <p>
          Eh bien la plupart des services et logiciels de stockage et partage de fichier, tel que Dropbox ou iCloud,
          marchent selon une architecture client-serveur. Vous (un client) envoyez une requête (par exemple, télécharger un fichier)
          à un serveur qui va traiter cette requête. Dans le modèle Peer-to Peer, chaque client fait lui même office de serveur, et
          peuvent ainsi partager des fichiers directement entre eux sans avoir besoin d'un intermédiaire.
        </p>
      </section>

      <section className="Group"
               id="groupe">
        <h1>Groupe</h1>
        <p>ORA est actuellement développé par Crab Wave: un groupe d'étudiants en première année à l'EPITA.</p>

        <div className="Group-members">
          <div className="Group-members-column">
            <GroupMember name="Léo Benito"
                         picture="https://avatars2.githubusercontent.com/u/31016188"
                         github="TrAyZeN"
                         mail="lbenitoproduction@gmail.com"
                         linkedin="leo-benito" />

            <GroupMember name="Raffaël Moraisin"
                         picture="https://avatars3.githubusercontent.com/u/59165594"
                         github="raffaelmoraisin"
                         mail="raffael.moraisin@epita.fr"
                         linkedin="" />
          </div>

          <div className="Group-members-column">
            <GroupMember name="Adam Thibert"
                         picture="https://avatars3.githubusercontent.com/u/9221023"
                         github="Adamaq01"
                         mail="adamthibert01@gmail.com"
                         linkedin="" />

            <GroupMember name="Pierre-Corentin Auger"
                         picture="https://avatars1.githubusercontent.com/u/59179789"
                         github="PierreCorentin"
                         mail="pierre-corentin.auger@epita.fr"
                         linkedin="" />
          </div>
        </div>
      </section>

      <section className="Downloads"
               id="telechargements">
        <h1>Téléchargements</h1>

        <div className="Downloads-item">
          <h2>ORA</h2>

          <a href="https://github.com/Crab-Wave/ora"
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Télécharger
            </button>
          </a>
          <a href="https://github.com/Crab-Wave/ora"
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Code source
            </button>
          </a>
        </div>

        <div className="Downloads-item">
          <h2>ORA tracker</h2>

          <a href="https://github.com/Crab-Wave/ora-tracker"
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Télécharger
            </button>
          </a>
          <a href="https://github.com/Crab-Wave/ora-tracker"
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Code source
            </button>
          </a>
        </div>

        <div className="Downloads-item">
          <h2>Cahier des charges</h2>
          <a href={specifications}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Télécharger
            </button>
          </a>
          <a href="https://github.com/Crab-Wave/ora-specs"
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Code source
            </button>
          </a>
        </div>

        <div className="Downloads-item">
          <h2>Soutenance 1</h2>
          <a href={report1}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Rapport
            </button>
          </a>
          <a href={outline1}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Plan
            </button>
          </a>
          <a href="https://github.com/Crab-Wave/ora-presentation"
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Code source
            </button>
          </a>
        </div>

        <div className="Downloads-item">
          <h2>Soutenance 2</h2>
          <a href={report2}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Rapport
            </button>
          </a>
          <a href={outline2}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Plan
            </button>
          </a>
          <a href="https://github.com/Crab-Wave/ora-presentation"
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Code source
            </button>
          </a>
        </div>

        <div className="Downloads-item">
          <h2>Soutenance 3</h2>
          <a href={report3}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Rapport
            </button>
          </a>
          <a href={outline3}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Plan
            </button>
          </a>
          <a href="https://github.com/Crab-Wave/ora-presentation"
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Code source
            </button>
          </a>
        </div>
        <div className="Downloads-item">
          <h2>Production</h2>
          <a href={setup}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Installeur
            </button>
          </a>
          <a href={installationManual}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Manuel d'installation
            </button>
          </a>
          <a href={userManual}
             target="_blank"
             rel="noopener noreferrer">
            <button>
              Manuel d'utilisation
            </button>
          </a>
        </div>
      </section>

      <section className="Contacts" id="contacts">
        <h1>Nous contacter</h1>

        <div className="Contacts-links">
          <a href="https://github.com/Crab-Wave"
             target="_blank"
             rel="noopener noreferrer">
            <img src={github}
                 alt="GitHub icon" />
          </a>

          <a href="mailto:contact@crabwave.com">
            <img src={gmail}
                 alt="Gmail icon" />
          </a>
        </div>
      </section>

      <footer>
        <p>© 2020 Crab Wave - All rights reserved</p>
      </footer>
    </div>
  );
}

export default Home;
