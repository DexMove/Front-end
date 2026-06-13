import { useNavigate } from 'react-router-dom';
import { Ruler } from 'lucide-react';
import styles from '../css.con/Mao_1.module.css';
import ortesem1 from '../../assets/imag/ortesem1.png';
import ortesem2 from '../../assets/imag/ortesem2.png';
import ortesem3 from '../../assets/imag/ortesem3.png';
import ortesem4 from '../../assets/imag/ortesem4.png';
import ortese_esq from '../../assets/imag/image48.png';  
import celular from '../../assets/imag/celular.png';
import bateria from '../../assets/imag/bateria.png';
import bluet from '../../assets/imag/bluet.png';
import mao from '../../assets/imag/mao.png';

function Mao_1() {
    const navigate = useNavigate();
    return (
        <section className={styles.section8}>
            <div className={styles.esquerda}>
                <div className={styles.orteses}>
                    <div className={styles.caixa}><img src={ortesem1} alt="ortesem1" /></div>
                    <div className={styles.caixa}><img src={ortesem2} alt="ortesem2" /></div>
                    <div className={styles.caixa}><img src={ortesem3} alt="ortesem3" /></div>
                    <div className={styles.caixa}><img src={ortesem4} alt="ortesem4" /></div>
                </div>
                <div className={styles.imagemPrincipal}>
                    <img src={ortese_esq} alt="Órtese esquerda" />
                </div>
            </div>
            <div className={styles.info}>
                <h2 className={styles.titulo}>Órtese da mão esquerda</h2>  {/* ← mudou */}
                <div className={styles.icones}>
                    <div className={styles.icone}><img src={mao} alt="Design Ergonômico" /><p>Design Ergonômico</p></div>
                    <div className={styles.icone}><img src={bluet} alt="Conexão Bluetooth" /><p>Conexão Bluetooth</p></div>
                    <div className={styles.icone}><img src={celular} alt="Controle via APP" /><p>Controle via APP</p></div>
                    <div className={styles.icone}><img src={bateria} alt="Longa Duração" className={styles.bateria} /><p>Longa Duração</p></div>
                </div>
                <div className={styles.preco}>
                    <h3>R$5.000,00</h3>
                    <p>6x de R$000,00 sem juros</p>
                </div>
                <div className={styles.tamanhos}>
                    <p>Tamanho:</p>
                    <div className={styles.botoesTomanho}>
                        {['PP', 'P', 'M', 'G', 'GG'].map((t) => (
                            <button key={t} className={styles.tamanho} type="button">{t}</button>
                        ))}
                        <button className={styles.rulerBtn} type="button" title="Guia de tamanhos">
                            <Ruler size={20} />
                        </button>
                    </div>
                </div>
                <button className={styles.Comprar} onClick={() => navigate('/comprar')}>Comprar</button>
                <p className={styles.seguro}>COMPRA 100% SEGURA E PROTEGIDA</p>
            </div>
        </section>
    );
}
export default Mao_1;