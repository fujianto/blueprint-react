import ReactDOM from 'react-dom';
import React from 'react';
import style from './style.css'
import logoWeb from './assets/images/logo.jpg'

const App = () => {
  return (
    <div className="container">
      <img src={logoWeb} />
      <h1 className='title'>React ESBUILD Blueprint!</h1>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
