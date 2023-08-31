import styles from './HomePage.module.scss';
import { Container } from '@mui/material';
import { FC } from "react"
import partner1 from '../../components/icons/partners/partner1.png'
import partner2 from '../../components/icons/partners/partner2.png'
import partner3 from '../../components/icons/partners/partner3.png'
import partner4 from '../../components/icons/partners/partner4.png'
import partner5 from '../../components/icons/partners/partner5.png'
import Image from 'next/image';
import Link from 'next/link';

const partners = [
    {
        link: '/',
        image: partner1
    },
    {
        link: '/',
        image: partner2
    },
    {
        link: '/',
        image: partner3
    },
    {
        link: '/',
        image: partner4
    },
    {
        link: '/',
        image: partner5
    },
]

const HomePage: FC = () => {
    return (
        <main>

            <div className={styles.promoWrapper}>

                <div className={styles.content}>

                    <div>
                        <h1>Энурузный будильник</h1>
                        <h2>- эффективное средство при энурезе</h2>
                    </div>

                </div>

            </div>

            <Container maxWidth='xl' >

                <nav className={styles.partnersBlock}>
                    <ul>

                        {partners.map(item => (
                            <li key={item.image.src}>
                                <Link href={item.link}>
                                    <Image src={item.image} alt={item.image.src} fill />
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>

                <section className={styles.alarmBlock}>

                    <article>

                        <div>

                            <h2> Энурезный будильник</h2>
                            <div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cumque quos adipisci totam, debitis veritatis nostrum, suscipit et eaque consequuntur qui a illum maxime dicta sequi architecto quisquam aspernatur ad!
                                </p>
                            </div>

                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quae, reiciendis veniam, corporis autem delectus blanditiis commodi deserunt eligendi consectetur adipisci necessitatibus! Harum quas natus reiciendis nulla! Molestias, molestiae quis?
                                    Quos, consequatur? Laboriosam veritatis nihil consequuntur sequi, neque enim quis. Nesciunt libero ipsam recusandae illum animi, corrupti cupiditate ipsa nisi itaque? Earum cupiditate nulla, consectetur temporibus id sit provident. Laborum.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus molestias optio laborum doloribus nulla hic in ea, architecto nobis, atque corrupti quos itaque eaque aut soluta magni ipsum? Neque.
                                    Fuga, iure sunt, laborum nam voluptatum facilis, corporis optio numquam consectetur rerum libero! Minima, nihil nesciunt ut a dolore facilis voluptas saepe optio repellat assumenda possimus! Quas autem quo optio.
                                    Numquam quas autem placeat aut nam totam libero at corporis veniam ea, odio, doloremque rerum magni. Blanditiis accusantium illum, excepturi vitae minima tempore, ex deserunt ducimus cumque ut voluptatum quidem.
                                </p>
                            </div>
                        </div>


                    </article>


                    <div>

                        <h4>Обзор нашего энурезного будильника MoDo-king MA-108
                            Доктором Комаровским
                        </h4>


                        <Link href='/' >Часто задаваемые вопросы</Link>

                    </div>


                </section>



            </Container>

        </main>
    )
};

export default HomePage;
