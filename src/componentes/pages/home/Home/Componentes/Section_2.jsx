import styles from '../css/Section_2.module.css';
import vector16 from'../../../assets/Vector16.svg'
import vector17 from '../../../assets/Vector17.svg'
import vector18 from '../../../assets/Vector18.svg'
import menina2 from '../../../assets/menina2.png';
import Ortese from '../../../assets/novaimg.png';
import menina1 from '../../../assets/menina1.png';


function Section_2() {
  return (
    <section className={styles.section2}>
      <img src={vector16} alt="Vector" className={styles.vector16} />
      <img src={vector17} alt="Vector1" className={styles.vector17} />
      <img src={vector18} alt="Vector2" className={styles.vector18} />

      <h2>Do Problema à Solução Contínua.</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={menina2} alt="Menina 2" className={styles.menina2} />
          <h3>1. Falta de acesso</h3>
          <p>Hospital, clínica fisioterapêutica e ONGs.
          </p>
        </div>
        <div className={styles.card}>
          <img src={Ortese} alt="Ortese" className={styles.ortese} />
          <h3>2.Acolhimento</h3>
          <p>Uma órtese robótica que estimula a abertura da mão, diminuindo a espasticidade.</p>
        </div>
        <div className={styles.card}>
          <img src={menina1} alt="Menina 1" className={styles.menina1} />
          <h3>3. Falta de recursos</h3>
          <p>Acesso limitado a tecnologias e equipamentos necessários para o tratamento.</p>
        </div>
      </div>
    
    </section> 
    
  );
}

export default Section_2;