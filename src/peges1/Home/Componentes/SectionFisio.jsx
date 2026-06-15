import styles from '../css/SectionFisio.module.css';
import fisioterapeuta from '../../../assets/imag/fisio2.png';
import fisioComponente from '../../../assets/fisio_componente.png';
import pacienteComponente from '../../../assets/paciente_componente.png';
import gestaoComponente from '../../../assets/gestao_componente.png';
import crescimentoComponente from '../../../assets/crescimento_componente.png';

function SectionFisio() {
  return (
    <section className={styles.section}>

      <div className={styles.esquerda}>

        <span className={styles.badge}>
          <img src={fisioComponente} alt="Fisioterapeutas" className={styles.badgeIcon} />
          Para fisioterapeutas
        </span>

        <h2 className={styles.titulo}>Cadastre-se e transforme<br />mais vidas com a DexMove</h2>
        <p className={styles.subtitulo}>Junte-se à nossa rede de profissionais</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={pacienteComponente} alt="Mais pacientes" className={styles.icone} />
            <strong>Mais pacientes</strong>
            <p>Conecte com pessoas que precisam do seu atendimento</p>
          </div>
          <div className={styles.card}>
            <img src={gestaoComponente} alt="Gestão prática" className={styles.icone} />
            <strong>Gestão prática</strong>
            <p>Agenda, prontuários e atendimentos em um só lugar</p>
          </div>
          <div className={styles.card}>
            <img src={crescimentoComponente} alt="Crescimento" className={styles.icone} />
            <strong>Crescimento</strong>
            <p>Acompanhe seus resultados e evolua na sa carreira</p>
          </div>
        </div>

        <button className={styles.botao}>Quero me cadastrar ✦</button>

      </div>

      <div className={styles.direita}>
        <img src={fisioterapeuta} alt="Fisioterapeuta"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400'; }}
        />
      </div>

    </section>
  );
}

export default SectionFisio;