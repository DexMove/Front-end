import styles from '../css.con/Mao_3.module.css';
import vector19 from '../../../assets/imag/Vector19.svg';
import ajuste from '../../../assets/imag/ajuste.png';
import pena from '../../../assets/imag/pena.png';
import coração from '../../../assets/imag/coracao.png';

function Mao_3() {
    return (
        <section className={styles.section10}>
            <img src={vector19} alt="vector19" className={styles.vector19} />
                <h2 className={styles.titulo}>Tecnologia que cuida  hoje <br />
                para transformar o amanhã.</h2>
            <div className={styles.meio}>
                <h3>Benefício que você sente</h3>

            </div>
            <div className={styles.beneficios}>
                <div className={styles.beneficio}>
                    <img src={ajuste} alt="ajuste" />
                    <h3>Ajuste  anatômico.<br />
                        É confortável.</h3>
                </div>
                <div className={styles.beneficio}>
                    <img src={pena} alt="pena" />
                    <h3>Materiais leves <br />
                        e resistentes.</h3>
                </div>
                <div className={styles.beneficio}>
                    <img src={coração} alt="coração" />
                    <h3>Mais qualidade<br />
                        de vida</h3>
                </div>

            </div>


        </section>
    )
}
export default Mao_3