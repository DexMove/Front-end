import "./Planos.css";
import Header from "../../Header";
import Footer from "../../Footer";

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
    preco: "R$ 00/mês",
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
    preco: "R$ 00/mês",
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
              <h4 className="valor-p">{plano.preco}</h4>
              <ul className="beneficios">
                {plano.beneficios.map((beneficio) => (
                  <li key={beneficio}>{beneficio}</li>
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
