

import styles from '../css/Section_3.module.css';
import menino1 from '../../../assets/imag/novameni.png';

function Section_3() {
    return (
        <section className={styles.section3}>

            <h2 className={styles.titulo}>Por que escolher o Dexmove</h2>

            <div className={styles.conteudo}>

                <div className={styles.lado1}>

                    <div className={styles.item}>
                        <div className={styles.checkBox}>✓</div>
                        <div>
                            <h3>1.Tecnologia Especializada</h3>
                            <p>Desenvolvida especificamente para casos de paralisia cerebral com rigidez muscular elevada.</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.checkBox}>✓</div>
                        <div>
                            <h3>2.Conforto Contínuo</h3>
                            <p>Design ergonômico que permite uso prolongado sem desconforto ou irritação.</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.checkBox}>✓</div>
                        <div>
                            <h3>3.Resultados Comprovados</h3>
                            <p>Melhora significativa no alinhamento e redução da espasticidade.</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.checkBox}>✓</div>
                        <div>
                            <h3>4.Acompanhamento Personalizado</h3>
                            <p>Suporte profissional durante todo o processo de adaptação e uso.</p>
                        </div>
                    </div>

                </div>

                <div className={styles.lado2}>
                    <img src={menino1} alt="Menino1" className={styles.foto} />
                </div>

            </div>

        </section>
    );
}

export default Section_3;