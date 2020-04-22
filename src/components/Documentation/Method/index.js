import React from 'react';
import './style.scss';

function Method(props) {
  return (
    <div className="Method">
      <h2>{props.method.prototype}</h2>
      <p>{props.method.summary}</p>
      <h3>Parameters</h3>
      <p>{props.method.param.text}</p>
      {
        !props.method.hasOwnProperty("returns") ? null :
        <div>
          <h3>Returns</h3>
          <p>{props.method.returns}</p>
        </div>
      }
    </div>
  );
}

export default Method;
