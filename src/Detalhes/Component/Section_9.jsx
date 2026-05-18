import styles from '../CSS/Section_9.module.css';
import vector16 from '../../assets/imag/Vector16.svg';
import vector17 from '..//../assets/imag/Vector17.svg';
import vector18 from '../../assets/imag/Vector18.svg';
import slack from '../../assets/imag/Slack.png';
import git from '../../assets/imag/Git.png';
import command from '../../assets/imag/Command.png';
import cpu from '../../assets/imag/Cpu.png';
function Section_9() {
    return (
        <section className={styles.section9}>
            <img src={vector16} alt="vector16" className={styles.vector16} />
            <img src={vector17} alt="vector17" className={styles.vector17} />
            <img src={vector18} alt="vector18" className={styles.vector18} />



            <div className={styles.cards2}>
                <div className={styles.card2}>
                    <img src={slack} alt="slack" className={styles.slack} />
                    <h3> Estrutura <br />
                        reforçada</h3>
                </div>
                <div className={styles.card2}>
                    <img src={git} alt="git" className={styles.git} />
                    <h3>Articulações <br />
                        ajustáveis.</h3>
                </div>
                <div className={styles.card2}>
                    <img src={command} alt="command" className={styles.command} />
                    <h3> Fácil <br />
                        de <br />
                        vestir.
                    </h3>
                </div>
                <div className={styles.card2}>
                    <img src={cpu} alt="cpu" className={styles.cpu} />
                    <h3>   Conforto <br/>
                        prolongado
                    </h3>

                </div>
            </div>
        </section>
    )
}
export default Section_9