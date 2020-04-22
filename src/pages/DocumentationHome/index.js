import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Documentation/Sidebar';
import './style.scss';

function DocumentationHome() {
  return (
    <div className="DocumentationHome">
      <Navbar />
      <Sidebar handler={() => { }} />

      <div className="DocumentationHome-body">
        <h1>ORA API documentation</h1>
        <p>Welcome to the ORA API documentation pages.</p>
      </div>
    </div>
  );
}

export default DocumentationHome;
