import styles from '../css/Section_4.module.css';
import vector57 from '../../../assets/imag/Vector57.png';
import botao from '../../../componentes/BotaoComprar';
import { BanknoteArrowUpIcon } from 'lucide-react';
import BotaoComprar from '../../../componentes/BotaoComprar';
import videoDexMove from '../../../assets/imag/video.mp4';

function Section_4() {
    return (
        <section className={styles.section4}>
          <h2>Sobre o nosso produto.</h2>
            <p>Transforme seu dia a dia em conforto e movimento</p>
    <BotaoComprar />
        <div className={styles.caixa7}>
          <video
            className={styles.caixa7Video}
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={videoDexMove} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
        </section>
    );
}

export default Section_4;