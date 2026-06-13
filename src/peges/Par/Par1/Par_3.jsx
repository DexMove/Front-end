import styles from '../css.par/Par_3.module.css';
import vector20 from '../../assets/imag/Vector20.svg'
import vector21 from '../../assets/imag/Vector21.svg'
import carregador from '../../assets/imag/carregador.png'
import orteses from '../../assets/imag/image48.png'
import orteses1 from '../../assets/imag/image47.png'
import par from '../../assets/imag/par.png'
import truck from '../../assets/imag/Truck.png'
import refresh from '../../assets/imag/Refresh.png'
import atend from '../../assets/imag/atend.png'

function Par_3() {

    return (
        <section className={styles.section11}>
            <img src={vector20} alt="vector20" className={styles.vector20} />
            <img src={vector21} alt="vector21" className={styles.vector21} />
            <h2 className={styles.titulo}>Opções similares:</h2>

            <div className={styles.grid}>

                <div className={styles.card3}>
                    <div className={styles.cardImg}>
                        {/* ✅ COLOQUE SUA IMAGEM AQUI 
                        <img src={ortesem1} alt="Produto 1" />*/}
                    </div>
                    <div className={styles.cardBody}>
                        <p className={styles.nome}>Carregador USB-C<br />RB000V216</p>
                        <p className={styles.preco}>R$000,00</p>
                        <button className={styles.btnComprar}>COMPRAR</button>
                    </div>
                </div>

                <div className={styles.card3}>
                    <div className={styles.cardImg}>
                        {/* ✅ COLOQUE SUA IMAGEM AQUI 
                        <img src={ortesem2} alt="Produto 2" />*/}
                    </div>
                    <div className={styles.cardBody}>
                        <p className={styles.nome}>Órtese Dexmove esquerda<br />RB000V130</p>
                        <p className={styles.preco}>R$000,00</p>
                        <button className={styles.btnComprar}>COMPRAR</button>
                    </div>
                </div>

                <div className={styles.card3}>
                    <div className={styles.cardImg}>
                        {/* ✅ COLOQUE SUA IMAGEM AQUI
                        <img src={ortesem3} alt="Produto 3" /> */}
                    </div>
                    <div className={styles.cardBody}>
                        <p className={styles.nome}>Órtese Dexmove direita<br />RB000V048</p>
                        <p className={styles.preco}>R$000,00</p>
                        <button className={styles.btnComprar}>COMPRAR</button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Par_3;