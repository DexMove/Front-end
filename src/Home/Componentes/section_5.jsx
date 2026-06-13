import styles from '../css/Section_5.module.css';
import vector12 from '../../assets/imag/Vector12.svg';
import vector11 from '../../assets/imag/Vector11.svg';
import vector10 from '../../assets/imag/Vector10.svg';

function Section_5() {
    return (
        <section className={styles.section5}>
            <img src={vector12} alt="Vector12" className={styles.vector12} />
            <img src={vector11} alt="Vector11" className={styles.vector11} />
            <img src={vector10} alt="Vector10" className={styles.vector10} />
            <h2>Sua Reabilitação com Inteligência Artificial.</h2>
            <p>Nossa IA atua como um assistente inteligente em tempo real.</p>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3>1. Guia Personalizado</h3>
                </div>
                <div className={styles.card}>
                    <h3>2. Suporte no uso</h3>
                </div>
                <div className={styles.card}>
                    <h3>3. Análise de desempenho</h3>
                </div>
            </div>
        </section>
    );
}

export default Section_5;