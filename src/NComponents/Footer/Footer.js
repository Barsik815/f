import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import s from './Footer.module.css'
import CardCustom from "./CardCustom";


function ControlledCarousel() {

    return (<div className={s.car}>
            <Carousel >
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Mercury'} idPlanet={1} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Venus'} idPlanet={2} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Earth'} idPlanet={3} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Mars'} idPlanet={4} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Jupiter'} idPlanet={5} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Saturn'} idPlanet={6} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Uranus'} idPlanet={7} />
                        <CardCustom url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                                    text={'Neptune'} idPlanet={8} />
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className={s.menu}> </div>
        </div>
    )
}

export default ControlledCarousel;