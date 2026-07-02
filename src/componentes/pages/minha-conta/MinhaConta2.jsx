import "./MinhaConta.css";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function MinhaConta2() {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      const token = localStorage.getItem('token');
      if (!token) { navigate('/entrar'); return; }

      try {
        const response = await api.get('/usuarios/perfil/completo', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log("DADOS DO PERFIL:", response.data);
        setPerfil(response.data);
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
      } finally {
        setLoading(false);
      }
    };
    carregarDados();
  }, [navigate]);

  if (loading) return <p style={{textAlign:'center', padding:'50px'}}>Carregando...</p>;

  const user = perfil || {};
  const clinico = perfil?.dadosEspecificos || {};

  // Função para formatar o texto dos Enums (ex: LESAO_MEDULAR -> Lesao medular)
  const formatarEnum = (texto) => {
    if (!texto) return "Não informado";
    return texto.toLowerCase().replace(/_/g, " ");
  };

  return (
    <main>
      <Header2 />
      <div className="mc-page">
        <div className="mc-container">
          <h1 className="mc-page-title">Minha conta</h1>

          {/* Card Cadastro */}
          <div className="mc-card">
            <div className="mc-card-header">
              <span className="mc-card-label">INFORMAÇÕES DE CADASTRO</span>
              <Link to="/editar-informacoes2" className="mc-edit-btn">Editar</Link>
            </div>
            <div className="mc-card-body">
              <div className="mc-info-row"><span>{user.nome} {user.sobrenome}</span></div>
              <div className="mc-info-row"><span>{user.email}</span></div>
            </div>
          </div>

          {/* Card Clínico */}
          <div className="mc-card mc-card--patient">
            <div className="mc-card-header">
              <span className="mc-card-label">SEUS DADOS CLÍNICOS</span>
              <Link to="/editar-paciente" className="mc-edit-btn">Editar dados</Link>
            </div>
            <div className="mc-patient-body">
              <div className="mc-patient-grid">
                <div className="mc-patient-item">
                  <span className="mc-patient-key">IDADE</span>
                  <span className="mc-patient-val">{clinico.idade ? `${clinico.idade} anos` : 'Não informado'}</span>
                </div>
                <div className="mc-patient-item">
                  <span className="mc-patient-key">PESO (KG)</span>
                  <span className="mc-patient-val">{clinico.pesoKg ? `${clinico.pesoKg} kg` : 'Não informado'}</span>
                </div>
                <div className="mc-patient-item">
                  <span className="mc-patient-key">DIAGNÓSTICO</span>
                  <span className="mc-patient-val" style={{textTransform: 'capitalize'}}>
                    {formatarEnum(clinico.diagnosticoBase)}
                  </span>
                </div>
                <div className="mc-patient-item">
                  <span className="mc-patient-key">MÃO AFETADA</span>
                  <span className="mc-patient-val">{formatarEnum(clinico.maoAfetada)}</span>
                </div>
                <div className="mc-patient-item">
                  <span className="mc-patient-key">DIFICULDADE</span>
                  <span className="mc-patient-val">{formatarEnum(clinico.grauDificuldade)}</span>
                </div>
                <div className="mc-patient-item">
                  <span className="mc-patient-key">OBJETIVO</span>
                  <span className="mc-patient-val">{formatarEnum(clinico.objetivoReabilitacao)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}