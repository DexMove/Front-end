import styles from '../css/Section_7.module.css'
import vector13 from '../../assets/imag/Vector13.svg';
import vector14 from '../../assets/imag/Vector14.svg';
import vector15 from '../../assets/imag/Vector15.svg';

function Section_7() {
    return (
        <section className={styles.section7}>
            <img src={vector13} alt={vector13} className={styles.vector13} />
            <img src={vector14} alt={vector13} className={styles.vector14} />
            <img src={vector15} alt={vector13} className={styles.vector15} />
            <h2>Entre em contato</h2>
            <p>Estamos aqui para ajudar. Preencha o formulário e entraremos em contato em breve. </p>
            <div className={styles.contend}>
                <div className={styles.formi}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="nome">Nome completo</label>
                            <input id="nome" type="text" placeholder="Seu Nome" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="telefone">Telefone</label>
                            <input id="telefone" type="text" placeholder="(00) 00000-0000" />
                        </div>
                    </div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Seu@email.com" />
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea id="mensagem" placeholder="Como podemos ajudar você?" />
                    <button>Enviar</button>
                </div>
            </div>

        </section>
    )
}

export default Section_7