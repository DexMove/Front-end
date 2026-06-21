import React, { useState } from 'react';
import Layout from './Layout';
import styles from './EditarPerfilFisio.module.css';

function EditarPerfilFisio() {
  const [dados, setDados] = useState({
    nome: 'Lucas Pereira',
    email: 'lucas.pereira@email.com',
    telefone: '(11) 98765-4321',
    crefito: '123456-F',
    especialidade: 'Fisioterapia Neurológica',
    clinica: 'Clínica Movimento - SP'
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
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.titulo}>Editar Perfil</h1>
          <p className={styles.subtitulo}>
            Atualize suas informações profissionais
          </p>
        </div>

        <div className={styles.formulario}>
          <input
            name="nome"
            value={dados.nome}
            onChange={handleChange}
            placeholder="Nome"
          />

          <input
            name="email"
            value={dados.email}
            onChange={handleChange}
            placeholder="E-mail"
          />

          <input
            name="telefone"
            value={dados.telefone}
            onChange={handleChange}
            placeholder="Telefone"
          />

          <input
            name="crefito"
            value={dados.crefito}
            onChange={handleChange}
            placeholder="CREFITO"
          />

          <input
            name="especialidade"
            value={dados.especialidade}
            onChange={handleChange}
            placeholder="Especialidade"
          />

          <input
            name="clinica"
            value={dados.clinica}
            onChange={handleChange}
            placeholder="Clínica"
          />

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