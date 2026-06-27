import './style.css';
import { useState } from "react";
import Footer from "../../Footer";
import CadastroImg from "../../../assets/cadastro.png"
import { Link } from "react-router-dom";
import Header from '../../Header';

const IconEmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconEyeOff = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

export default function Cadastro() {
  const [termos, setTermos] = useState(false);
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [cadastroData, setCadastroData] = useState({ nome: "", email: "", senha: "", confirma: "" });

  const handleCadastroSubmit = (e) => {
    e.preventDefault();
    if (cadastroData.senha !== cadastroData.confirma) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Dados de cadastro:", cadastroData);
    // TODO: conectar com sua API aqui
  };

  return (
    <main>
      <Header />
      <div className="lc-page">
        <div className="lc-card">

          <div className="lc-form-side">
            <h1 className="lc-title">Crie sua conta</h1>
            <p className="lc-subtitle">
              Cadastre-se e comece sua jornada com a <strong>DexMove</strong>
            </p>

            <div className="lc-toggle">
              <Link to="/entrar" className="lc-tab">
                Entrar
              </Link>
              <button className="lc-tab active">Cadastre-se</button>
            </div>

            <form onSubmit={handleCadastroSubmit}>
              <div className="cf-row">
              <div className="lc-field">
                <label className="lc-label">Nome</label>
                <div className="lc-input-wrap">
                  <IconUser />
                  <input type="text" placeholder="Insira seu nome"
                    value={cadastroData.nome}
                    onChange={(e) => setCadastroData({ ...cadastroData, nome: e.target.value })}
                    required />
                </div>
              </div>
              <div className="lc-field">
                <label className="lc-label">Sobrenome</label>
                <div className="lc-input-wrap">
                  <IconUser />
                  <input type="text" placeholder="Insira seu sobrenome"
                    value={cadastroData.sobrenome}
                    onChange={(e) => setCadastroData({ ...cadastroData, sobrenome: e.target.value })}
                    required />
                </div>
              </div>
            </div>

              <div className="lc-field">
                <label className="lc-label">E-mail</label>
                <div className="lc-input-wrap">
                  <IconEmail />
                  <input
                    type="email"
                    placeholder="seuemail@gmail.com"
                    value={cadastroData.email}
                    onChange={(e) => setCadastroData({ ...cadastroData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="lc-field">
                <label className="lc-label">Senha</label>
                <div className="lc-input-wrap">
                  <IconLock />
                  <input
                    type={showSenha ? "text" : "password"}
                    placeholder="Mínimo 8 caracteres"
                    value={cadastroData.senha}
                    onChange={(e) => setCadastroData({ ...cadastroData, senha: e.target.value })}
                    minLength={8}
                    required
                  />
                  <button type="button" className="lc-eye-btn" onClick={() => setShowSenha(!showSenha)}>
                    {showSenha ? <IconEyeOff /> : <IconEye />}
                  </button>
                </div>
              </div>

              <div className="lc-field">
                <label className="lc-label">Confirmar senha</label>
                <div className="lc-input-wrap">
                  <IconLock />
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Repita a senha"
                    value={cadastroData.confirma}
                    onChange={(e) => setCadastroData({ ...cadastroData, confirma: e.target.value })}
                    required
                  />
                  <button type="button" className="lc-eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? <IconEyeOff /> : <IconEye />}
                  </button>
                </div>
              </div>
              <label className="cf-checkbox">
              <input type="checkbox" checked={termos} onChange={() => setTermos(!termos)} required />
              <span>
                Li e concordo com os <Link to="/termos" className="cf-link">
                Termos de Consentimento e Tratamento de Dados
              </Link> conforme a LGPD.
              </span>
            </label>

              <Link to="/complete-perfil" className="lc-submit">
                Próximo
              </Link>
              <div className="lc-alt-link">
                Já tem uma conta?{" "}
                <a href="/entrar">Entrar</a>
              </div>

              <div className="lc-divider">ou continue com</div>

              <div className="lc-social-row">
                <button type="button" className="lc-social-btn">
                  <GoogleIcon /> Google
                </button>
                <button type="button" className="lc-social-btn">
                  <AppleIcon /> Apple
                </button>
              </div>
            </form>
          </div>

          <div className="lc-img-side">
            <img src={CadastroImg} alt="DexMove" />
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}