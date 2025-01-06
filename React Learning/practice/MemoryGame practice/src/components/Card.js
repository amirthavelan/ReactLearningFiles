import React from 'react';

function Card({imageObj}){
    return(
        <div className="card">
            <img
                className="card-image"
                src={imageObj.isFlipped ? imageObj.src : ""}
                alt="image"
                
            />
        </div>
    );
}

export default Card;