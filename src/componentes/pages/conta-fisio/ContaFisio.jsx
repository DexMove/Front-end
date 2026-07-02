import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header2 from '../../Header2';
import Footer from '../../Footer';
import styles from "./ContaFisio.module.css";
import avatarPadrao from "../../../assets/ofisio.png";
import api from "../../../services/api";

export default function ContaFisio() {
  const navigate = useNavigate();
  const [dadosFisio, setDadosFisio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarPerfil = async () => {
      const token = localStorage.getItem('token');
      const tipo = localStorage.getItem('tipoUsuario')?.toLowerCase();

      console.log('[ContaFisio] Verificando tipo de usuário:', tipo);

      // 1. Proteção de Rota: Se não tiver token ou não for fisio, expulsa
      if (!token) {
        console.log('[ContaFisio] Sem token - redirecionando para login');
        navigate('/entrar');
        return;
      }

      if (tipo && !tipo.includes('fisio')) {
        console.log('[ContaFisio] Usuário não é fisioterapeuta:', tipo);
        alert("Acesso restrito a fisioterapeutas.");
        navigate('/entrar');
        return;
      }

      try {
        // 2. Busca os dados reais do Back-end usando endpoint consistente
        console.log('[ContaFisio] Buscando perfil em /usuarios/perfil/completo');
        const response = await api.get('/usuarios/perfil/completo', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('[ContaFisio] Dados do perfil recebidos:', response.data);
        setDadosFisio(response.data);
      } catch (error) {
        console.error("[ContaFisio] Erro ao carregar perfil:", error);
        if (error.response?.status === 401 || error.response?.status === 403) {
          console.log('[ContaFisio] Acesso negado (401/403) - limpando localStorage');
          localStorage.clear();
          navigate('/entrar');
        }
      } finally {
        setLoading(false);
      }
    };

    carregarPerfil();
  }, [navigate]);

  const handleEditInfo = () => navigate("/editar-perfil");
  const handleGoToAgenda = () => navigate("/agenda");
  const handleGoToDetails = () => navigate("/detalhes-agendamento");

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <p>Carregando informações profissionais...</p>
      </div>
    );
  }

  // Extrai os dados para facilitar o uso (ajuste conforme a estrutura do seu DTO)
  const { nome, sobrenome, email, dadosEspecificos } = dadosFisio || {};
  const infoFisica = dadosEspecificos || {};

  return (
    <>
      <Header2 />
      <div className={styles.cfPage}>
        <div className={styles.cfContainer}>
          {/* Header */}
          <div className={styles.cabecalho}>
            <h1 className={styles.titulo}>Minha conta</h1>
            <p className={styles.subtitulo}>Aqui estão suas informações profissionais</p>
          </div>

          {/* Profile Card */}
          <div className={styles.perfilBox}>
            <img 
              src={infoFisica.urlAvatar || avatarPadrao} 
              alt={`Avatar ${nome}`} 
              className={styles.avatar} 
            />
            <div className={styles.perfilInfo}>
              <h2 className={styles.nome}>{nome} {sobrenome}</h2>
              <p className={styles.cargo}>Fisioterapeuta</p>
            </div>
            <button className={styles.btnEditar} onClick={handleEditInfo}>
              Editar informação
            </button>
          </div>

          {/* Professional Info Grid */}
          <div className={styles.infoBox}>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Nome</span>
              <span className={styles.valor}>{nome} {sobrenome}</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>E-mail</span>
              <span className={styles.valor}>{email}</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Telefone</span>
              <span className={styles.valor}>{infoFisica.telefone || "Não informado"}</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>CREFITO</span>
              <span className={styles.valor}>{infoFisica.crefito}</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Especialidade</span>
              <span className={styles.valor}>{infoFisica.especialidade || "Não informada"}</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Atendimento</span>
              <span className={styles.valor}>{infoFisica.tipoAtendimento || "Não informado"}</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Clínica/local</span>
              <span className={styles.valor}>{infoFisica.clinica || "Não informado"}</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Cidade</span>
              <span className={styles.valor}>{infoFisica.cidade || "Não informado"}</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Estado</span>
              <span className={styles.valor}>{infoFisica.estado || "--"}</span>
            </div>
            <div className={`${styles.infoLinha} ${styles.fullWidth}`}>
              <span className={styles.label}>Biografia</span>
              <span className={styles.valor}>
                {infoFisica.biografia || "Nenhuma biografia cadastrada."}
              </span>
            </div>
          </div>

          {/* Upcoming Appointments Box (Estático por enquanto) */}
          <div className={styles.agendaBox}>
            <div className={styles.agendaHeader}>
              <span className={styles.agendaTitulo}>Próximos agendamentos</span>
              <button className={styles.agendaLink} onClick={handleGoToAgenda}>
                Ver agenda completa.
              </button>
            </div>

            <div className={styles.agendaLista}>
              <div className={styles.agendaItem} onClick={handleGoToDetails}>
                <div className={styles.itemMeta}>
                  <span className={styles.agendaNome}>Gabriel Souza</span>
                  <span className={styles.agendaData}>21/05/2026 - 14:00</span>
                </div>
                <div className={styles.agendaDesc}>Avaliação inicial - Dexmove</div>
              </div>

              <div className={styles.agendaItem} onClick={handleGoToAgenda}>
                <div className={styles.itemMeta}>
                  <span className={styles.agendaNome}>Mariana Silva</span>
                  <span className={styles.agendaData}>21/05/2026 - 9:30</span>
                </div>
                <div className={styles.agendaDesc}>Sessão de acompanhamento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}