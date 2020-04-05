import React from 'react';
import arrowSquares from './arrowSquares';
import Square from './Square'
import './complete.css'

const Complete= ()=>
{ return (
    <div className='squares'>
        {arrowSquares.map(arrowSquare => (
            <Square id={arrowSquare.id} 
                letter={arrowSquare.letter}
                name={arrowSquare.name}
                music={arrowSquare.music}/>))}
    </div>)
};

 export default Complete