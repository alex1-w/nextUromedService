import { Container } from '@mui/material';
import styles from './HomePage.module.scss';
import { FC } from "react"

const HomePage: FC = () => {
    return (
        <div className={styles.wrapper}>

            <Container maxWidth='xl' component='section' className={styles.main}>
                <div className={styles.content}>

                    <div>
                        <h1>Энурузный будильник</h1>
                        <h2>- эффективное средство при энурезе</h2>
                    </div>

                </div>
            </Container>


        </div>
    )
};

export default HomePage;
