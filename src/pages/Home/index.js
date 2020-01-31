import React from 'react';
import './style.scss';

import Navbar from '../../components/Navbar';
import Introduction from '../../components/Introduction';
import Presentation from '../../components/Presentation';
import Team from '../../components/Team';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <Introduction />
        <Presentation />
        <Team />
      </div>
    );
  }
}

export default Home;
