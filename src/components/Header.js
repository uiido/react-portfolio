import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Header1 from '../assets/Header1.jpeg';
import Header2 from '../assets/Header2.jpeg';
import Header3 from '../assets/Header3.jpeg';

function Header() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Header1}
                    alt="First slide"
                    height="300"
                />
                <Carousel.Caption>
                    <h3 className="text-white fw-bolder">Welcome to Erin Bowen's React Portfolio</h3>
                    <p className="text-white">"If you aim at nothing, you hit nothing."</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Header2}
                    alt="Second slide"
                    height="300"
                />

                <Carousel.Caption>
                    <h3 className="text-white fw-bolder">Welcome to Erin Bowen's React Portfolio</h3>
                    <p>"My courage always rises with every attempt to intimidate me."</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Header3}
                    alt="Third slide"
                    height="300"
                />

                <Carousel.Caption>
                    <h3 className="text-white fw-bolder">Welcome to Erin Bowen's React Portfolio</h3>
                    <p>"You can’t be fussy when you’re off to seek your fortune."
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Header;