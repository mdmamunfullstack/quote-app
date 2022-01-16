import React from 'react';
import '../styles/Qoute.css'

const Quote = ({quote})=> {
    debugger;
    return ( 
        <div className='qoute-container'>
            <p className='qoute'>"{quote.quote}"</p>
            <p className='qoute-author'>
                Quote by <span className="highlight">{quote.character} </span> from  
                <span className="highlight"> {quote.anime}</span>
                </p>
        </div> 
    );
}

export default Quote;