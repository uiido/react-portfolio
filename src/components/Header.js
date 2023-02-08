import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
                    src="https://via.placeholder.com/150x25"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text-white">Welcome to Erin Bowen's React Portfolio</h3>
                    <p>"If you aim at nothing, you hit nothing."</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/150x25"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="text-white">Welcome to Erin Bowen's React Portfolio</h3>
                    <p>"My courage always rises with every attempt to intimidate me."</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/150x25"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="text-white">Welcome to Erin Bowen's React Portfolio</h3>
                    <p>"You can’t be fussy when you’re off to seek your fortune."
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Header;