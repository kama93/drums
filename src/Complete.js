import React from 'react';
import arrowSquares from './arrowSquares';
import Square from './Square'
import './complete.css'



const Complete= ()=>
{ return (
    <element >
        <div className='squares'>
            {arrowSquares.map(arrowSquare => (
                <Square id={arrowSquare.id} 
                    letter={arrowSquare.letter}
                    name={arrowSquare.name}
                    music={arrowSquare.music}/>))}
        </div>
    </element>)
};

 export default Complete