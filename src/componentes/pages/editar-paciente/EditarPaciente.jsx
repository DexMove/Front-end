import { useState, useEffect } from "react";
import "./EditarPaciente.css";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import Header from '../../Header';
import { useAuth } from "../../../context/AuthContext";
import api from "../../../services/api";

export default function EditarPaciente() {
  const navigate = useNavigate();
  const { idUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [pacienteId, setPacienteId] = useState(null);
  const [form, setForm] = useState({
    nomePaciente: "",
    maoAfetada: "Direita",
    idade: "",
    peso: "",
    diagnostico: "AVC",
    grauDificuldade: "Moderado",
    objetivo: "Recuperar movimentos finos da mão",
  });

  useEffect(() => {
    const fetchPacienteData = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/pacientes/responsavel/${idUser}`);
        if (response.data && response.data.length > 0) {
          const paciente = response.data[0];
          setPacienteId(paciente.id || paciente.idPaciente);
          setForm({
            nomePaciente: paciente.nome || "",
            maoAfetada: paciente.maoAfetada || "Direita",
            idade: paciente.idade?.toString() || "",
            peso: paciente.peso?.toString() || "",
            diagnostico: paciente.diagnostico || "AVC",
            grauDificuldade: paciente.grauDificuldadeMotora || "Moderado",
            objetivo: paciente.objetivoReabilitacao || "Recuperar movimentos finos da mão",
          });
        }
      } catch (err) {
        console.error('Erro ao buscar dados do paciente:', err);
        setError('Não foi possível carregar os dados do paciente.');
      } finally {
        setLoading(false);
      }
    };

    if (idUser) {
      fetchPacienteData();
    }
  }, [idUser]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!form.nomePaciente) {
      alert("Nome do paciente é obrigatório!");
      return;
    }

    try {
      setSaving(true);
      setError(null);

      const updateData = {
        nome: form.nomePaciente,
        maoAfetada: form.maoAfetada,
        idade: parseInt(form.idade) || 0,
        peso: parseFloat(form.peso) || 0,
        diagnostico: form.diagnostico,
        grauDificuldadeMotora: form.grauDificuldade,
        objetivoReabilitacao: form.objetivo,
      };

      if (pacienteId) {
        await api.put(`/pacientes/${pacienteId}`, updateData);
      } else {
        updateData.responsavelId = idUser;
        await api.post('/pacientes', updateData);
      }
      
      alert("Dados do paciente atualizados com sucesso!");
      navigate("/minha-conta");
    } catch (err) {
      console.error('Erro ao salvar:', err);
      const mensagemErro = err.response?.data?.message || "Erro ao salvar as alterações.";
      setError(mensagemErro);
      alert(mensagemErro);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main>
        <Header />
        <div className="ep-page">
          <div className="ep-card">
            <p style={{ textAlign: 'center', padding: '2rem' }}>Carregando...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <div className="ep-page">
        <div className="ep-card">

          <div className="ep-header">
            <h1 className="ep-title">Editar dados do paciente</h1>
            <p className="ep-subtitle">Altere as informações clínicas do paciente</p>
          </div>

          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

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
              <button type="button" className="ep-btn-cancel" onClick={() => navigate("/minha-conta")} disabled={saving}>
                Cancelar
              </button>
              <button type="submit" className="ep-btn-save" disabled={saving}>
                {saving ? "Salvando..." : "Salvar as alterações"}
              </button>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}