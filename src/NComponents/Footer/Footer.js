import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import s from './Footer.module.css'
import Card from "react-bootstrap/Card";

function ControlledCarousel() {

    return (<div className={s.car}>
            <Carousel >
                <Carousel.Item>
                    <div className={s.carI}>
                        <Card className={s.card}>
                            <Card.Img variant="top"
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className={s.card}>
                            <Card.Img variant="top"
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className={s.card}>
                            <Card.Img variant="top"
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <div className={s.card}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                                alt="Second slide"/>
                                dsa
                        </div>
                        <div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                                alt="First slide"/>
                        sad
                        </div>
                        <div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                                alt="Third slide"
                            />
                        sad
                        </div>

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                            alt="Third slide"/>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                            alt="Third slide"/>
                    </div>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className={s.menu}>

            </div>
        </div>

    )
}

export default ControlledCarousel;

