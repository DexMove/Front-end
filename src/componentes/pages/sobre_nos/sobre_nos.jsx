import { useState } from "react";
import styles from "./sobre_nos.module.css";

// Importação das imagens
import equipe1 from "../../../assets/Vitoria.png";
import equipe2 from "../../../assets/Christian.png";
import equipe3 from "../../../assets/Thalyson.png";
import equipe4 from "../../../assets/Amanda.png";
import equipe5 from "../../../assets/Melissa.png";
import equipe6 from "../../../assets/Luiz.png";
import logoSenac from "../../../assets/senac.png";
import logoProa from "../../../assets/proa.png";
import logoEverRise from "../../../assets/everRise.PNG";
import iconeMissao from "../../../assets/missao.png";
import iconeVisao from "../../../assets/visao.png";
import iconeValores from "../../../assets/valores.png";
import videoDexMove from "../../../assets/dexmove.mp4";
import video from "../../../assets/Dexy.mp4";
import Footer from '../../Footer';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from '../../Header';

function SobreNos() {
  const equipe = [
    { id: 1, nome: "Vitória Laurenzano", cargo: "P.O e desenvolvedora back end", imagem: equipe1 },
    { id: 2, nome: "Christian Damasceno", cargo: "Scrum master e desenvolvedor back end", imagem: equipe2 },
    { id: 3, nome: "Thalyson Pereira", cargo: "Marketing e desenvolvedor front end", imagem: equipe3 },
    { id: 4, nome: "Amanda Cristina", cargo: "Desenvolvedora front end", imagem: equipe4 },
    { id: 5, nome: "Melissa Fiuza", cargo: "Financeira e Desenvolvedora front end", imagem: equipe5 },
    { id: 6, nome: "Luiz Gustavo", cargo: "Desenvolvedor hardware", imagem: equipe6 },
  ];

  const apoiadores = [
    { id: 1, nome: "Senac", logo: logoSenac },
    { id: 2, nome: "PROA", logo: logoProa },
    { id: 3, nome: "Ever Rise", logo: logoEverRise },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className={styles.container}>
      <Header />
      
      {/* ========== SEÇÃO 1: VÍDEO NO TOPO ========== */}
      <section className={styles.secaoVideo}>
        <div className={styles.videoWrapper}>
          <video autoPlay loop muted playsInline className={styles.videoBg}>
            <source src={videoDexMove} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          <div className={styles.videoOverlay}></div>
          <div className={styles.videoConteudo}>
            <h1>DexMove</h1>
            <p>Tecnologia que move vidas</p>
          </div>
        </div>
      </section>

      {/* ========== SEÇÃO 2: TEXTO CENTRALIZADO ========== */}
      <section className={styles.secaoOndas}>
        <div className={styles.containerOndas}>
          <svg viewBox="0 0 1440 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f3e396" d="M0,0 H1440 V400 C1100,400 400,400 0,450 Z"></path>
            <path fill="#ffb366" d="M0,0 H1440 V350 C1100,450 400,350 0,400 Z"></path>
            <path fill="#0b5c6a" d="M0,0 H1440 V300 C1100,400 100,400 0,150 Z"></path>
          </svg>
        </div>
        <div className={styles.containerTextoDestaque}>
          <div className={styles.textoOndasCentralizado}>
            <h2>Sobre a DexMove:</h2>
            <p>
              A DexMove nasce da inquietação de não aceitar que o movimento seja
              limitado quando a tecnologia pode ampliar possibilidades. Criamos
              soluções que unem inovação e cuidado para auxiliar na autonomia,
              independência e novos começos a quem mais precisa.
            </p>
          </div>
        </div> 
      </section>

      {/* ========== SEÇÃO 3: CHATBOT DEXY ========== */}
      <section className={styles.secaoDexy}>
        <div className={styles.dexyContainer}>
          <div className={styles.dexyTexto}>
            <h2>
              Conheça nosso chatbot,
              <span className={styles.dexyDestaque}> Dexy!</span>
            </h2>
            <p>
              A Dexy surgiu para estar ao lado dos nossos usuários, oferecendo
              ajuda rápida, prática e inteligente. Sempre pronta para ajudar no
              que for preciso.
            </p>
            <div className={styles.dexyFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>💡</span>
                <span>Respostas rápidas</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎧</span>
                <span>Disponível 24h</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>👩‍🎓</span>
                <span>Experiência acolhedora</span>
              </div>
            </div>
          </div>
          <div className={styles.dexyImagem}>
            <video autoPlay loop muted playsInline className={styles.videoDexy}>
              <source src={video} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>

        <div className={styles.ondaDexy}>
          <svg viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path fill="#ffb366" d="M0,0 C220,170 420,200 650,170 C900,130 1150,70 1440,90 L1440,150 C1150,120 900,170 650,220 C420,250 220,220 0,90 Z" />
            <path fill="#f3e396" d="M0,50 C220,220 420,250 650,220 C900,170 1150,120 1440,150 L1440,210 C1150,200 1000,220 700,270 C420,300 220,280 0,170 Z" />
          </svg>
        </div>
      </section>

      {/* ========== SEÇÃO 4: MISSÃO, VISÃO E VALORES ========== */}
      <section className={styles.secaoMVV}>
        <h2>Nossa missão, visão e valores</h2>
        <div className={styles.mvvGrid}>
          <div className={styles.mvvCard}>
            <img src={iconeMissao} alt="Missão" className={styles.mvvImage} />
            <h3>O que fazemos hoje</h3>
            <p>A nossa missão é proporcionar reabilitação 
              eficaz através da tecnologia robótica, 
              contribuindo para a autonomia e qualidade de 
              vida</p>
          </div>
          <div className={styles.mvvCard}>
            <img src={iconeVisao} alt="Visão" className={styles.mvvImage} />
            <h3>O futuro que buscamos</h3>
            <p>Nossa visão é trazer uma solução inovadora e 
              tecnológica, priorizando sempre a 
              acessibilidade e a praticidade.</p>
          </div>
          <div className={styles.mvvCard}>
            <img src={iconeValores} alt="Valores" className={styles.mvvImage} />
            <h3>Nossos valores</h3>
            <p>Acessibilidade, inclusão, ética, inovação, 
              transparência e cuidado com o paciente.</p>
          </div>
        </div>
      </section>

      {/* ========== SEÇÃO 5: EQUIPE ========== */}
      <section className={styles.secaoEquipe}>
        <div className={styles.ondaFundoEquipe}>
          <svg viewBox="0 0 1440 450" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0b5c6a" d="M0,250 C300,-150 1100,700 1440,250 V450 H0 Z" />
            <path fill="#ffb366" d="M0,280 C300,-120 1100,730 1440,280 V450 H0 Z" />
            <path fill="#efe39b" d="M0,310 C300,-90 1100,760 1440,310 V450 H0 Z" />
            <path fill="#ffffff" d="M0,340 C300,-60 1100,790 1440,340 V450 H0 Z" />
          </svg>
        </div>
        <h2>Nossa equipe</h2>
        <p>Profissionais apaixonados por tecnologia e reabilitação</p>
        <div className={styles.equipeGrid}>
          {equipe.map((membro) => (
            <div 
              key={membro.id} 
              className={styles.cardEquipe} 
              onMouseEnter={() => setHoveredId(membro.id)} 
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={styles.fotoContainer}>
                <img src={membro.imagem} alt={membro.nome} className={styles.fotoEquipe} />
                <div className={`${styles.overlayEquipe} ${hoveredId === membro.id ? styles.overlayVisible : ""}`}>
                  <p>{membro.cargo}</p>
                  {/* Texto "Especialista em reabilitação" removido daqui */}
                </div>
              </div>
              <h4 className={styles.nomeEquipe}>{membro.nome}</h4>
            </div>
          ))}
        </div>
        <div className={styles.ondaEquipe}>
          <svg viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path fill="#ffb366" d="M0,0 C220,170 420,200 650,170 C900,130 1150,70 1440,90 L1440,150 C1150,120 900,170 650,220 C420,250 220,220 0,90 Z" />
            <path fill="#f3e396" d="M0,50 C220,220 420,250 650,220 C900,170 1150,120 1440,150 L1440,210 C1150,200 1000,220 700,270 C420,300 220,280 0,170 Z" />
          </svg>
        </div>
      </section>

      {/* ========== SEÇÃO 6: APOIADORES ========== */}
      <section className={styles.secaoApoiadores}>
        <h2>Nossos apoiadores</h2>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 50 } }}
          className={styles.carrosselApoiadores}
        >
          {apoiadores.map((apoio) => (
            <SwiperSlide key={apoio.id}>
              <div className={styles.cardApoiador}>
                <img src={apoio.logo} alt={apoio.nome} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer/>
    </div>
  );
}

export default SobreNos;