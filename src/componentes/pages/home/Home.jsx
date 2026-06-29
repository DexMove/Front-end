import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../Header";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import BotaoComprar from "../../BotaoComprar";

import styles from "./Home.module.css";

// Assets imports
import onda from "../../../assets/Ellipse321.svg";
import ortese from "../../../assets/home.png";
import vector16 from "../../../assets/Vector16.svg";
import vector17 from "../../../assets/Vector17.svg";
import vector18 from "../../../assets/Vector18.svg";
import menina2 from "../../../assets/menina2.png";
import OrteseSec2 from "../../../assets/imgnova.png";
import menina1 from "../../../assets/menina1.png";
import menino1 from "../../../assets/novameni.png";
import videoDexMove from "../../../assets/video.mp4";
import moveVideo from "../../../assets/move.mp4";
import livro from "../../../assets/livro.png";
import circolo from "../../../assets/circolo.png";
import grafico from "../../../assets/grafimao.png";
import fisioterapeuta from "../../../assets/afisio.png";
import fisioComponente from "../../../assets/fisio_componente.png";
import vector13 from "../../../assets/Vector13.svg";
import vector14 from "../../../assets/Vector14.svg";
import vector15 from "../../../assets/Vector15.svg";
import vector10 from "../../../assets/Vector10.svg";
import vector11 from "../../../assets/Vector11.svg";
import vector12 from "../../../assets/Vector12.svg";

// Data arrays
const passos = [
  {
    numero: 1,
    titulo: "Avaliação profissional",
    descricao: "O fisioterapeuta analisa o paciente e define os exercícios personalizados.",
    itens: ["Essa avaliação gera uma receita digital, essencial para ativar a órtese."],
  },
  {
    numero: 2,
    titulo: "Ativação segura",
    descricao: "A MoveHand só é ativada com a receita do fisioterapeuta.",
    itens: ["Configuração personalizada", "Uso seguro e controlado", "Exercícios adequados para cada paciente"],
  },
  {
    numero: 3,
    titulo: "Conexão inteligente",
    descricao: "A órtese se conecta via Wi-Fi ou Bluetooth e inicia os exercícios programados.",
    itens: ["Registro automático dos movimentos", "Histórico de utilização em tempo real", "Inteligência artificial integrada"],
  },
  {
    numero: 4,
    titulo: "Acompanhamento à distância",
    descricao: "O fisioterapeuta acompanha a evolução do paciente à distância e ajusta os exercícios.",
    itens: ["Mais autonomia em casa", "Menos custos com deslocamentos", "Reabilitação mais acessível e contínua"],
  },
];

const cardsIA = [
  {
    icone: livro,
    titulo: "1. Guia Personalizado",
    descricao: "Receba orientações personalizadas para sua reabilitação com base no seu perfil.",
  },
  {
    icone: circolo,
    titulo: "2. Suporte no uso",
    descricao: "Acompanhamento em tempo real durante o uso do dispositivo para maior segurança.",
  },
  {
    icone: grafico,
    titulo: "3. Análise de desempenho",
    descricao: "Monitore sua evolução com relatórios inteligentes gerados pela nossa IA.",
  },
];

const testemunhos = [
  {
    estrelas: "⭐⭐⭐⭐⭐",
    texto: '"A órtese transformou a vida da minha filha. Ela consegue realizar atividades que antes eram impossíveis. O conforto e o acolhimento da equipe nos deram esperança."',
    autor: "Maria Silva",
    funcao: "Mãe de paciente"
  },
  {
    estrelas: "⭐⭐⭐⭐⭐",
    texto: '"Como profissional da área, fico impressionado com os resultados que a DexMove proporciona. É uma solução inovadora que realmente faz diferença na qualidade de vida dos pacientes."',
    autor: "Dr. Carlos Mendes",
    funcao: "Fisioterapeuta"
  },
  {
    estrelas: "⭐⭐⭐⭐⭐",
    texto: '"Uso a órtese há 6 meses e a melhora é notável. Consigo escrever, usar o celular e fazer coisas simples que antes eram um desafio. Sou muito grata!"',
    autor: "Ana Paula Costa",
    funcao: "Cuidadora"
  }
];

