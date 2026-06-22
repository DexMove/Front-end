import React from 'react';
import Header2 from '../../componentes/Header2';
import Footer from '../../componentes/Footer';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.appContainer}>
      <Header2 />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
