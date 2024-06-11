import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    '/pexels-ivan-j.jpg',
    '/heather-ford-f1Z9w1efx3w-unsplash.jpg',
    '/pexels-photo-4110101.jpeg',
    '/pexels-photo-8765706.jpeg',
];

export const Imagenes: React.FC = () => {

    const [carouselIndex, setCarouselIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            // Incrementa el índice para avanzar al siguiente elemento
            setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia cada 3 segundos

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="w-full h-full">
            <div className="w-full h-full">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    interval={3000}
                    selectedItem={carouselIndex}
                    className={"w-full h-full"}
                >
                    {images.map((image, index) => (
                        <div key={index} className={"w-full h-full"}>
                            <img src={image} alt={`Imagen ${index + 1}`} className={"w-full h-full object-cover object-center"} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );

};

