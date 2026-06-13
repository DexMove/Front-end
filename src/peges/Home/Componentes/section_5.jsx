import styles from '../css/Section_5.module.css';
import vector12 from '../../assets/imag/Vector12.svg';
import vector11 from '../../assets/imag/Vector11.svg';
import vector10 from '../../assets/imag/Vector10.svg';
import livro from '../../assets/imag/livro.png';
import circolo from '../../assets/imag/circolo.png';
import grafico from '../../assets/imag/grafimao.png';

const cardsData = [
  {
    icone: livro,
    titulo: '1. Guia Personalizado',
    descricao: 'Receba orientações personalizadas para sua reabilitação com base no seu perfil.'
  },
  {
    icone: circolo,
    titulo: '2. Suporte no uso',
    descricao: 'Acompanhamento em tempo real durante o uso do dispositivo para maior segurança.'
  },
  {
    icone: grafico,
    titulo: '3. Análise de desempenho',
    descricao: 'Monitore sua evolução com relatórios inteligentes gerados pela nossa IA.'
  },
];

function Section_5() {
  return (
    <section className={styles.section5}>
      <img src={vector12} alt="Vector12" className={styles.vector12} />
      <img src={vector11} alt="Vector11" className={styles.vector11} />
      <img src={vector10} alt="Vector10" className={styles.vector10} />
      <h2>Sua Reabilitação com Inteligência Artificial.</h2>
      <p className={styles.subtitulo}>Nossa IA atua como um assistente inteligente em tempo real.</p>

      <div className={styles.cards}>
        {cardsData.map((card, index) => (
          <div key={index} className={styles.cardFlip}>
            <div className={styles.cardInner}>

              <div className={styles.cardFrente}>
                <img src={card.icone} alt={card.titulo} className={styles.icone} />
                <h3>{card.titulo}</h3>
              </div>

              <div className={styles.cardVerso}>
                <p>{card.descricao}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section_5;