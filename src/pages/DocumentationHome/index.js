import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Documentation/Sidebar';
import './style.scss';

function DocumentationHome() {
  return (
    <div className="DocumentationHome">
      <Navbar />
      <Sidebar />

      <div className="DocumentationHome-body">
        <h1>Welcome to ORA documentation pages</h1>
      </div>
    </div>
  );
}

export default DocumentationHome;
