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
                                    text={'Меркурій'} idPlanet={1} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png'}
                                    text={'Венера'} idPlanet={2} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png'}
                                    text={'Земля'} idPlanet={3} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png'}
                                    text={'Марс'} idPlanet={4} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png'}
                                    text={'Юпітер'} idPlanet={5} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png'}
                                    text={'Сатурн'} idPlanet={6} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={s.carI}>
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png'}
                                    text={'Уран'} idPlanet={7} />
                        <CardCustom url={'https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png'}
                                    text={'Нептун'} idPlanet={8} />
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className={s.menu}> </div>
        </div>
    )
}

export default ControlledCarousel;