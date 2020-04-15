import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Documentation/Sidebar';
import Method from '../../components/Documentation/Method';
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
        <Sidebar />

        <div className="Documentation-body">
          <h1>{this.state.className}</h1>
          <p>{OraDoc[this.state.className].summary}</p>

          <div className="Documentation-example">
            <h1>Examples</h1>

            <p>{OraDoc[this.state.className].example.text}</p>
            <pre>
              <code>
                {OraDoc[this.state.className].example.code}
              </code>
            </pre>
          </div>

          <div className="Documentation-methods">
            <h1>Methods</h1>

            {OraDoc[this.state.className].methods.map(
              m => <Method method={m} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Documentation;
