import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import OraDoc from '../../documentation.json'

function DocumentationSidebar() {
  return (
    <div className="DocumentationSidebar">
      {
        Object.keys(OraDoc).map((className) =>
          <Link to={`/documentation/${className}`}>{className}</Link>
        )
      }
    </div>
  );
}

export default DocumentationSidebar;