function Home({ useHeader2 = false }) {
  const navigate = useNavigate();
  const [testemunhoAtivo, setTestemunhoAtivo] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealActive);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll(`.${styles.reveal}`);
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={styles.Home}>
      {useHeader2 ? <Header2 /> : <Header />}

      {/* Section 1 */}
      <section className={styles.section1}>
        <div className={`${styles.div1} ${styles.reveal}`}>
          <h1>Recupere a autonomia e o bem-estar no conforto de casa.</h1>
          <p><span className={styles.verdeDexmove}>MOVEHAND</span>: Um aliado contínuo para reduzir a rigidez muscular.</p>
          <div className={styles.botoins}>
            <button className={styles.button} onClick={() => navigate("/bem-vindo")}>
              Cadastre-se gratuitamente.
            </button>
            <button className={styles.button} onClick={() => setShowVideoModal(true)}>
              Ver vídeo.
            </button>
          </div>
        </div>
        <div className={`${styles.div2} ${styles.reveal} ${styles.revealDelay1}`}>
          <img src={onda} alt="Onda" className={styles.onda1} />
          <img src={ortese} alt="Ortese1" className={styles.mao1} />
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.section2}>
        <img src={vector16} alt="Vector" className={styles.vector16} />
        <img src={vector17} alt="Vector1" className={styles.vector17} />
        <img src={vector18} alt="Vector2" className={styles.vector18} />

        <h2 className={styles.reveal}>Do Problema à Solução Contínua.</h2>

        <div className={styles.s2Cards}>
          <div className={`${styles.s2Card} ${styles.reveal} ${styles.revealDelay1}`}>
            <img src={menina2} alt="Menina 2" />
            <h3>1. Falta de acesso</h3>
            <p>Hospital, clínica fisioterapêutica e ONGs.</p>
          </div>
          <div className={`${styles.s2Card} ${styles.reveal} ${styles.revealDelay2}`}>
            <img src={OrteseSec2} alt="Ortese" />
            <h3>2. Acolhimento</h3>
            <p>Uma órtese robótica que estimula a abertura da mão, diminuindo a espasticidade.</p>
          </div>
          <div className={`${styles.s2Card} ${styles.reveal} ${styles.revealDelay3}`}>
            <img src={menina1} alt="Menina 1" />
            <h3>3. Falta de recursos</h3>
            <p>Acesso limitado a tecnologias e equipamentos necessários para o tratamento.</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section3}>
        <h2 className={`${styles.s3Titulo} ${styles.reveal}`}>Por que escolher o Dexmove</h2>
        <div className={styles.conteudo}>
          <div className={`${styles.lado1} ${styles.reveal} ${styles.left}`}>
            <div className={styles.item}>
              <div className={styles.checkBox}>✓</div>
              <div>
                <h3>1. Tecnologia Especializada</h3>
                <p>Desenvolvida especificamente para casos de paralisia cerebral com rigidez muscular elevada.</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.checkBox}>✓</div>
              <div>
                <h3>2. Conforto Contínuo</h3>
                <p>Design ergonômico que permite uso prolongado sem desconforto ou irritação.</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.checkBox}>✓</div>
              <div>
                <h3>3. Resultados Comprovados</h3>
                <p>Melhora significativa no alinhamento e redução da espasticidade.</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.checkBox}>✓</div>
              <div>
                <h3>4. Acompanhamento Personalizado</h3>
                <p>Suporte profissional durante todo o processo de adaptação e uso.</p>
              </div>
            </div>
          </div>
          <div className={`${styles.lado2} ${styles.reveal} ${styles.right}`}>
            <img src={menino1} alt="Menino1" className={styles.foto} />
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className={styles.funcSection}>
        <p className={`${styles.eyebrow} ${styles.reveal}`}>COMO FUNCIONA</p>
        <h2 className={`${styles.funcTitulo} ${styles.reveal} ${styles.revealDelay1}`}>
          A MoveHand <span>em 4 passos</span>
        </h2>
        <p className={`${styles.funcSubtitulo} ${styles.reveal} ${styles.revealDelay2}`}>
          Tecnologia, inteligência e acompanhamento para transformar a reabilitação
          <br />em um processo mais acessível e eficiente.
        </p>

        <div className={styles.funcGrid}>
          {passos.map((passo, idx) => (
            <div key={passo.numero} className={`${styles.funcCard} ${styles.reveal} ${styles[`revealDelay${(idx % 4) + 1}`]}`}>
              <div className={`${styles.numero} ${passo.numero % 2 === 0 ? styles.numeroAlt : ""}`}>
                {passo.numero}
              </div>
              <p className={styles.cardTitulo}>{passo.titulo}</p>
              <p className={styles.cardDesc}>{passo.descricao}</p>
              <hr className={styles.divider} />
              <ul className={styles.lista}>
                {passo.itens.map((item, i) => (
                  <li key={i} className={styles.funcItem}>
                    <span className={styles.check}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${styles.banner} ${styles.reveal}`}>
          <div className={styles.bannerEsquerda}>
            <div className={styles.bannerLogo}>D</div>
            <div className={styles.bannerTexto}>
              <p>
                <strong>Avaliada por fisioterapeutas, personalizada para você</strong> e acompanhada <span className={styles.destaque}>de onde você estiver.</span>
              </p>
            </div>
          </div>
          <div className={styles.bannerDireita}>
            <p className={styles.bannerDesc}>
              A MoveHand transforma a reabilitação em uma experiência mais acessível, inteligente e humana.
            </p>
            <button className={styles.bannerBtn} onClick={() => navigate("/bloqueada")}>SAIBA MAIS</button>
          </div>
        </div>
      </section>

      {/* Section 4 (Video) */}
      <section className={styles.section4}>
        <h2 className={styles.reveal}>Sobre o nosso produto.</h2>
        <p className={`${styles.reveal} ${styles.revealDelay1}`}>Transforme seu dia a dia em conforto e movimento</p>
        <div className={`${styles.reveal} ${styles.revealDelay2}`}>
          <Link to="/produtos">
            <BotaoComprar />
          </Link>
        </div>
        <div className={`${styles.caixa7} ${styles.reveal} ${styles.revealDelay3}`}>
          <video
            className={styles.caixa7Video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            style={{ pointerEvents: "none" }}
          >
            <source src={videoDexMove} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
      </section>

      {/* Section 5 (Inteligência Artificial) */}
      <section className={styles.section5}>
        <img src={vector12} alt="Vector12" className={styles.vector12} />
        <img src={vector11} alt="Vector11" className={styles.vector11} />
        <img src={vector10} alt="Vector10" className={styles.vector10} />
        <h2 className={styles.reveal}>Sua Reabilitação com Inteligência Artificial.</h2>
        <p className={`${styles.subtitulo5} ${styles.reveal} ${styles.revealDelay1}`}>Nossa IA atua como um assistente inteligente em tempo real.</p>

        <div className={styles.s5Cards}>
          {cardsIA.map((card, index) => (
            <div key={index} className={`${styles.cardFlip} ${styles.reveal} ${styles[`revealDelay${(index % 3) + 1}`]}`}>
              <div className={styles.cardInner}>
                <div className={styles.cardFrente}>
                  <img src={card.icone} alt={card.titulo} className={styles.s5Icone} />
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

      {/* Section Fisio */}
      <section className={styles.fisioSection}>
        <div className={`${styles.fisioEsquerda} ${styles.reveal} ${styles.left}`}>
          <span className={styles.badge}>
            <img src={fisioComponente} alt="Fisioterapeutas" className={styles.badgeIcon} />
            Para fisioterapeutas
          </span>

          <h2 className={styles.fisioTitulo}>Cadastre-se e transforme mais vidas com a DexMove</h2>
          <p className={styles.fisioSubtitulo}>Junte-se à nossa rede de profissionais</p>

          <div className={styles.fisioCards}>
            <div className={styles.fisioCard}>
              <strong>Mais pacientes</strong>
              <p>Conecte com pessoas que precisam do seu atendimento</p>
            </div>
            <div className={styles.fisioCard}>
              <strong>Gestão prática</strong>
              <p>Agenda, prontuários e atendimentos em um só lugar</p>
            </div>
            <div className={styles.fisioCard}>
              <strong>Crescimento</strong>
              <p>Acompanhe seus resultados e evolua na sua carreira</p>
            </div>
          </div>

          <button className={styles.fisioBotao} onClick={() => navigate("/cadastro-fisioterapeuta")}>
            Quero me cadastrar ✦
          </button>
        </div>

        <div className={`${styles.fisioDireita} ${styles.reveal} ${styles.right}`}>
          <img
            src={fisioterapeuta}
            alt="Fisioterapeuta"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400";
            }}
          />
        </div>
      </section>

      {/* Section 6 (Testemunhos - Carrossel) */}
      <section className={styles.section6}>
        <h2 className={styles.reveal}>O que nossos clientes dizem</h2>
        <p className={`${styles.reveal} ${styles.revealDelay1}`}>Experiências que inspiram e transformam vidas.</p>

        <div className={styles.carrosselWrapper}>
          <button 
            className={styles.carrosselArrow} 
            onClick={() => setTestemunhoAtivo((prev) => (prev === 0 ? testemunhos.length - 1 : prev - 1))}
            aria-label="Depoimento anterior"
          >
            ‹
          </button>
          
          <div className={styles.carrosselTrack}>
            {testemunhos.map((test, index) => (
              <div 
                key={index} 
                className={`${styles.s6Card} ${index === testemunhoAtivo ? styles.activeCard : styles.inactiveCard}`}
              >
                <h3>{test.estrelas}</h3>
                <p>{test.texto}</p>
                <hr />
                <p>{test.autor}</p>
                <p className={styles.funcao}>{test.funcao}</p>
              </div>
            ))}
          </div>

          <button 
            className={styles.carrosselArrow} 
            onClick={() => setTestemunhoAtivo((prev) => (prev === testemunhos.length - 1 ? 0 : prev + 1))}
            aria-label="Próximo depoimento"
          >
            ›
          </button>
        </div>

        <div className={styles.carrosselDots}>
          {testemunhos.map((_, index) => (
            <span 
              key={index} 
              className={`${styles.carrosselDot} ${index === testemunhoAtivo ? styles.activeDot : ""}`}
              onClick={() => setTestemunhoAtivo(index)}
            />
          ))}
        </div>
      </section>

      {/* Section 7 (Contato) */}
      <section className={styles.section7}>
        <img src={vector13} alt="" className={styles.vector13} />
        <img src={vector14} alt="" className={styles.vector14} />
        <img src={vector15} alt="" className={styles.vector15} />
        <h2 className={styles.reveal}>Entre em contato</h2>
        <p className={`${styles.reveal} ${styles.revealDelay1}`}>Estamos aqui para ajudar. Preencha o formulário e entraremos em contato em breve.</p>
        <div className={`${styles.contend} ${styles.reveal} ${styles.revealDelay2}`}>
          <div className={styles.formi}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ flex: 1 }}>
                <label className="nome-form" htmlFor="nome">Nome</label>
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
            <button type="button">Enviar</button>
          </div>
        </div>
      </section>

      <Footer />

      {showVideoModal && (
        <div className={styles.videoOverlay} onClick={() => setShowVideoModal(false)}>
          <div className={styles.videoBox} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeVideo} 
              onClick={() => setShowVideoModal(false)}
              aria-label="Fechar vídeo"
            >
              ×
            </button>
            <video src={moveVideo} controls autoPlay className={styles.videoPlayer} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
