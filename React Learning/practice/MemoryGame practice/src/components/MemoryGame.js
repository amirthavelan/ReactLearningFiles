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

    const [clicks, setClicks] = useState(null);

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


    const checkMatch = (image) => {

        if(!clicks){
            setClicks(image)
            setDisplayImages((prevImages) => {
                return prevImages.map((img) => {
                 if(img.id === image.id){
                    return {
                        ...img,
                        isFlipped: true,
                    }
                 }
                 return img;  
                })
            })
        }

        else{
            setDisplayImages((prevImages) => {
                return prevImages.map((img) => {
                    if(image.id === img.id){
                        return {
                            ...img,
                            isFlipped: true,
                        }
                    }
                    return img;
                })
            })

            if(clicks.src !== image.src){
                
                    setTimeout(() => {
                        setDisplayImages((prevImages) => {
                            return prevImages.map((img) => {
                                if(img.id === clicks.id || img.id === image.id){
                                    return {
                                        ...img,
                                        isFlipped: false,
                                    }
                                }
                                return img;
                            })
                        });
                        setClicks(null);

                    }, 1000)
                


            }
            setClicks(null);
        }

       

    }


    return (
        <div className="playGround">
            {
                displayImages.map((img, index) =>{
                    return (
                        <Card 
                        imageObj={img}
                        key={"image"+index}
                        handleClick={checkMatch}
                        />
                    )
                } )
            }
        </div>
    );
}

export default MemoryGame;