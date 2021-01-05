import { createContext} from 'react'
import './Footer.css'
import facebook from '../../images/021-facebook.svg'
import instagram from '../../images/025-instagram.svg'
import telegram from '../../images/029-telegram.svg'

export default function Footer() {
    return (
        <footer id="about-us">
            <span>
                Слідкуйте за нами
            </span>
            <div className="network">
                <img alt="" className ="svg" src={facebook}/>
                <a href="#">
                    Facebook
                </a>
            </div>
            <div className="network">
                <img alt="" className ="svg" src={instagram}/>
                <a href="#">
                    Instagram
                </a>
            </div>
            <div className="network">
                <img alt="" className ="svg" src={telegram}/>
                <a href="#">
                    Telegram
                </a>
            </div>
        </footer>
    )
}
