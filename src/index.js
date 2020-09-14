import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Progress from './Progress';
import Baby from './Baby';
import * as serviceWorker from './serviceWorker';

const Button =()=> {
  const ButtonArray=[];
  for (var i=0;i<10;i++){
  ButtonArray.push(<button value={true} onClick={getValue}>第{i}個按鈕</button>)
  }
  return ButtonArray
}

const testReactFragment =()=> {
  return(
    <React.Fragment>
      <button>test</button>
      <h1>test2</h1>
    </React.Fragment>
  );
}

const getValue=()=>{
  document.getElementById('show-area').innerHTML="波波加油 波波加油";
}


ReactDOM.render(
  <div>
    <App/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
