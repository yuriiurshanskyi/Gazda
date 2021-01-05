import { createFactory } from 'react'
import './Dishes.css'

export default function Dishes() {
    return (
        <section id="dishes">
            <span>Пропозиції місяця</span>
            <div id="flex-items">
                <div className="dish">
                    <span>Бундашки</span>
                    <a className="dish-btn" href="#">Більше</a>
                </div>
                <div className="dish">
                    <span>Кнедлики</span>
                    <a className="dish-btn" href="#">Більше</a>
                </div>
                <div className="dish">
                    <span>Гірос-тал</span>
                    <a className="dish-btn" href="#">Більше</a>
                </div>
                <div className="dish">
                    <span>Рокот-крумплі</span>
                    <a className="dish-btn" href="#">Більше</a>
                </div>
                <div className="dish">
                    <span>Бограч</span>
                    <a className="dish-btn" href="#">Більше</a>
                </div>
                <div className="dish">
                    <span>Левеш</span>
                    <a className="dish-btn" href="#">Більше</a>
                </div>
            </div>
        </section>
    )
}
