import { useState } from "react";
import { 
  ChevronDown, ClipboardList, FileDown, ArrowUpRight, 
  ShieldAlert, MessageSquareText, Send, TrendingUp, CheckCircle2
} from "lucide-react";
import { MdOutlineBackHand } from 'react-icons/md';
import Header2 from "../../Header2";
import Footer from "../../Footer";
import "./Assistencia_ortese.css";

const orientacoes = [
  "Mantenha o punho alinhado e os dedos levemente abertos durante a execução.",
  "Evite compensações com o ombro durante o movimento.",
  "Faça a pausa recomendada entre as repetições para evitar fadiga.",
];

function Assistencia_ortese() {
  const [orientacaoAberta, setOrientacaoAberta] = useState(true);

  return (
    <main className="ao-page-wrapper">
      <Header2 />

      <div className="ao-container">
        {/* Cabeçalho */}
        <header className="ao-header-content">
          <h1>Assistente inteligente Dexmove</h1>
          <p>Suporte personalizado exclusivamente nas orientações do seu fisioterapeuta</p>
        </header>

        {/* Onda */}
        <div className="ao-onda-topo">
          <svg viewBox="0 0 1440 450" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0b5c6a" d="M0,250 C300,-150 1100,700 1440,250 V450 H0 Z" />
            <path fill="#ffb366" d="M0,280 C300,-120 1100,730 1440,280 V450 H0 Z" />
            <path fill="#efe39b" d="M0,310 C300,-90 1100,760 1440,310 V450 H0 Z" />
            <path fill="#ffffff" d="M0,340 C300,-60 1100,790 1440,340 V450 H0 Z" />
          </svg>
        </div>

        {/* Identificação */}
        <section className="ao-intro">
          <div className="ao-id-box">
            <MdOutlineBackHand className="ao-hand-icon" />
            <strong>MoveHand</strong>
          </div>
        </section>

        {/* Stack de Cards */}
        <div className="ao-content-stack">
          
          {/* Card 1: Orientação */}
          <section className={`ao-card ao-accordion ${orientacaoAberta ? 'open' : ''}`}>
            <div className="ao-acc-trigger" onClick={() => setOrientacaoAberta(!orientacaoAberta)}>
              <div className="ao-icon-box orange"><ClipboardList size={30} /></div>
              <div className="ao-title-text">
                <h3>Orientação para esta sessão</h3>
                <p>Informação definida pelo seu fisioterapeuta</p>
              </div>
              <ChevronDown className={`ao-chevron ${orientacaoAberta ? 'rotate' : ''}`} />
            </div>
            {orientacaoAberta && (
              <div className="ao-acc-content">
                {orientacoes.map((item, index) => <p key={index}>{item}</p>)}
              </div>
            )}
          </section>

          {/* Card 2: Evolução */}
          <section className="ao-card ao-evolution">
            <div className="ao-card-header">
              <TrendingUp size={28} color="#0B5C6A" />
              <div className="ao-title-text">
                <h3>Como você está evoluído</h3>
                <p>A IA analisa seus dados para acompanhar sua execução</p>
              </div>
            </div>
            <div className="ao-banner-green">
              <CheckCircle2 size={20} />
              <div>
                <strong>Execução dentro do parâmetro recomendado</strong>
                <span>Continue assim! Você está seguindo as orientações corretamente</span>
              </div>
            </div>
            <div className="ao-metrics">
              <div className="ao-metric-item"><strong>5</strong><span>Sessão realizada esta semana</span></div>
              <div className="ao-divider"></div>
              <div className="ao-metric-item"><strong>95%</strong><span>Regularidade das sessões</span></div>
              <div className="ao-divider"></div>
              <div className="ao-metric-item"><strong>Boa</strong><span>Padrão de execuções</span></div>
            </div>
          </section>

          {/* Card 3: Chat */}
          <section className="ao-card ao-chat">
            <div className="ao-card-header">
              <MessageSquareText size={28} color="#27ae60" />
              <div className="ao-title-text">
                <h3>Converse com a IA.</h3>
                <p>Tire suas dúvidas com base nos dados da sua utilização.</p>
              </div>
            </div>
            <div className="ao-chat-box">
              <div className="ao-bubble user">Como devo posicionar a minha mão?</div>
              <div className="ao-bubble ai">Mantenha o punho alinhado e os dedos levemente abertos.</div>
            </div>
            <div className="ao-chat-input">
              <input type="text" placeholder="Digite a sua dúvida" />
              <button><Send size={18} /></button>
            </div>
          </section>

          {/* Card 4: Compartilhar */}
          <section className="ao-card ao-share">
             <div className="ao-share-layout">
                <div className="ao-title-text">
                  <h3>Acompanhe e compartilhe</h3>
                  <p>Exporte seu relatório e mande para o seu fisioterapeuta.</p>
                </div>
                <div className="ao-share-btns">
                  <button className="ao-btn-primary">Exportar relatório</button>
                  <button className="ao-btn-outline"><Send size={16}/> Enviar para o fisioterapeuta</button>
                </div>
             </div>
          </section>

          {/* Card 5: Importante */}
          <section className="ao-card ao-important">
            <div className="ao-card-header">
              <ShieldAlert size={24} color="#0B5C6A" />
              <h3>Importante</h3>
            </div>
            <p>A IA da Dexmove é uma ferramenta de apoio e não substitui a atuação do Fisioterapeuta.</p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Assistencia_ortese;