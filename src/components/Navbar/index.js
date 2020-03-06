import React from 'react';
import './style.scss';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <a href="/#presentation">Présentation</a>
        <a href="/#groupe">Groupe</a>
        <a href="/#telechargements">Téléchargements</a>
        <a href="/#contacts">Nous contacter</a>
        <a href="/documentation">Documentation</a>
      </div>
    );
  }
}

export default Navbar;
