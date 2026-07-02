import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../Header2';
import Footer from '../../Footer';
import styles from './EditarPerfilFisio.module.css';
import onda1 from '../../../assets/Group274.svg';
import api from '../../../services/api';

function EditarPerfilFisio() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    crefito: '',
    especialidade: '',
    atendimento: '',
    clinica: '',
    cidade: '',
    estado: '',
    biografia: ''
  });

  useEffect(() => {
    const carregarDados = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/entrar');
        return;
      }

      try {
        console.log('[EditarPerfilFisio] Buscando perfil em /usuarios/perfil/completo');
        const response = await api.get('/usuarios/perfil/completo', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('[EditarPerfilFisio] Dados recebidos:', response.data);
        
        const perfil = response.data;
        const especificos = perfil?.dadosEspecificos || {};

        setDados({
          nome: perfil?.nome || '',
          email: perfil?.email || '',
          telefone: especificos?.telefone || '',
          crefito: especificos?.crefito || '',
          especialidade: especificos?.especialidade || '',
          atendimento: especificos?.tipoAtendimento || '',
          clinica: especificos?.clinica || '',
          cidade: especificos?.cidade || '',
          estado: especificos?.estado || '',
          biografia: especificos?.biografia || ''
        });
      } catch (err) {
        console.error('[EditarPerfilFisio] Erro ao carregar:', err);
        setError('Não foi possível carregar os dados.');
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, [navigate]);

  const handleChange = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  };

  const handleSalvar = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/entrar');
      return;
    }

    try {
      setSaving(true);
      setError(null);

      const updateData = {
        nome: dados.nome,
        email: dados.email,
        dadosEspecificos: {
          telefone: dados.telefone,
          crefito: dados.crefito,
          especialidade: dados.especialidade,
          tipoAtendimento: dados.atendimento,
          clinica: dados.clinica,
          cidade: dados.cidade,
          estado: dados.estado,
          biografia: dados.biografia
        }
      };

      console.log('[EditarPerfilFisio] Enviando dados:', updateData);
      
      await api.put('/usuarios/perfil/completo', updateData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('Informações salvas com sucesso!');
      navigate('/conta-fisio');
    } catch (err) {
      console.error('[EditarPerfilFisio] Erro ao salvar:', err);
      setError('Erro ao salvar as alterações.');
      alert('Erro ao salvar as alterações.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Header2 />
      <div className={styles.pagina}>
        <img src={onda1} alt="onda1" className={styles.onda1} />

        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.titulo}>Editar Perfil</h1>
            <p className={styles.subtitulo}>
              Atualize suas informações profissionais
            </p>
          </div>

          {loading && <p style={{ textAlign: 'center', padding: '20px' }}>Carregando dados...</p>}
          {error && <p style={{ textAlign: 'center', padding: '20px', color: 'red' }}>{error}</p>}

          {!loading && (
          <div className={styles.formulario}>
            <label className={styles["form-label"]}>
              Nome
              <input
                name="nome"
                value={dados.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
              />
            </label>

            <label className={styles["form-label"]}>
              E-mail
              <input
                name="email"
                value={dados.email}
                onChange={handleChange}
                placeholder="exemplo@dominio.com"
              />
            </label>

            <label className={styles["form-label"]}>
              Telefone
              <input
                name="telefone"
                value={dados.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />
            </label>

            <label className={styles["form-label"]}>
              CREFITO
              <input
                name="crefito"
                value={dados.crefito}
                onChange={handleChange}
                placeholder="Ex: 123456-F"
              />
            </label>

            <label className={styles["form-label"]}>
              Especialidade
              <select
                name="especialidade"
                value={dados.especialidade}
                onChange={handleChange}
              >
                <option value="Fisioterapia Neurológica">Fisioterapia Neurológica</option>
                <option value="Fisioterapia Ortopédica">Fisioterapia Ortopédica</option>
                <option value="Fisioterapia Esportiva">Fisioterapia Esportiva</option>
                <option value="Fisioterapia Cardiorespiratória">Fisioterapia Cardiorespiratória</option>
                <option value="Fisioterapia Geriátrica">Fisioterapia Traumato-Ortopédica</option>
                <option value="Fisioterapia Geriátrica">Fisioterapia Traumato-Ortopédica</option>
                <option value="Fisioterapia Geriátrica">Fisioterapia Traumato-Ortopédica</option>
                <option value="Fisioterapia Pediátrica">Fisioterapia Pediátrica</option>
                <option value="Osteopatia e Quiropraxia">Osteopatia e Quiropraxia</option>

              </select>
            </label>

            <label className={styles["form-label"]}>
              Atendimento
              <select
                name="atendimento"
                value={dados.atendimento}
                onChange={handleChange}
              >
                <option value="Presencial">Presencial</option>
                <option value="Domiciliar">Domiciliar</option>
                <option value="Presencial e Domiciliar">Presencial e Domiciliar</option>
              </select>
            </label>

            <label className={styles["form-label"]}>
              Clínica/local
              <input
                name="clinica"
                value={dados.clinica}
                onChange={handleChange}
                placeholder="Nome da clínica ou local de atendimento"
              />
            </label>

            <label className={styles["form-label"]}>
              Cidade
              <input
                name="cidade"
                value={dados.cidade}
                onChange={handleChange}
                placeholder="Cidade"
              />
            </label>

            <label className={styles["form-label"]}>
              Estado (UF)
              <input
                name="estado"
                value={dados.estado}
                onChange={handleChange}
                placeholder="UF"
              />
            </label>

            <label className={styles["form-label"]} style={{ gridColumn: '1 / 3' }}>
              Biografia
              <textarea
                name="biografia"
                className={styles.textarea}
                value={dados.biografia}
                onChange={handleChange}
                placeholder="Fale brevemente sobre sua experiência e áreas de atuação"
                rows={5}
              />
            </label>

            <button onClick={handleSalvar} disabled={saving}>
              {saving ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditarPerfilFisio;