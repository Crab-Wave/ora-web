import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import OraDoc from '../../../documentation.json'

function Sidebar(props) {
  return (
    <div className="DocumentationSidebar">
      <Link to="/documentation">Welcome</Link>

      {Object.keys(OraDoc).map(className =>
        <Link to={`/documentation/${className}`} onClick={() => props.handler(className)}>{className}</Link>
      )}
    </div>
  );
}

export default Sidebar;
