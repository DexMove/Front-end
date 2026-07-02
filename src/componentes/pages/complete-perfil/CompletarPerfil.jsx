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

    // CORREÇÃO: Converte para número apenas se houver valor, evitando NaN (Erro 400)
    const idadeNum = form.idade ? parseInt(form.idade) : null;
    const pesoNum = form.peso ? parseFloat(form.peso) : null;

    // Montagem do Payload conforme o DTO do Back-end
    const payload = {
      idade: idadeNum,
      peso: pesoNum,
      diagnostico: form.diagnostico,
      maoAfetada: form.maoAfetada,
      grauDificuldade: form.grauDificuldade,
      objetivo: form.objetivo,
      quemUtilizara: quemUtilizara, // "eu_mesmo" ou "outro"
      nomePaciente: quemUtilizara === "outro" ? form.nomePaciente : "",
      parentesco: quemUtilizara === "outro" ? form.parentesco : null,
    };

    const token = localStorage.getItem('token');

    if (!token) {
      alert("Sessão expirada. Faça login novamente.");
      navigate("/entrar");
      return;
    }

    try {
      // Chamada PUT para atualizar os dados clínicos e criar o vínculo
      await api.put("/usuarios/perfil/clinico", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Perfil atualizado com sucesso!");

      if (quemUtilizara === "eu_mesmo") {
        navigate("/minha-conta2");
      } else {
        navigate("/minha-conta");
      }
    } catch (error) {
      console.error("Erro ao salvar perfil clínico:", error);
      
      if (error.response?.status === 400) {
        alert("Erro nos dados enviados. Verifique se todos os campos estão preenchidos corretamente.");
      } else if (error.response?.status === 401 || error.response?.status === 403) {
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
                <input className="cp-input" name="peso" type="number" step="0.1" placeholder="Ex: 70.5"
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
                    <option value="AVC">AVC</option>
                    <option value="LESAO_MEDULAR">Lesão medular</option>
                    <option value="PARALISIA_CEREBRAL">Paralisia cerebral</option>
                    <option value="TRAUMA_ORTOPEDICO">Trauma ortopédico</option>
                  </select>
                </div>
              </div>
              <div className="cp-field">
                <label className="cp-label">Mão afetada</label>
                <div className="cp-select-wrap">
                  <select className="cp-select" name="maoAfetada" value={form.maoAfetada} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option value="DIREITA">Direita</option>
                    <option value="ESQUERDA">Esquerda</option>
                    <option value="AMBAS">Ambas</option>
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
                    <option value="LEVE">Leve</option>
                    <option value="MODERADA">Moderado</option>
                    <option value="GRAVE">Grave</option>
                  </select>
                </div>
              </div>
              <div className="cp-field">
                <label className="cp-label">Principal objetivo da reabilitação</label>
                <div className="cp-select-wrap">
                  <select className="cp-select" name="objetivo" value={form.objetivo} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option value="RECUPERAR_FORCA">Recuperar força</option>
                    <option value="MELHORAR_COORDENACAO">Melhorar coordenação</option>
                    <option value="REDUZIR_DOR">Reduzir dor</option>
                    <option value="INDEPENDENCIA_FUNCIONAL">Independência funcional</option>
                    <option value="OUTRO">Outro</option>
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
                <p className="cp-responsavel-title">Dados do dependente</p>
               
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