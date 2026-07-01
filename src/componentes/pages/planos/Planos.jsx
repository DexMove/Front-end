import "./Planos.css";
import Footer from "../../Footer";
import Header from '../../Header';

const planos = [
  {
    className: "movimento",
    nome: "Plano Primeiro Movimento",
    preco: "A partir de R$700,00",
    botao: "Inicie sua jornada",
    beneficios: [
      "Acesso a Movehand",
      "Uso da plataforma digital",
      "Inteligência artificial para apoio no tratamento",
      "Acompanhamento com fisioterapeuta externo",
    ],
  },
  {
    className: "independencia",
    recomendado: true,
    nome: "Plano Independência",
    preco1:"Primeiro mês: R$ 1.649,00 ",
    preco2: "Após o primeiro mês: R$ 249,00/mês",      
    botao: "Assine agora",
    beneficios: [
      "Todos os benefícios anteriores",
      "Acompanhamento com fisioterapeuta parceiro",
      "Tratamento integral de todo o corpo",
      "Par da Movehand já incluso",
    ],
  },
  {
    className: "autonomia",
    nome: "Plano Autonomia",
    preco1: "Primeiro mês: R$ 1.549,00",
    preco2: "Após o primeiro mês: R$ 149,00/mês",
    botao: "Atualize para",
    beneficios: [
      "Todos os benefícios do Primeiro Movimento",
      "Acompanhamento com fisioterapeuta parceiro",
      "Par da Movehand já incluso",
      "Tratamento focado na parte superior do corpo",
    ],
  },
];

function Planos() {
  return (
    <main>
      <Header />
      <section id="hero-planos">
        <div className="texto-hero">
          <h1>Encontre o plano ideal para você</h1>
          <h2>
            Cada opção foi pensada para se adaptar às suas necessidades com
            tecnologia e conforto
          </h2>
        </div>

        <button className="planos-botao">Planos mensais</button>

        <div className="planos">
  {planos.map((plano) => (
    <div className={`plano-card ${plano.className}`} key={plano.nome}>
      {plano.recomendado && <p className="recomendado">Recomendado</p>}
      <h3 className="plano-h3">{plano.nome}</h3>
      <h4 className="valor-p">{plano.preco1}</h4>
      <h4 className="valor-p">{plano.preco}</h4>
      <h4 className="valor-p2">{plano.preco2}</h4>

      <ul className="beneficios">
        {plano.beneficios.map((beneficio) => (
          <li key={beneficio}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 640 640">
	<path d="M0 0h640v640H0z" fill="none" />
	<path fill="#0b6d78" d="M352 96c0-17.7-14.3-32-32-32s-32 14.3-32 32v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-17.7-14.3-32-32-32s-32 14.3-32 32v272c0 1.5 0 3.1.1 4.6L131.6 347c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6l112.4 107c43.1 41.1 100.4 64 160 64H368c97.2 0 176-78.8 176-176V192c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-17.7-14.3-32-32-32s-32 14.3-32 32v176c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
</svg>


            {beneficio}
          </li>
        ))}
      </ul>

      <button>{plano.botao}</button>
    </div>
  ))}
</div>
      </section>
      <Footer />
    </main>
  );
}

export default Planos;
