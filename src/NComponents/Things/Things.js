import React from 'react';
import ThingsCard from "./ThingsCard";
import s from './things.module.css';

export const Things = () => {
    return (<div className={s.all}>
            <h2 className={s.t}>10 речей, які необхідно знати про нашу сонячну систему</h2>


        <p className={s.desc}>Наша сонячна система розташована у спіральному рукаві галактики Чумацький Шлях.

            Вона складається з нашої зірки, Сонця і всього, що пов'язане з нею гравітацією - планети Меркурій,
            Венера, Земля, Марс, Юпітер, Сатурн, Уран і Нептун, карликові планети, такі як Плутон,
            десятки супутників і мільйони астероїдів , комети і метеори. Поза нашою власною Сонячною
            системою виявлено тисячі систем, що обертаються навколо інших зірок в Чумацькому Шляху.</p>


            <div className={s.table}>
                <div>
                <ThingsCard number={'1'} headText={'Одна з мільярдів'}
                            text={'Наша Сонячна система складається з зірки, восьми планет і незліченних менших тіл,' +
                            ' таких як карликові планети, астероїди та комети.'}/></div>

                <div><ThingsCard number={'2'} headText={'Рукав Оріона'}
                            text={'Наша Сонячна система обертається навколо центру галактики Чумацький Шлях із швидкістю 828000 км / год. ' +
                            'Ми знаходимось в одному з чотирьох спіральних рукавів галактики.'}/></div>
                <div><ThingsCard number={'3'} headText={'Довгий оберт'}
                            text={'Нашій сонячній системі потрібно близько 230 мільйонів років, ' +
                            'щоб здійснити один оберт навколо галактичного центру.'}/></div>

                <div> <ThingsCard number={'4'} headText={'Космічна спіраль'}
                            text={'Існує три загальних типи галактик: еліптична, спіральна та неправильна. ' +
                            'Чумацький Шлях - спіральна галактика.'} className/></div>
                <div><ThingsCard number={'5'} headText={'Скільки тіл – стільки атмосфер'}
                            text={'Наша Сонячна система - це область космосу. Тут немає атмосфери.' +
                            ' Але вона містить багато «світів», включаючи Землю, з різними видами атмосфер.'}/></div>
                <div> <ThingsCard number={'6'} headText={'Багато супутників'}
                            text={'Планети нашої Сонячної системи - і навіть деякі астероїди - ' +
                            'утримують на своїх орбітах понад 150 супутників.'}/></div>

                <div><ThingsCard number={'7'} headText={'Кільця світу'}
                            text={'Чотири планети-гіганти і принаймні один астероїд мають кільця. ' +
                            'Але жодні не такі вражаючі, як прекрасні кільця Сатурна.'}/></div>
                <div><ThingsCard number={'8'} headText={'Залишити колиску'}
                            text={'Понад 300 космічних кораблів-роботів дослідили місця, що знаходяться поза орбітою Землі,' +
                            ' включаючи 24 астронавтів, які вийшли на орбіту Місяця.'}/></div>
                <div><ThingsCard number={'9'} headText={'Життя, яким ми його знаємо'}
                            text={'Наша Сонячна система єдина, де існує життя.' +
                            ' Поки що ми знаємо лише про життя на Землі, але ми шукаємо більше скрізь, де тільки можемо.'}/></div>
                <div><ThingsCard number={'10'} headText={'Роботи, що далеко від нас'}
                            text={'«Вояжер-1» NASA - єдиний поки що космічний корабель, який покинув нашу Сонячну систему. ' +
                            'Ще чотири космічних кораблі можуть потрапити в міжзоряний простір.'}/></div>

            </div>
        </div>
    )
}
