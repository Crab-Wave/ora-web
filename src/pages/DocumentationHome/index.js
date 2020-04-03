import React from 'react';
import Navbar from '../../components/Navbar';
import DocumentationSidebar from '../../components/DocumentationSidebar';
import './style.scss';

function DocumentationHome() {
  return (
    <div className="DocumentationHome">
      <Navbar />
      <DocumentationSidebar />

      <div className="DocumentationHome-body">
        <h1>Welcome to ORA documentation pages</h1>
      </div>
    </div>
  );
}

export default DocumentationHome;
