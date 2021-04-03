import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from "react-bootstrap/Card";
import s from './Footer.module.css'
import CardCustom from "./CardCustom";

function ControlledCarousel() {

    return (<div className={s.car}>
            <Carousel >
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Mercury'} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Venus'} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Earth'} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Mars'} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Jupiter'} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Saturn'} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Uranus'} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Neptune'} />
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className={s.menu}> </div>
        </div>
    )
}

export default ControlledCarousel;