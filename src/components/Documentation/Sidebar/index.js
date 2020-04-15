import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import OraDoc from '../../../documentation.json'

function Sidebar() {
  return (
    <div className="DocumentationSidebar">
      <Link to="/documentation">Welcome</Link>

      {Object.keys(OraDoc).map(className =>
        <Link to={`/documentation/${className}`}>{className}</Link>
      )}
    </div>
  );
}

export default Sidebar;
