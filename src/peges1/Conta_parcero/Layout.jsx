import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Home, Calendar, CircleUser } from 'lucide-react';
import styles from './Layout.module.css';

function Layout({ children }) {
  const location = useLocation();

  // Hand icon SVG matching the Dexmove theme
  const HandIcon = () => (
    <svg
      className={styles.logoIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M6 14a4 4 0 0 0 8 0v-3.5" />
      <path d="M18 11a2 2 0 0 1 2 2v1a8 8 0 0 1-8 8 8 8 0 0 1-6.7-3.7l-.3-.4" />
    </svg>
  );

  return (
    <div className={styles.appContainer}>
      {/* Sidebar Col */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          {/* Logo */}
          <Link to="/" className={styles.logoSection}>
            <HandIcon />
            <span className={styles.logoText}>Dexmove</span>
          </Link>

          {/* Nav Links */}
          <nav className={styles.navigation}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
              }
            >
              <Home size={20} />
              <span>Início</span>
            </NavLink>
            <NavLink
              to="/conta_parcero"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
              }
            >
              <CircleUser size={20} />
              <span>Minha conta</span>
            </NavLink>
            <NavLink
              to="/agenda"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
              }
            >
              <Calendar size={20} />
              <span>Agenda</span>
            </NavLink>
          </nav>
        </div>


        <NavLink
          to="/editar-perfil"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeLink}`
              : styles.navLink
          }
        >
          <CircleUser size={20} />
          <span>Editar perfil</span>
        </NavLink>


        {/* Sidebar Wavy Edge (SVG extension) */}
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className={styles.sidebarWave}
        >
          <path
            d="M0,0 L0,1000 C35,900 15,750 25,600 C40,450 10,300 30,150 C40,75 15,25 35,0 Z"
            fill="#0C5A67"
          />
        </svg>
      </aside>

      {/* Main Content Col */}
      <main className={styles.mainContent}>
        {/* Background Waves */}

        {/* Top Wave */}
        <svg
          viewBox="0 0 1000 150"
          preserveAspectRatio="none"
          className={styles.topWave}
        >
          {/* Orange Under-wave */}
          <path
            d="M0,40 Q250,120 500,80 T1000,100 L1000,0 L0,0 Z"
            fill="#EFA35C"
            opacity="0.8"
          />
          {/* Teal Main-wave */}
          <path
            d="M0,0 L1000,0 L1000,80 Q750,60 500,100 T0,20 Z"
            fill="#0C5A67"
          />
        </svg>

        {/* Bottom Wave */}
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className={styles.bottomWave}
        >
          {/* Light Yellow Wave */}
          <path
            d="M0,150 Q300,50 600,120 T1000,70 L1000,200 L0,200 Z"
            fill="#F9E79D"
            opacity="0.6"
          />
          {/* Orange Wave */}
          <path
            d="M0,180 Q350,90 700,150 T1000,110 L1000,200 L0,200 Z"
            fill="#EFA35C"
          />
        </svg>

        {/* Inner Content Area */}
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
