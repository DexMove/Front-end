import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Login/style.css";
import "./cadastro_fisioterapeuta.css";
import Footer from "../../Footer";
import Fisioterapeuta from "../../../assets/fisioterapeuta.png";
import Header from '../../Header';

const IconId = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const IconSpecialty = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M9 14 7 22l5-3 5 3-2-8"/>
  </svg>
);
const IconClinic = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconAbout = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

export default function DadosProfissionais() {
  const navigate = useNavigate();
  const location = useLocation();
  const [termos, setTermos] = useState(false);

  const [dados, setDados] = useState({
    crefito: "", especialidade: "", atendimento: "online", clinica: "", telefone: "", sobre: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const dadosCompletos = { ...location.state, ...dados };
    console.log("Cadastro completo:", dadosCompletos);
    navigate("/conta-fisio");
  }

  return (
    <main>
      <Header />
      <section className="lc-page">
        <div className="lc-left">

          <h1 className="lc-title">Dados profissionais</h1>
          <p className="lc-subtitle">Conte um pouco mais sobre sua atuação profissional.</p>

          <form onSubmit={handleSubmit}>
            <div className="lc-row">
              <div className="lc-field">
                <label className="lc-label">Número CREFITO</label>
                <div className="lc-input-wrap">
                  <IconId />
                  <input type="text" placeholder="Ex:123456-4"
                    value={dados.crefito}
                    onChange={(e) => setDados({ ...dados, crefito: e.target.value })} />
                </div>
              </div>
              <div className="lc-field">
                <label className="lc-label">Especialidade</label>
                <div className="lc-input-wrap cf-input-wrap--select">
                  <IconSpecialty />
                  <select
                    value={dados.especialidade}
                    onChange={(e) => setDados({ ...dados, especialidade: e.target.value })}>
                    <option value="">Selecione</option>
                    <option>Ortopedia e traumatologia</option>
                    <option>Neurologia</option>
                    <option>Cardiorrespiratória</option>
                    <option>Geriatria</option>
                    <option>Pediatria</option>
                    <option>Esportiva</option>
                    <option>Dermatofuncional</option>
                    <option>Saúde da mulher</option>
                    <option>Outra</option>
                  </select>
                </div>
              </div>
            </div>

            <p className="cf-section-title">Qual a forma de atendimento?</p>
            <label className="cf-radio">
              <input type="radio" name="atendimento" checked={dados.atendimento === "online"}
                onChange={() => setDados({ ...dados, atendimento: "online" })} />
              <span className="cf-radio-dot" />
              Online e presencial
            </label>
            <label className="cf-radio">
              <input type="radio" name="atendimento" checked={dados.atendimento === "presencial"}
                onChange={() => setDados({ ...dados, atendimento: "presencial" })} />
              <span className="cf-radio-dot" />
              Somente presencial
            </label>

            <div className="lc-field">
              <label className="lc-label">Clínica ou local de atendimento</label>
              <div className="lc-input-wrap">
                <IconClinic />
                <input type="text" placeholder="Nome da clínica ou local"
                  value={dados.clinica}
                  onChange={(e) => setDados({ ...dados, clinica: e.target.value })} />
              </div>
            </div>

            <div className="lc-field">
              <label className="lc-label">Telefone</label>
              <div className="lc-input-wrap">
                <IconPhone />
                <input type="tel" placeholder="(00) 00000-0000"
                  value={dados.telefone}
                  onChange={(e) => setDados({ ...dados, telefone: e.target.value })} />
              </div>
            </div>

            <div className="lc-field">
              <label className="lc-label">Sobre</label>
              <div className="lc-input-wrap cf-input-wrap--textarea">
                <IconAbout />
                <textarea rows={3} placeholder="Conte mais sobre você"
                  value={dados.sobre}
                  onChange={(e) => setDados({ ...dados, sobre: e.target.value })} />
              </div>
            </div>

            <label className="cf-checkbox">
              <input type="checkbox" checked={termos} onChange={() => setTermos(!termos)} required />
              <span>
                Li e concordo com os <a href="/termos" className="cf-link">Termos de Consentimento e Tratamento de Dados</a> conforme a LGPD.
              </span>
            </label>

            <button type="submit" className="lc-submit">Criar minha conta</button>
          </form>
        </div>

        <div className="cf-img">
          <img src={Fisioterapeuta} alt="Fisioterapeutas" />
        </div>
      </section>
      <Footer />
    </main>
  );
}