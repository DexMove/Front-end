import { useState } from "react";
import "./editar-informacoes.css";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6z"/>
  </svg>
);
const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconEyeOff = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

export default function EditarInformacoes() {
  const navigate = useNavigate();
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    nome: "Camila Souza",
    email: "camila.souza@gmail.com",
    telefone: "(11) 91234-5678",
    senha: "",
    confirmarSenha: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.senha && form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Dados atualizados:", form);
    navigate("/minha-conta2");
  }

  return (
    <main>
      <Header2 />
      <div className="ei-page">
        <div className="ei-card">

          <div className="ei-header">
            <h1 className="ei-title">Editar minhas informações</h1>
            <p className="ei-subtitle">Altere seus dados cadastrais</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="ei-field">
              <label className="ei-label">Nome completo</label>
              <div className="ei-input-wrap">
                <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
              </div>
            </div>

            <div className="ei-row">
              <div className="ei-field">
                <label className="ei-label">E-mail</label>
                <div className="ei-input-wrap">
                  <IconMail />
                  <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="ei-field">
                <label className="ei-label">Telefone</label>
                <div className="ei-input-wrap">
                  <IconPhone />
                  <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="ei-divider">
              <span>Alterar senha</span>
            </div>

            <div className="ei-field">
              <label className="ei-label">Confirmar senha</label>
              <div className="ei-input-wrap">
                <IconLock />
                <input
                  type={showSenha ? "text" : "password"}
                  name="senha"
                  placeholder="Nova senha"
                  value={form.senha}
                  onChange={handleChange}
                />
                <button type="button" className="ei-eye" onClick={() => setShowSenha(!showSenha)}>
                  {showSenha ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
            </div>

            <div className="ei-field">
              <label className="ei-label">Senha</label>
              <div className="ei-input-wrap">
                <IconLock />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmarSenha"
                  placeholder="Confirme a nova senha"
                  value={form.confirmarSenha}
                  onChange={handleChange}
                />
                <button type="button" className="ei-eye" onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
            </div>

            <div className="ei-actions">
              <button type="button" className="ei-btn-cancel" onClick={() => navigate("/minha-conta2")}>
                Cancelar
              </button>
              <button type="submit" className="ei-btn-save">
                Salvar as alterações
              </button>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}