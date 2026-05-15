import "./Planos.css"
import Header from "../../Header"
import Footer from "../../Footer"


function Planos(){
    return(
        <main>
            <Header />
            <section id="hero-planos">
                <div className="texto-hero">
                <h1>Encontre o plano ideal para você</h1>
                <h2>Cada opção foi pensada para se adaptar às suas necessidades com tecnologia e conforto</h2></div>
                <button className="planos-botao">Planos mensais</button>
                <div className="planos">
                <div className="movimento">
                    <h3 className="plano-h3">Plano primeiro movimento</h3>
                    <h3 className="valor-p">Gratuito</h3>
                    <button>Inicie sua jornada</button>
                </div>
                
                <div className="independencia">
                    <p className="recomendado">Recomendado</p>
                    <h3 className="plano-h3">Plano independência</h3>
                    <h3 className="valor-p">R$250,00/mês</h3>
                    <button>Assine agora</button>
                </div>
                <div className="autonomia">
                    <h3 className="plano-h3">Plano autonomia</h3>
                    <h3 className="valor-p">R$99,00/mês</h3>
                    <button>Atualize para</button>
                </div>
                </div>
            </section>
            <article className="imagem"></article>
            <Footer />
        </main>
    )
}
export default Planos