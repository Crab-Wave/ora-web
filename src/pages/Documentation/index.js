import React from 'react';
import Navbar from '../../components/Navbar';
import DocumentationSidebar from '../../components/DocumentationSidebar';
import './style.scss';

import OraDoc from '../../documentation.json';

class Documentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "className": this.props.match.params.className,
    };
  }

  render() {
    return (
      <div className="Documentation">
        <Navbar />
        <DocumentationSidebar />

        <div className="Documentation-class">
          <h1>{this.state.className}</h1>
          <p>{OraDoc[this.state.className].summary}</p>
        </div>
      </div>
    );
  }
}

export default Documentation;
