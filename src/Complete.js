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
        <div className='butRec' >
            <button className="buttonRecord" >
                <h1 className='buttonFont'>Record</h1>
            </button>
        </div>
    </element>)
};

 export default Complete