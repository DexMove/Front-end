import styles from '../css/Section_4.module.css';
import ortese from '../../assets/imag/ortese2.png';
import vector57 from '../../assets/imag/Vector57.png';


function Section_4() {
    return (
        <section className={styles.section4} style={{ backgroundImage: `url(${vector57})` }}>


            <div className={styles.div1}>
                <img src={ortese} alt="Ortese" className={styles.ortese} />
            </div>

            <div className={styles.div2}>
                <h2>Como a nossa órtese pode ajudar?</h2>
                <p>
                    A órtese realiza movimentos automáticos de abrir e fechar a mão guiada por um
                    fisioterapeuta especializado, promovendo estímulo contínuo de forma segura e confortável.
                    Cada sessão é ajustável, respeitando o ritmo e a necessidade de cada paciente.
                </p>
            </div>

            

        </section>
    );
}

export default Section_4;