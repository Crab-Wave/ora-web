import React from 'react';
import './style.scss';

const renderParameters = (param) => {
  return (
    <div>
      <h3>Parameters</h3>
      {
        param.map(p => (
          <div>
            <p>{`${p.name} ${p.type}`}</p>
            <p>{p.summary}</p>
          </div>
        ))
      }
    </div>
  )
};

function Method(props) {
  return (
    <div className="Method">
      <h2>{props.method.prototype}</h2>
      <p>{props.method.summary}</p>
      {
        !props.method.hasOwnProperty("param") ? null :
        renderParameters(props.method.param)
      }
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
