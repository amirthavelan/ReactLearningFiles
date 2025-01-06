import React, { useEffect, useState } from 'react';
import Card from './Card';

function MemoryGame({images}){

    const newImages = [...images, ...images].sort(() => Math.random() - 0.5);
    const [displayImages, setDisplayImages] = useState(
        newImages.map((img, index) => {
            return {
                id: index,
                src: img,
                isFlipped: true,
            }
        })
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayImages((prevImages) => {
                return prevImages.map((img) => {
                    return {
                        ...img,
                        isFlipped: false,
                    } 
                })
            });
        }, 7000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="playGround">
            {
                displayImages.map((img, index) =>{
                    return (
                        <Card 
                        imageObj={img}
                        key={"image"+index}
                        />
                    )
                } )
            }
        </div>
    );
}

export default MemoryGame;