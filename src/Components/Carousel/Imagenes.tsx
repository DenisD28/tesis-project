import React, { useEffect, useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    '../src/img/pexels-ivan-j.jpg',
    '../src/img/heather-ford-f1Z9w1efx3w-unsplash.jpg',
    '../src/img/pexels-photo-4110101.jpeg',
    '../src/img/pexels-photo-8765706.jpeg',
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
        <div className="w-full bg-gray-200 ">
            <div className="max-w-screen-xl mx-auto">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    interval={3000}
                    selectedItem={carouselIndex}
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Imagen ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );

};

