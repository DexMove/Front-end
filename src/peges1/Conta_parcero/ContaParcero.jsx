import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../componentes/Header2';
import Footer from '../../componentes/Footer';
import styles from './ContaParcero.module.css';

const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6z" />
  </svg>
);

const IconUser = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function ContaParcero() {
  return (
    <main>
      <Header2 />
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Minha conta</h1>
          <p className={styles.pageSubtitle}>Aqui estão suas informações</p>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>Dados do responsável</span>
              <Link to="/editar-informacoes" className={styles.editBtn}>
                <IconEdit /> Editar minhas informações
              </Link>
            </div>
            <div className={styles.infoBody}>
              <div className={styles.infoRow}>
                <IconMail />
                <span>Camila Souza</span>
              </div>
              <div className={styles.infoRow}>
                <IconMail />
                <span>camila.souza@gmail.com</span>
              </div>
              <div className={styles.infoRow}>
                <IconPhone />
                <span>(11) 91234-5678</span>
              </div>
            </div>
          </div>

          <div className={styles.patientCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>Paciente sob sua responsabilidade</span>
              <Link to="/editar-paciente" className={styles.editBtn}>
                <IconEdit /> Editar dados do paciente
              </Link>
            </div>
            <div className={styles.patientBody}>
              <div className={styles.avatar}>
                <IconUser />
              </div>
              <div className={styles.patientInfo}>
                <p className={styles.patientName}>Gabriel Souza</p>
                <div className={styles.patientGrid}>
                  <div className={styles.patientItem}>
                    <span className={styles.patientKey}>Idade</span>
                    <span className={styles.patientVal}>35 anos</span>
                  </div>
                  <div className={styles.patientItem}>
                    <span className={styles.patientKey}>Mão afetada</span>
                    <span className={styles.patientVal}>Direita</span>
                  </div>
                  <div className={styles.patientItem}>
                    <span className={styles.patientKey}>Diagnóstico</span>
                    <span className={styles.patientVal}>Paralisia Cerebral</span>
                  </div>
                  <div className={styles.patientItem}>
                    <span className={styles.patientKey}>Objetivo</span>
                    <span className={styles.patientVal}>Recuperar movimentos finos da mão</span>
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
