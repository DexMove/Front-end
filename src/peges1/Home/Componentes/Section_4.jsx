import styles from '../css/Section_4.module.css';
import vector57 from '../../../assets/imag/Vector57.png';


function Section_4() {
    return (
        <section className={styles.section4}>
          <h2>Sobre o nosso produto.</h2>
            <p>Transforme seu dia a dia em conforto e movimento</p>
         <button className={styles.comprar4}>comprar</button>
        <div className={styles.caixa7}>
        </div>
            <div className={styles.grupo}>
                <div className={styles.caixa2}></div>
                <div className={styles.caixa2}></div>
                <div className={styles.caixa2}></div>
        </div>

            

        </section>
    );
}

export default Section_4;