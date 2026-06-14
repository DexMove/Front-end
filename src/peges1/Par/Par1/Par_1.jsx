
import styles from '../css.par/Par_1.module.css';
import vector16 from '../../../assets/imag/Vector16.svg';
import vector17 from '../../../assets/imag/Vector17.svg';
import vector18 from '../../../assets/imag/Vector18.svg';
import iconedt from '../../../assets/imag/iconedt.png';
import iconedt1 from '../../../assets/imag/iconedt1.png';
import iconedt2 from '../../../assets/imag/iconedt2.png';
import iconedt3 from '../../../assets/imag/iconedt3.png';

const cardsData = [
  {
    icone: iconedt,
    titulo: 'Estrutura reforçada',
    descricao: 'Material resistente que garante durabilidade e segurança no uso diário.'
  },
  {
    icone: iconedt1,
    titulo: 'Articulações ajustáveis.',
    descricao: 'Ajuste preciso para cada paciente, permitindo maior mobilidade e conforto.'
  },
  {
    icone: iconedt2,
    titulo: 'Fácil de vestir.',
    descricao: 'Design pensado para colocar e retirar com facilidade, sem ajuda.'
  },
  {
    icone: iconedt3,
    titulo: 'Conforto prolongado',
    descricao: 'Pode ser usado por longas horas sem causar desconforto ou pressão.'
  },
];

function par_1() {
  return (
    <section className={styles.section9}>
      <img src={vector16} alt="vector16" className={styles.vector16} />
      <img src={vector17} alt="vector17" className={styles.vector17} />
      <img src={vector18} alt="vector18" className={styles.vector18} />

      <div className={styles.cards2}>
        {cardsData.map((card, index) => (
          <div key={index} className={styles.cardFlip}>
            <div className={styles.cardInner}>

              <div className={styles.cardFrente}>
                <img src={card.icone} alt={card.titulo} />
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

export default par_1;