import React from 'react';
import './style.scss';

import github from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg';

function GroupMember(props) {
  return (
    <div className="GroupMember">
      <img src={props.picture}
            alt="Member" />

      <div className="GroupMember-information">
        <h2>{props.name}</h2>

        <div className="GroupMember-links">
          <a href={props.github}
             target="_blank"
             rel="noopener noreferrer">
            <img src={github}
                  alt="GitHub icon" />
          </a>

          <a href={"mailto:" + props.mail}>
            <img src={gmail}
                  alt="Gmail icon" />
          </a>

          <a href={props.linkedin}
             target="_blank"
             rel="noopener noreferrer">
            <img src={linkedin}
                  alt="LinkedIn icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GroupMember;
