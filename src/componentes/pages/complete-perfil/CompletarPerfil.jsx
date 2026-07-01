import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompletarPerfil.css";
import Footer from "../../Footer";
import Header from '../../Header';

export default function CompletarPerfil() {
  const navigate = useNavigate();
  const [quemUsa, setQuemUsa] = useState("eu");
  const [form, setForm] = useState({
    idade: "",
    peso: "",
    diagnostico: "",
    maoAfetada: "",
    grauDificuldade: "",
    objetivoReabilitacao: "",
    nomeResponsavel: "",
    parentesco: "",
    telefone: "",
    email: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ ...form, quemUsa });

    if (quemUsa === "eu") {
      navigate("/minha-conta2");
    } else {
      navigate("/minha-conta");
    }
  }

  return (
    <main>
      <Header />
      <div className="cp-page">
        <div className="cp-card">

          <div className="cp-header">
            <h2 className="cp-title">Complete seu perfil</h2>
            <p className="cp-subtitle">Essas informações nos ajudam a personalizar sua reabilitação.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <h3 className="cp-section-title">Informações obrigatórias</h3>

            {/* Idade + Peso */}
            <div className="cp-row">
              <div className="cp-field">
                <label className="cp-label">Idade</label>
                <input className="cp-input" name="idade" type="number" placeholder="Ex: 45"
                  value={form.idade} onChange={handleChange} required />
              </div>
              <div className="cp-field">
                <label className="cp-label">Peso (kg)</label>
                <input className="cp-input" name="peso" type="number" placeholder="Ex: 70"
                  value={form.peso} onChange={handleChange} required />
              </div>
            </div>

            {/* Diagnóstico + Mão afetada */}
            <div className="cp-row">
              <div className="cp-field">
                <label className="cp-label">Diagnóstico</label>
                <div className="cp-select-wrap">
                  <select className="cp-select" name="diagnostico" value={form.diagnostico} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option>AVC</option>
                    <option>Lesão medular</option>
                    <option>Paralisia cerebral</option>
                    <option>Trauma ortopédico</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>
              <div className="cp-field">
                <label className="cp-label">Mão afetada</label>
                <div className="cp-select-wrap">
                  <select className="cp-select" name="maoAfetada" value={form.maoAfetada} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option>Direita</option>
                    <option>Esquerda</option>
                    <option>Ambas</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grau de dificuldade + Objetivo */}
            <div className="cp-row">
              <div className="cp-field">
                <label className="cp-label">Grau de dificuldade motora</label>
                <div className="cp-select-wrap">
                  <select className="cp-select" name="grauDificuldade" value={form.grauDificuldade} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option>Leve</option>
                    <option>Moderado</option>
                    <option>Grave</option>
                  </select>
                </div>
              </div>
              <div className="cp-field">
                <label className="cp-label">Principal objetivo da reabilitação</label>
                <div className="cp-select-wrap">
                  <select className="cp-select" name="objetivoReabilitacao" value={form.objetivoReabilitacao} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option>Recuperar força</option>
                    <option>Melhorar coordenação</option>
                    <option>Reduzir dor</option>
                    <option>Independência funcional</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quem utiliza */}
            <div className="cp-field cp-field--full">
              <label className="cp-label">Quem utilizará a órtese?</label>
              <label className="cp-radio">
                <input type="radio" name="quemUsa" value="eu" checked={quemUsa === "eu"} onChange={() => setQuemUsa("eu")} />
                <span className="cp-radio-dot" />
                Eu mesmo
              </label>
              <label className="cp-radio">
                <input type="radio" name="quemUsa" value="outro" checked={quemUsa === "outro"} onChange={() => setQuemUsa("outro")} />
                <span className="cp-radio-dot" />
                Outra pessoa sob minha responsabilidade
              </label>
            </div>

            {/* Dados do responsável — aparece se "outro" */}
            {quemUsa === "outro" && (
              <div className="cp-responsavel">
                <p className="cp-responsavel-title">Dados do responsável</p>
               
                  <div className="cp-field">
                    <label className="cp-label">Nome do paciente
                    </label>
                    <input className="cp-input cp-input--dark" name="nomeResponsavel" type="text"
                      value={form.nomeResponsavel} onChange={handleChange} required />
                  </div>
                  <div className="cp-field">
                    <label className="cp-label">Parentesco</label>
                    <div className="cp-select-wrap">
                      <select className="cp-select cp-select--dark" name="parentesco" value={form.parentesco} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option>Pai</option>
                        <option>Mãe</option>
                        <option>Cônjuge</option>
                        <option>Irmão/Irmã</option>
                        <option>Filho/Filha</option>
                        <option>Tutor Legal</option>
                        <option>Outro</option>
                      </select>
                    </div>
                  </div>
            
                <div className="cp-row">
                </div>
              </div>
            )}

            <button type="submit" className="cp-submit">Salvar perfil</button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}