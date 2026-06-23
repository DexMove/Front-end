import styles from '../CSS/Section_11.module.css'
import vector20 from '../../../assets/imag/Vector20.svg'
import vector21 from '../../../assets/imag/Vector21.svg'
import carregador from '../../../assets/imag/carregador.png'
import ortese from '../../../assets/imag/3ortese.png'
import ortese1 from '../../../assets/imag/2par.png'
import par from '../../../assets/imag/2par.png'
import truck from '../../../assets/imag/Truck.png'
import refresh from '../../../assets/imag/Refresh.png'
import atend from '../../../assets/imag/atend.png'
import Footer from '../../../componentes/Footer'

import { useNavigate } from 'react-router-dom';

function Section_11() {
    const navigate = useNavigate();
    return (
        <>
        <section className={styles.section11}>
            <img src={vector20} alt="vector20" className={styles.vector20} />
            <img src={vector21} alt="vector21" className={styles.vector21} />
            <h2>Opções similares:</h2>

            <div className={styles.grid}>

                <div className={styles.card3}>
                    <div className={styles.cardImg}>
                        <img src={carregador} alt="Produto 1" />
                    </div>
                    <div className={styles.cardBody}>
                        <p className={styles.nome}>Carregador USB-C<br />RB000V216</p>
                        <p className={styles.preco}>R$000,00</p>
                        <button className={styles.btnComprar}>COMPRAR</button>
                    </div>
                </div>

                <div className={styles.card3}>
                    <div className={styles.cardImg}>

                        <img src={ortese} alt="Produto 2" />
                    </div>
                    <div className={styles.cardBody}>
                        <p className={styles.nome}>Órtese Dexmove esquerda<br />RB000V130</p>
                        <p className={styles.preco}>R$000,00</p>
                        <button className={styles.btnComprar}>COMPRAR</button>
                    </div>
                </div>

                <div className={styles.card3}>
                    <div className={styles.cardImg}>

                        <img src={ortese1} alt="Produto 3" />
                    </div>
                    <div className={styles.cardBody}>
                        <p className={styles.nome}>Órtese Dexmove Par<br />RB000V048</p>
                        <p className={styles.preco}>R$000,00</p>
                        <button className={styles.btnComprar}>COMPRAR</button>
                    </div>
                </div>

            </div>
        </section>
        <Footer />
          </>
    )
}
export default Section_11