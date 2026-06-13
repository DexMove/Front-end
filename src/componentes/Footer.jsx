import './Footer.css'
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col" id='dexmove'>
          <h2>DexMove</h2>

          <p>
            Proporcionando liberdade e conforto através de tecnologia especializada.
          </p>
        </div>

        <div className="footer-col">
          <h3>Links Rápidos</h3>

          <a href="/sobre">Sobre nós</a>
          <a href="/assistencia_ortese">Nossa Órtese</a>
          <a href="/home">Depoimentos</a>
          <a href="/suporte">Contato</a>
        </div>

        <div className="footer-col">
          <h3>Suporte</h3>

          <a href="/suporte">FAQ</a>
          <a href="/suporte">Como Usar</a>
          <a href="/suporte">Garantia</a>
          <a href="/suporte">Política de Privacidade</a>
        </div>

        <div className="footer-col">
          <h3>Contato</h3>

          <p>contato@dexmove.com</p>
          <p>(11) 00000-0000</p>
          <p>Segunda a Sexta</p>
          <p>9h às 18h</p>
        </div>

      </div>

      <div className="linha"></div>

      <div className="footer-bottom">

        <p>© 2026 DexMove. Todos os direitos reservados.</p>

      </div>

    </footer>
  )
}

export default Footer