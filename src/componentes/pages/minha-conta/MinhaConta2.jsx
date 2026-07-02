import "./MinhaConta.css";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../services/api";

const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconUser = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

export default function MinhaConta2() {
  const { idUser } = useAuth();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [dadosClinico, setDadosClinico] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      const storedId = idUser || localStorage.getItem('idUser');

      if (!storedId || !token) {
        console.log('[MinhaConta2] Sem credenciais - redirecionando');
        navigate('/entrar');
        return;
      }

      try {
        setLoading(true);
        
        // 1. BUSCA DADOS DO USUÁRIO (Com Token para evitar 403)
        const res = await api.get(`/usuarios/${storedId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setUsuario(res.data);

        // 2. BUSCA DADOS DO PACIENTE (Se o seu back tiver essa rota)
        // Caso os dados clínicos venham dentro do objeto usuario, o código abaixo trata isso
        try {
          const resPac = await api.get(`/pacientes/usuario/${storedId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setDadosClinico(resPac.data);
        } catch (e) {
          console.log("Dados clínicos não encontrados em rota separada, tentando ler do objeto usuário...");
        }

      } catch (err) {
        console.error('[MinhaConta2] Erro:', err);
        if (err.response?.status === 403) {
          setError('Sessão inválida ou sem permissão. Tente logar novamente.');
        } else {
          setError('Não foi possível carregar os dados.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [idUser, navigate]);

  if (loading) return (
    <main><Header2 /><div className="mc-page"><p style={{textAlign:'center', padding:'50px'}}>Carregando...</p></div><Footer /></main>
  );

  if (error) return (
    <main><Header2 /><div className="mc-page"><p style={{textAlign:'center', color:'red', padding:'50px'}}>{error}</p></div><Footer /></main>
  );

  // Atalho para os dados (Backend usa pesoKg, diagnosticoBase, etc.)
  const info = dadosClinico || usuario || {};

  return (
    <main>
      <Header2 />
      <div className="mc-page">
        <div className="mc-container">

          <h1 className="mc-page-title">Minha conta</h1>
          <p className="mc-page-sub">Aqui estão suas informações</p>

          {/* Card Informações de Cadastro */}
          <div className="mc-card">
            <div className="mc-card-header">
              <span className="mc-card-label">Informações de cadastro</span>
              <Link to="/editar-informacoes2" className="mc-edit-btn">
                <IconEdit /> Editar informações
              </Link>
            </div>
            <div className="mc-card-body">
              <div className="mc-info-row">
                <IconMail />
                <span>{usuario?.nome} {usuario?.sobrenome}</span>
              </div>
              <div className="mc-info-row">
                <IconMail />
                <span>{usuario?.email}</span>
              </div>
            </div>
          </div>

          {/* Card Dados Clínicos (Ajustado para os nomes do Java) */}
          <div className="mc-card mc-card--patient">
            <div className="mc-card-header">
              <span className="mc-card-label">Seus dados clínicos</span>
              <Link to="/editar-paciente2" className="mc-edit-btn">
                <IconEdit /> Editar dados
              </Link>
            </div>
            <div className="mc-patient-body">
              <div className="mc-avatar">
                <IconUser />
              </div>
              <div className="mc-patient-info">
                <div className="mc-patient-grid">
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Idade</span>
                    <span className="mc-patient-val">{info.idade ? `${info.idade} anos` : 'Não informado'}</span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Peso (kg)</span>
                    <span className="mc-patient-val">{info.pesoKg ? `${info.pesoKg} kg` : 'Não informado'}</span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Diagnóstico</span>
                    <span className="mc-patient-val" style={{textTransform: 'capitalize'}}>
                      {info.diagnosticoBase?.toLowerCase().replace('_', ' ') || 'Não informado'}
                    </span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Mão afetada</span>
                    <span className="mc-patient-val">{info.maoAfetada || 'Não informado'}</span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Dificuldade</span>
                    <span className="mc-patient-val" style={{textTransform: 'capitalize'}}>
                      {info.grauDificuldade?.toLowerCase() || 'Não informado'}
                    </span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Objetivo</span>
                    <span className="mc-patient-val">
                      {info.objetivoReabilitacao?.toLowerCase().replace('_', ' ') || 'Não informado'}
                    </span>
                  </div>
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