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

        <div className="DocumentationHome-section">
          <h2>Vocabulary</h2>
          <ul>
            <li>Users are called Members within a Cluster.</li>
            <li>Machines used by Members are called Nodes.</li>
            <li>Groups of Nodes sharing files are called Clusters.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DocumentationHome;
