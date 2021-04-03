import React from 'react';
import ThingsCard from "./ThingsCard";
import s from './things.module.css';

export const Things = () => {
    return (<div className={s.di}>
            <h2 className={s.t}>10 Need-to-Know Things About the Solar System</h2>

            <p>
                Our planetary system is located in an outer spiral arm of the Milky Way galaxy.
            </p>

            <p>
                Our solar system consists of our star, the Sun, and everything bound to it by gravity — the planets
                Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune, dwarf planets such as Pluto, dozens of
                moons and millions of asteroids, comets and meteoroids. Beyond our own solar system, we have discovered
                thousands of planetary systems orbiting other stars in the Milky Way.
            </p>

            <div className={s.table}>
                <div>
                <ThingsCard number={'1'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>

                <div><ThingsCard number={'2'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>
                <div><ThingsCard number={'3'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>

                <div> <ThingsCard number={'4'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>
                <div><ThingsCard number={'5'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>
                <div> <ThingsCard number={'6'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>

                <div><ThingsCard number={'7'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>
                <div><ThingsCard number={'8'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>
                <div><ThingsCard number={'9'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>


                <div><ThingsCard number={'10'} headText={'ONE OF BILLIONS'}
                            text={'Our solar system is made up of a star, eight planets and countless ' +
                            'smaller bodies such as dwarf planets, asteroids and comets.'}/></div>

            </div>
        </div>
    )
}
