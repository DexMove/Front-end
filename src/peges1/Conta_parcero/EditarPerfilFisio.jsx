import React, { useState } from 'react';
import Layout from './Layout';
import styles from './EditarPerfilFisio.module.css';;
import onda1 from '../../assets/imag/Group274.svg';

function EditarPerfilFisio() {
  const [dados, setDados] = useState({
    nome: 'Lucas Pereira',
    email: 'lucas.pereira@email.com',
    telefone: '(11) 98765-4321',
    crefito: '123456-F',
    especialidade: 'Fisioterapia Neurológica',
    atendimento: 'Presencial e Online',
    clinica: 'Clínica Movimento - SP',
    cidade: 'São Paulo',
    estado: 'SP',
    biografia: 'Fisioterapeuta com 10 anos de experiência em reabilitação neurológica.'
  });

  const handleChange = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  };

  const handleSalvar = () => {
    alert('Informações salvas com sucesso!');
  };

 return (
  <Layout>
    <div className={styles.pagina}>
        <img src={onda1} alt="onda1" className={styles.onda1} />

      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.titulo}>Editar Perfil</h1>
          <p className={styles.subtitulo}>
            Atualize suas informações profissionais
          </p>
        </div>

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
            <input
              name="especialidade"
              value={dados.especialidade}
              onChange={handleChange}
              placeholder="Ex: Fisioterapia Neurológica"
            />
          </label>

          <label className={styles["form-label"]}>
            Atendimento
            <select
              name="atendimento"
              value={dados.atendimento}
              onChange={handleChange}
            >
              <option value="Presencial">Presencial</option>
              <option value="Online">Online</option>
              <option value="Presencial e Online">Presencial e Online</option>
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

          <label className={styles["form-label"]} style={{gridColumn: '1 / 3'}}>
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

          <button onClick={handleSalvar}>
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  </Layout>
);
}

export default EditarPerfilFisio;