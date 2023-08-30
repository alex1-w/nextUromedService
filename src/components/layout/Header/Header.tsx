import styles from './Header.module.scss';
import { FC } from "react"
import logo from '../../icons/Logo.png'
import basket from '../../icons/basket.png'
import Image from 'next/image';
import { oClockIcon, phoneIcon } from '@/components/icons/icons';

const navLinks = [
    {
        name: 'Гарантия',
        link: '/'
    },
    {
        name: 'Оплата и доставка',
        link: '/'
    },
    {
        name: 'Отзывы',
        link: '/'
    },
    {
        name: 'Акции 2',
        link: '/'
    },
    {
        name: 'статьи',
        link: '/'
    },
    {
        name: 'О нас',
        link: '/'
    },
    {
        name: 'Контакты',
        link: '/'
    },
]


const Header: FC = () => {
    return (
        <header className={styles.main}>
            <div>
                <h3>Доставка в любой город страны</h3>
            </div>

            <div className={styles.main__footer}>

                <div className={styles.logo}>
                    <Image src={logo} alt='logo' fill />
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.mainContent__topPart}>

                        <div className={styles.call}>

                            <div>
                                {phoneIcon}
                                <p> +380 66 417 95 83</p>
                            </div>

                            <div>
                                <p>Обратный звонок</p>
                            </div>

                            <div>
                                {oClockIcon}
                                <p> ПН-ПТ: 10-19</p>
                            </div>
                        </div>

                        <div>
                            <p>• СЕЙЧАС НА САЙТЕ: 23 ПОКУПАТЕЛЯ</p>
                            <div className={styles.btns}>
                                <button>UA</button>
                                <button>RU</button>
                            </div>
                        </div>

                    </div>


                    <nav className={styles.navBlock}>
                        <ul>
                            <li>Каталог</li>
                            {navLinks.map(item => (
                                <li key={item.name}>
                                    <p>{item.name}</p>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>


                <div className={styles.basket}>
                    <Image alt='basket' src={basket} />
                </div>

            </div>

        </header>
    )
};

export default Header;
