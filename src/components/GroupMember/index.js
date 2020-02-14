import React from 'react';
import './style.scss';

import github from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg';

class GroupMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="GroupMember">
        <img src={this.props.picture}
             alt="member-picture" />

        <h1>{this.props.name}</h1>

        <div className="GroupMember-links">
          <a href={this.props.github}>
            <img src={github}
                 alt="github-icon" />
          </a>

          <a href={this.props.mail}>
            <img src={gmail}
                 alt="gmail-icon" />
          </a>

          <a href={this.props.linkedin}>
            <img src={linkedin}
                 alt="linkedin-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default GroupMember;
