import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import s from './Footer.module.css'
import CardCustom from "./CardCustom";


function ControlledCarousel() {

    return (<div className={s.car}>
            <Carousel >
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png'}
                                    text={'Mercury'} idPlanet={1} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png'}
                                    text={'Venus'} idPlanet={2} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png'}
                                    text={'Earth'} idPlanet={3} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png'}
                                    text={'Mars'} idPlanet={4} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png'}
                                    text={'Jupiter'} idPlanet={5} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png'}
                                    text={'Saturn'} idPlanet={6} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png'}
                                    text={'Uranus'} idPlanet={7} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png'}
                                    text={'Neptune'} idPlanet={8} />
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className={s.menu}> </div>
        </div>
    )
}

export default ControlledCarousel;