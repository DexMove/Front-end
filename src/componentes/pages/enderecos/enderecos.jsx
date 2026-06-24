import Header2 from "../../Header2";
import Footer from "../../Footer";
import "./enderecos.css";

export default function MeusEnderecos() {
  return (
    <main className="endereco-page">
      <Header2 />
      <div className="onda_topo">
          <svg
            viewBox="0 0 1440 450"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#0b5c6a" d="M0,250 C300,-150 1100,700 1440,250 V450 H0 Z" />
            <path fill="#ffb366" d="M0,280 C300,-120 1100,730 1440,280 V450 H0 Z" />
            <path fill="#efe39b" d="M0,310 C300,-90 1100,760 1440,310 V450 H0 Z" />
            <path fill="#fff" d="M0,340 C300,-60 1100,790 1440,340 V450 H0 Z" />
          </svg>
        </div>
      <section className="account-hero-enderecos">
        <div className="hero-content-enderecos">         
          <div className="hero-title-container">
            <h1>Meus endereços</h1>
          </div>
          <h2>Gerencie seus endereços de entrega</h2>
        </div>
      </section>
      <div className="page page-enderecos">
        <div className="content-container">
          <div className="add-button-container">
            <button type="button" className="btn-add-address">
             + Adicionar endereço
            </button>
          </div>
          <section className="address-list">
            <article className="address-card-horizontal">
              <div className="card-left-panel">
                <svg 
                  className="address-type-icon" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="card-right-panel">
                <div className="card-header-row">
                  <div className="badge-and-title">
                    <span className="badge-principal-new">Principal</span>
                    <h3 className="card-title-new">Casa</h3>
                  </div>
                  <div className="card-actions-icons">
                    <button type="button" className="action-icon-btn" aria-label="Editar">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button type="button" className="action-icon-btn delete" aria-label="Remover">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="address-details-lines">
                  <p className="detail-line font-bold">Avenida Flores, 110</p>
                  <p className="detail-line">Jardim das Rosas</p>
                  <p className="detail-line">São Paulo - SP</p>
                  <p className="detail-line">CEP 01234-567</p>
                </div>
              </div>
            </article>
            <article className="address-card-horizontal">
              <div className="card-left-panel">
                <svg 
                  className="address-type-icon" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>

              <div className="card-right-panel">
                <div className="card-header-row">
                  <div className="badge-and-title">
                    <h3 className="card-title-new">Trabalho</h3>
                  </div>
                  <div className="card-actions-icons">
                    <button type="button" className="action-icon-btn" aria-label="Editar">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button type="button" className="action-icon-btn delete" aria-label="Remover">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="address-details-lines">
                  <p className="detail-line font-bold">Rua das Flores, 120</p>
                  <p className="detail-line">Jardim das Rosas</p>
                  <p className="detail-line">São Paulo - SP</p>
                  <p className="detail-line">CEP 01234-567</p>
                </div>
              </div>
            </article>

          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}