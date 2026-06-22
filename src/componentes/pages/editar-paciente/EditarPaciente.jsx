import { useState } from "react";
import "./EditarPaciente.css";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import Header from '../../Header';

export default function EditarPaciente() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nomePaciente: "Gabriel Souza",
    maoAfetada: "Direita",
    idade: "35",
    peso: "72",
    diagnostico: "AVC",
    grauDificuldade: "Moderado",
    objetivo: "Recuperar movimentos finos da mão",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Paciente atualizado:", form);
    navigate("/minha-conta");
  }

  return (
    <main>
      <Header />
      <div className="ep-page">
        <div className="ep-card">

          <div className="ep-header">
            <h1 className="ep-title">Editar dados clínicos</h1>
            <p className="ep-subtitle">Altere as informações clínicas do paciente</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="ep-row">
              <div className="ep-field">
                <label className="ep-label">Nome paciente</label>
                <input className="ep-input" type="text" name="nomePaciente"
                  value={form.nomePaciente} onChange={handleChange} required />
              </div>
              <div className="ep-field">
                <label className="ep-label">Mão afetada</label>
                <div className="ep-select-wrap">
                  <select className="ep-select" name="maoAfetada" value={form.maoAfetada} onChange={handleChange}>
                    <option>Direita</option>
                    <option>Esquerda</option>
                    <option>Ambas</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="ep-row">
              <div className="ep-field">
                <label className="ep-label">Idade</label>
                <input className="ep-input" type="number" name="idade"
                  value={form.idade} onChange={handleChange} required />
              </div>
              <div className="ep-field">
                <label className="ep-label">Peso (kg)</label>
                <input className="ep-input" type="number" name="peso"
                  value={form.peso} onChange={handleChange} />
              </div>
            </div>

            <div className="ep-field ep-field--full">
              <label className="ep-label">Diagnóstico</label>
              <div className="ep-select-wrap">
                <select className="ep-select" name="diagnostico" value={form.diagnostico} onChange={handleChange}>
                  <option>AVC</option>
                  <option>Lesão medular</option>
                  <option>Paralisia cerebral</option>
                  <option>Trauma ortopédico</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>

            <div className="ep-field ep-field--full">
              <label className="ep-label">Grau de dificuldade motora</label>
              <div className="ep-select-wrap">
                <select className="ep-select" name="grauDificuldade" value={form.grauDificuldade} onChange={handleChange}>
                  <option>Leve</option>
                  <option>Moderado</option>
                  <option>Grave</option>
                </select>
              </div>
            </div>

            <div className="ep-field ep-field--full">
              <label className="ep-label">Principal objetivo da reabilitação</label>
              <div className="ep-select-wrap">
                <select className="ep-select" name="objetivo" value={form.objetivo} onChange={handleChange}>
                  <option>Recuperar movimentos finos da mão</option>
                  <option>Reduzir espasticidade</option>
                  <option>Aumentar amplitude de movimento</option>
                  <option>Fortalecimento muscular</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>

            <div className="ep-actions">
              <button type="button" className="ep-btn-cancel" onClick={() => navigate("/minha-conta")}>
                Cancelar
              </button>
              <button type="submit" className="ep-btn-save">
                Salvar as alterações
              </button>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}