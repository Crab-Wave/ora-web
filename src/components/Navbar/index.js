import React from 'react';
import './style.scss';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <a href="/#presentation">Presentation</a>
        <a href="/#team">Equipe</a>
        <a href="/documentation">Documentation</a>
      </div>
    );
  }
}

export default Navbar;
