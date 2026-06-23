import styles from '../css/ComoFunciona.module.css'
 
const passos = [
  {
    numero: 1,
    titulo: 'Avaliação profissional',
    descricao: 'O fisioterapeuta analisa o paciente e define os exercícios personalizados.',
    itens: ['Essa avaliação gera uma receita digital, essencial para ativar a órtese.'],
  },
  {
    numero: 2,
    titulo: 'Ativação segura',
    descricao: 'A MoveHand só é ativada com a receita do fisioterapeuta.',
    itens: ['Configuração personalizada', 'Uso seguro e controlado', 'Exercícios adequados para cada paciente'],
  },
  {
    numero: 3,
    titulo: 'Conexão inteligente',
    descricao: 'A órtese se conecta via Wi-Fi ou Bluetooth e inicia os exercícios programados.',
    itens: ['Registro automático dos movimentos', 'Histórico de utilização em tempo real', 'Inteligência artificial integrada'],
  },
  {
    numero: 4,
    titulo: 'Acompanhamento à distância',
    descricao: 'O fisioterapeuta acompanha a evolução do paciente à distância e ajusta os exercícios.',
    itens: ['Mais autonomia em casa', 'Menos custos com deslocamentos', 'Reabilitação mais acessível e contínua'],
  },
]
 
function ComoFunciona() {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>COMO FUNCIONA</p>
      <h2 className={styles.titulo}>
        A MoveHand <span>em 4 passos</span>
      </h2>
      <p className={styles.subtitulo}>
        Tecnologia, inteligência e acompanhamento para transformar a reabilitação
        <br />em um processo mais acessível e eficiente.
      </p>
 
      <div className={styles.grid}>
        {passos.map((passo) => (
          <div key={passo.numero} className={styles.card}>
            <div className={`${styles.numero} ${passo.numero % 2 === 0 ? styles.numeroAlt : ''}`}>
              {passo.numero}
            </div>
            <p className={styles.cardTitulo}>{passo.titulo}</p>
            <p className={styles.cardDesc}>{passo.descricao}</p>
            <hr className={styles.divider} />
            <ul className={styles.lista}>
              {passo.itens.map((item, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.check}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
 
      <div className={styles.banner}>
        <div className={styles.bannerEsquerda}>
          <div className={styles.bannerLogo}>D</div>
          <div className={styles.bannerTexto}>
            <p><strong>Avaliada pelo fisioterapeuta, personalizada para você</strong></p>
            <p>e acompanhada <span className={styles.destaque}>de qualquer lugar.</span></p>
          </div>
        </div>
        <div className={styles.bannerDireita}>
          <p className={styles.bannerDesc}>
            A MoveHand transforma a reabilitação em uma experiência mais acessível, inteligente e humana.
          </p>
          <button className={styles.bannerBtn}>SAIBA MAIS</button>
        </div>
      </div>
    </section>
  )
}
 
export default ComoFunciona