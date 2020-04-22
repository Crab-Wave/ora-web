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

  renderExample(example) {
    if (Object.keys(example).length === 0)
      return null;

    return (
      <div className="Documentation-example">
        <h1>Examples</h1>

        <p>{example.text}</p>
        <pre>
          <code>
            {example.code}
          </code>
        </pre>
      </div>
    )
  }

  renderConstructors(constructors) {
    if (constructors.length === 0)
      return null;

    return (
      <div className="Documentation-methods">
        <h1>Constructors</h1>

        {constructors.map(
          c => <Method method={c} />
        )}
      </div>
    );
  }

  renderMethods(methods) {
    if (methods.length === 0)
      return null;

    return (
      <div className="Documentation-methods">
        <h1>Methods</h1>

        {methods.map(
          m => <Method method={m} />
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="Documentation">
        <Navbar />
        <div className="Documentation-section">
          <Sidebar handler={(className) => this.setState({ className })} />

          <div className="Documentation-body">
            <h1 className="Documentation-classname">{OraDoc[this.state.className].name}</h1>
            <p>Namespace: {OraDoc[this.state.className].namespace}</p>
            <p>{OraDoc[this.state.className].summary}</p>

            {this.renderExample(OraDoc[this.state.className].example)}
            {this.renderConstructors(OraDoc[this.state.className].constructors)}
            {this.renderMethods(OraDoc[this.state.className].methods)}
          </div>
        </div>
      </div>
    );
  }
}

export default Documentation;
