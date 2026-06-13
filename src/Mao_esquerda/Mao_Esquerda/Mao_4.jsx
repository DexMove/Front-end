import { useNavigate } from 'react-router-dom';
import styles from '../css.con/Mao_4.module.css';
import vector20 from '../../assets/imag/Vector20.svg';
import vector21 from '../../assets/imag/Vector21.svg';
import carregador from '../../assets/imag/carregador.png';
import orteset from '../../assets/imag/orteset.png';
import orteses1 from '../../assets/imag/image47.png';
import par from '../../assets/imag/par.png';
import truck from '../../assets/imag/Truck.png';
import refresh from '../../assets/imag/Refresh.png';
import atend from '../../assets/imag/atend.png';

function Mao_4() {
    const navigate = useNavigate();
    return (
        <section className={styles.section11}>
            <img src={vector20} alt="vector20" className={styles.vector20} />
            <img src={vector21} alt="vector21" className={styles.vector21} />
            <h2>Opções similares:</h2>

             <div className={styles.cards3}>
                <div className={styles.card3}>
                    <img src={carregador} alt="carregador" className={styles.carregador} />
                    <h3> Carregador USB-C.</h3>
                    <p>R$00000,00</p>
                    <button className={styles.Comprarb} onClick={() => navigate('/comprar')}>
                        Comprar
                    </button>
                </div>
                <div className={styles.card3}>
                    <img src={orteset} alt="orteses" className={styles.orteses} />
                    <h3>Órteses Dexmove mão direita.</h3>
                    <p>R$00000,00</p>
                    <button className={styles.Comprarb} onClick={() => navigate('/detalhes')}>
                        Comprar
                    </button>
                </div>
                <div className={styles.card3}>
                        <img src={par} alt="par" />
                    <h3>Órteses Dexmove par.</h3>
                    <p>R$000000,00</p>
                    <button className={styles.Comprarb} onClick={() => navigate('/par')}>COMPRAR</button>
                </div>
            </div>
            <div className={styles.beneficios1}>
                <div className={styles.beneficio1}>
                    <img src={truck} alt="truck" />
                    <h3>Entrega<br />
                        rápida.
                        .</h3>
                </div>
                <div className={styles.beneficio1}>
                    <img src={refresh} alt="refresh" />
                    <h3>Até 7 dias para<br />
                        a devolução..</h3>
                </div>
                <div className={styles.beneficio1}>
                    <img src={atend} alt="atend" />
                    <h3>Atendimento<br />
                        especializado.</h3>
                </div>

            </div>
        </section>
    )
}
export default Mao_4