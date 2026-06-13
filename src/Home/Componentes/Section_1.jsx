import styles from '../css/Section_1.module.css';
import onda from '../../assets/imag/Ellipse321.svg';

function Section_1() {
  return (
    <section className={styles.section1}>
        <div className={styles.div1}>
        <h1>Recupere a autonomia  e o  bem-estar no conforto de casa. </h1>
        
      <p>MOVEHAND: Um aliado contínuo para reduzir a rigidez muscular.</p>
      <div className={styles.botoins}>
        <button className={styles.button}>Cadastre-se gratuitamente.</button>
        <button className={styles.button}>Ver vídeo.</button>
        </div>
      </div>
         <div className={styles.div2}>
            <img src={onda} alt="Onda"className={styles.onda1} />
            {/*<img src={ortese} alt="Ortese1" className={styles.mao1} />*/}

        </div>
    </section>
  );
}

export default Section_1;