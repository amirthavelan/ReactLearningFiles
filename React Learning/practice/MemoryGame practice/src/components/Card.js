import React from 'react';

function Card({imageObj, handleClick}){
    return(
        <div className="card" onClick={() => handleClick(imageObj)}>
            <img
                className="card-image"
                src={imageObj.isFlipped ? imageObj.src : "/images/question-mark.jpg"}
                alt="image"
                
            />
        </div>
    );
}

export default Card;