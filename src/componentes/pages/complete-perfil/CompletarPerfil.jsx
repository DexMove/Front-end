import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompletarPerfil.css";
import Footer from "../../Footer";
import Header from '../../Header';
import api from "../../../services/api";

export default function CompletarPerfil() {
  const navigate = useNavigate();
  const [quemUtilizara, setQuemUtilizara] = useState("eu_mesmo");
  const [form, setForm] = useState({
    idade: "",
    peso: "",
    diagnostico: "",
    maoAfetada: "",
    grauDificuldade: "",
    objetivo: "",
    nomePaciente: "",
    parentesco: "",
    telefone: "",
    email: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      idade: Number(form.idade),
      peso: Number(form.peso),
      diagnostico: form.diagnostico,
      maoAfetada: form.maoAfetada,
      grauDificuldade: form.grauDificuldade,
      objetivo: form.objetivo,
      quemUtilizara: quemUtilizara,
    };

    if (quemUtilizara === "outro") {
      payload.nomePaciente = form.nomePaciente;
      payload.parentesco = form.parentesco.toUpperCase();
      payload.email = form.email;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      alert("Sessão expirada. Faça login novamente.");
      navigate("/entrar");
      return;
    }

    try {
      await api.put("/usuarios/perfil/clinico", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (quemUtilizara === "eu_mesmo") {
        navigate("/minha-conta2");
      } else {
        navigate("/minha-conta");
      }
    } catch (error) {
      console.error("Erro ao salvar perfil clínico:", error);
      if (error.response?.status === 401 || error.response?.status === 403) {
        alert("Sessão expirada. Faça login novamente.");
        localStorage.removeItem('token');
        navigate("/entrar");
      } else {
        alert("Erro ao salvar perfil. Tente novamente.");
      }
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
                    <option value="avc">AVC</option>
                    <option value="lesao_medular">Lesão medular</option>
                    <option value="paralisia_cerebral">Paralisia cerebral</option>
                    <option value="trauma_ortopedico">Trauma ortopédico</option>
                  </select>
                </div>
              </div>
              <div className="cp-field">
                <label className="cp-label">Mão afetada</label>
                <div className="cp-select-wrap">
                  <select className="cp-select" name="maoAfetada" value={form.maoAfetada} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option value="Direita">Direita</option>
                    <option value="Esquerda">Esquerda</option>
                    <option value="Ambas">Ambas</option>
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
                    <option value="leve">Leve</option>
                    <option value="moderada">Moderado</option>
                    <option value="grave">Grave</option>
                  </select>
                </div>
              </div>
              <div className="cp-field">
                <label className="cp-label">Principal objetivo da reabilitação</label>
                <div className="cp-select-wrap">
                  <select className="cp-select" name="objetivo" value={form.objetivo} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option value="recuperar_forca">Recuperar força</option>
                    <option value="melhorar_coordenacao">Melhorar coordenação</option>
                    <option value="reduzir_dor">Reduzir dor</option>
                    <option value="independencia_funcional">Independência funcional</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quem utiliza */}
            <div className="cp-field cp-field--full">
              <label className="cp-label">Quem utilizará a órtese?</label>
              <label className="cp-radio">
                <input type="radio" name="quemUtilizara" value="eu_mesmo" checked={quemUtilizara === "eu_mesmo"} onChange={() => setQuemUtilizara("eu_mesmo")} />
                <span className="cp-radio-dot" />
                Eu mesmo
              </label>
              <label className="cp-radio">
                <input type="radio" name="quemUtilizara" value="outro" checked={quemUtilizara === "outro"} onChange={() => setQuemUtilizara("outro")} />
                <span className="cp-radio-dot" />
                Outra pessoa sob minha responsabilidade
              </label>
            </div>

            {/* Dados do responsável — aparece se "outro" */}
            {quemUtilizara === "outro" && (
              <div className="cp-responsavel">
                <p className="cp-responsavel-title">Dados do responsável</p>
               
                  <div className="cp-field">
                    <label className="cp-label">Nome da pessoa que utilizará a órtese</label>
                    <input className="cp-input cp-input--dark" name="nomePaciente" type="text"
                      value={form.nomePaciente} onChange={handleChange} required />
                  </div>
                  <div className="cp-field">
                    <label className="cp-label">Parentesco</label>
                    <div className="cp-select-wrap">
                      <select className="cp-select cp-select--dark" name="parentesco" value={form.parentesco} onChange={handleChange} required>
                        <option value="">Selecione</option>
                        <option value="PAI">Pai</option>
                        <option value="MAE">Mãe</option>
                        <option value="CONJUGE">Cônjuge</option>
                        <option value="IRMAO_IRMA">Irmão/Irmã</option>
                        <option value="FILHO_FILHA">Filho/Filha</option>
                        <option value="TUTOR_LEGAL">Tutor Legal</option>
                        <option value="OUTRO">Outro</option>
                      </select>
                    </div>
                  </div>
            
                <div className="cp-row">
                  
                  <div className="cp-field">
                    <label className="cp-label">E-mail</label>
                    <input className="cp-input cp-input--dark" name="email" type="email"
                      value={form.email} onChange={handleChange} required />
                  </div>
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