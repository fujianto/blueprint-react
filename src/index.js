import ReactDOM from 'react-dom';
import React from 'react';
import style from './style.css'

const App = () => {
  return (
    <div className="container">
      <h1 className='title'>React ESBUILD Blueprint!</h1>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
