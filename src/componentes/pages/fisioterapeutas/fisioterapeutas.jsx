import { useState, useEffect } from "react";
import "./Fisioterapeutas.css";
import Footer from "../../Footer";
import fisioterapeuta1 from "../../../assets/image_62.png";
import fisioterapeuta2 from "../../../assets/image_62.png";
import fisioterapeuta3 from "../../../assets/image_62.png";
import fisioterapeuta4 from "../../../assets/image_62.png";

export default function Fisioterapeutas() {
  const [modalAberto, setModalAberto] = useState(false);
  const [fisioSelecionado, setFisioSelecionado] = useState(null);
  const [mensagemAgendamento, setMensagemAgendamento] = useState("");

    useEffect(() => {
    if (modalAberto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalAberto]);


  const fisioterapeutas = [
  {
    id: 1,
    nome: "Lucas Barbosa",
    especialidade: "Fisioterapeuta Ocupacional",
    crefito: "123456-F",
    cidade: "São Paulo, SP",
    nota: "4.9",
    atendimento: "Presencial",
    imagem: fisioterapeuta1,
    telefone: "(11) 99999-1234",
    email: "lucas.barbosa@email.com",
    experiencia: "8 anos de experiência",
    bio: "Especialista em reabilitação ocupacional com foco em qualidade de vida.",
  },
  {
    id: 2,
    nome: "Lucas Barbosa",
    especialidade: "Fisioterapeuta Ocupacional",
    crefito: "123456-F",
    cidade: "São Paulo, SP",
    nota: "4.9",
    atendimento: "Online",
    imagem: fisioterapeuta2,
    telefone: "(11) 99999-1234",
    email: "lucas.barbosa@email.com",
    experiencia: "8 anos de experiência",
    bio: "Especialista em reabilitação ocupacional com foco em qualidade de vida.",
  },
  {
    id: 3,
    nome: "Lucas Barbosa",
    especialidade: "Fisioterapeuta Ocupacional",
    crefito: "123456-F",
    cidade: "São Paulo, SP",
    nota: "4.9",
    atendimento: "Presencial",
    imagem: fisioterapeuta3,
    telefone: "(11) 99999-1234",
    email: "lucas.barbosa@email.com",
    experiencia: "8 anos de experiência",
    bio: "Especialista em reabilitação ocupacional com foco em qualidade de vida.",
  },
  {
    id: 4,
    nome: "Lucas Barbosa",
    especialidade: "Fisioterapeuta Ocupacional",
    crefito: "123456-F",
    cidade: "São Paulo, SP",
    nota: "4.9",
    atendimento: "Presencial e Online",
    imagem: fisioterapeuta4,
    telefone: "(11) 99999-1234",
    email: "lucas.barbosa@email.com",
    experiencia: "8 anos de experiência",
    bio: "Especialista em reabilitação ocupacional com foco em qualidade de vida.",
  },
];

  const cidades = ["Todas", "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR"];
  const especialidades = ["Todas", "Fisioterapeuta Ocupacional", "Fisioterapeuta Desportiva", "Fisioterapeuta Neurológica", "Fisioterapeuta Respiratória"];
  const atendimentos = ["Todos", "Presencial", "Online", "Presencial e Online"];

  const abrirModal = (fisio) => {
    setFisioSelecionado(fisio);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setFisioSelecionado(null);
    setMensagemAgendamento("");
  };

  const handleAgendarConsulta = () => {
    setMensagemAgendamento("Seção inválida, contrate um dos nossos planos para realizar sua consulta");

    setTimeout(() => {
      setMensagemAgendamento("");
    }, 3000);
 };

  return (
    <main>
    <section className="paginaFisio">

              {/* Onda atrás dos cards */}

<div className="ondaSuperior">
  <svg
    viewBox="0 0 1440 180"
    preserveAspectRatio="none"
  >

    <path
      fill="#0b5c6a"
      d="M0,128L120,96C240,64,480,32,720,48C960,64,1200,128,1320,144L1440,120V180H0Z"
    />

    <path
      fill="#ffb366"
      d="M0,140L120,108C240,76,480,44,720,60C960,76,1200,140,1320,156L1440,132V180H0Z"
    />

    <path
      fill="#efe39b"
      d="M0,152L120,120C240,88,480,56,720,72C960,88,1200,152,1320,164L1440,144V180H0Z"
    />

    <path
      fill="#f9f9f9"
      d="M0,164L120,132C240,100,480,68,720,84C960,100,1200,164,1320,176L1440,156V360H0Z"
    />
  </svg>
</div>

      <div className="fisioContainer">
        <h1 className="tituloFisio">
          Fisioterapeutas parceiros
        </h1>

        <p className="subtituloFisio">
          Encontre o profissional ideal para sua reabilitação
        </p>

        <div className="filtrosFisio">
          <select>
            <option>Cidade</option>
            {cidades.map((cidade) => (
              <option key={cidade}>{cidade}</option>
            ))}
          </select>

          <select>
            <option>Especialidade</option>
            {especialidades.map((esp) => (
              <option key={esp}>{esp}</option>
            ))}
          </select>

          <select>
            <option>Atendimento</option>
            {atendimentos.map((atend) => (
              <option key={atend}>{atend}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Buscar por nome"
          />
        </div>



        <div className="gridFisio">
          {fisioterapeutas.map((fisio) => (
            <div
              className="cardFisio"
              key={fisio.id}
            >
              <span className="badgeVerificado">
                Verificado
              </span>

              <img
                src={fisio.imagem}
                alt={fisio.nome}
                className="fotoFisio"
              />

              <div className="conteudoCard">
                <h3>{fisio.nome}</h3>

                <p className="especialidade">
                  {fisio.especialidade}
                </p>

                <p className="crefito">
                  CREFITO 7 | {fisio.crefito}
                </p>

                <p className="cidade">
                  {fisio.cidade}
                </p>

                <div className="tagsFisio">
                  <span>{fisio.atendimento}</span>
                  <span>Agende agora</span>
                </div>

                <div className="avaliacao">
                  ⭐⭐⭐⭐⭐ {fisio.nota}
                </div>

                <button className="btnPerfil"
                  onClick={() => abrirModal(fisio)}
                >
                  Ver perfil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {modalAberto && (
        <div className="modalOverlay" onClick={fecharModal}>
          <div className="modalConteudo" onClick={(e) => e.stopPropagation()}>
            <button className="btnFecharModal" onClick={fecharModal}>
              ✕
            </button>

            {fisioSelecionado && (
              <>
                <img
                  src={fisioSelecionado.imagem}
                  alt={fisioSelecionado.nome}
                  className="fotoModalFisio"
                />

                <div className="conteudoModal">
                  <h2>{fisioSelecionado.nome}</h2>

                  <div className="infosModal">
                    <div className="infoItem">
                      <span className="label">Especialidade:</span>
                      <span className="valor">{fisioSelecionado.especialidade}</span>
                    </div>

                    <div className="infoItem">
                      <span className="label">Clínica:</span>
                      <span className="valor">{fisioSelecionado.cidade}</span>
                    </div>

                    <div className="infoItem">
                      <span className="label">Atendimento:</span>
                      <span className="valor">{fisioSelecionado.atendimento}</span>
                    </div>

                    <div className="infoItem">
                      <span className="label">CREFITO:</span>
                      <span className="valor">CREFITO 7 | {fisioSelecionado.crefito}</span>
                    </div>

                    <div className="infoItem">
                      <span className="label">Telefone:</span>
                      <span className="valor">{fisioSelecionado.telefone}</span>
                    </div>


                    <div className="infoItem">
                      <span className="label">Sobre:</span>
                      <span className="valor">{fisioSelecionado.bio}</span>
                    </div>

                    <div className="infoItem">
                      <span className="label">Avaliação:</span>
                      <span className="valor">⭐⭐⭐⭐⭐ {fisioSelecionado.nota}</span>
                    </div>
                  </div>

                  <button className="btnAgendar" onClick={handleAgendarConsulta}>
                    Agendar consulta
                  </button>

                    {mensagemAgendamento && (
                      <div className="mensagemAgendamento">
                        {mensagemAgendamento}
                      </div>
                    )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="ondasInferiores">
        <svg
          viewBox="0 0 1440 450"
          preserveAspectRatio="none"
        >
          <path
            fill="#f4a261"
            d="M0,96L80,149.3C160,203,320,309,480,341.3C640,373,800,331,960,304C1120,277,1280,267,1360,261.3L1440,256V450H0Z"
          />

          <path
            fill="#e9dc95"
            d="M0,149L80,192C160,235,320,320,480,341.3C640,363,800,320,960,304C1120,288,1280,299,1360,304L1440,309V450H0Z"
          />

          <path
            fill="#0b5c6a"
            d="M0,245L80,266.7C160,288,320,331,480,336C640,341,800,309,960,298.7C1120,288,1280,299,1360,304L1440,309V450H0Z"
          />
        </svg>
      </div>
    </section>
    <Footer />
    </main>
  );

}

