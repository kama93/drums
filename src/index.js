import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Complete from './Complete.js'
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import arrowSquares from './arrowSquares.js'



document.addEventListener("keydown", event => {
   let square = arrowSquares.filter(square => square.letter === event.key.toUpperCase())

    if (square.length===1){
        square[0].music.play() 
    }
});


ReactDOM.render(
    <Complete />,
  document.getElementById('root')
);

serviceWorker.unregister();
