import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Produtos.css';
import BotaoComprar from "../../BotaoComprar";
import Footer from "../../Footer";
import logo from "../../../assets/logo.png"
import Ondafina from "../../../assets/onda fina.png";
import Onda1 from "../../../assets/onda1.png";
import Onda2 from "../../../assets/onda2.png";
import Dupla from "../../../assets/dupla.png"
import Direita from "../../../assets/direita1.png"
import Esquerda from "../../../assets/esquerda.png"
import Acessorio from "../../../assets/acessorio.png"
import Header from '../../Header';
import maozinha from "../../../assets/maozinha.png"
import Wave from "../../Wave"
import MaoBanner from "../../../assets/mao-banner.png"
function Produtos(){

    useEffect(() => {
        const elementos = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.2 });

        elementos.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return(
    <main>
        <Header />
    <section className="mh-hero">
      <div className="mh-hero-content">
        <img src={MaoBanner} alt="Órtese MoveHand" className="mh-hero-image" />
        <div className="mh-hero-text">
          <h1 className="h1-mh">MOVEHAND</h1>
          <h2 className="h2-mh">Tecnologia que transforma<br />dificuldades em possibilidades</h2>
        </div>
      </div>
    </section>
        <article id='article'>
            <h1 className='produtos'>Nossos produtos</h1>
            <div id="dupla" className="reveal">
                <div className="dupla_imagem">
                    <img src={Dupla}  />
                </div>
                <div className="dupla_textos">
                        <p className="ortese">Órtese Robótica</p>
                        <h2>MoveHand Par</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_dupla">Nossa órtese mais completa. Estimulação elétrica funcional integrada, 5 níveis de intensidade, bateria de 6h e controle total pelo aplicativo. Indicada para paralisia cerebral.</p>
                        
                        <p className="preco">A partir de <br />
                        <span>R$ 1400,00</span> <br />
                        ou 12x de R$ 120,00</p>

                        <Link to="/par"><span className="botao"> <BotaoComprar /> </span></Link>
                        
                    </div>
            </div>
            <div className='s1'>
            <div id="direita" className="reveal">
                <div className="direita_imagem">
                     <img src={Direita}  />
                </div>
                <div className="direita_textos">
                        <p className="ortese">Órtese Robótica</p>
                        <h2>MoveHand <br />Mão direita</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_direita">A versão padrão da MoveHand, desenvolvida para a mão direita. Tecnologia robótica completa para reabilitação contínua em casa.</p>
                        <p className="preco">A partir de <br />
                        <span>R$700,00</span> <br />
                        ou 12x de R$60,00</p>
                        <Link to="/mao-direita"><span className="botao"> <BotaoComprar /> </span></Link>
                        </div>
            </div>
            <div id="esquerda" className="reveal">
                <div className="esquerda_imagem">
                    <img src={Esquerda}  />
                </div>
                <div className="esquerda_textos">
                        <p className="ortese">Órtese Robótica</p>
                        <h2>MoveHand <br />Mão esquerda</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_esquerda">A versão padrão da MoveHand, desenvolvida para a mão esquerda. Tecnologia robótica completa para reabilitação contínua em casa.</p>
                        <p className="preco">A partir de <br />
                        <span>R$700,00</span> <br />
                        ou 12x de R$60,00</p>
                        <Link to="/mao-esquerda"><span className="botao"> <BotaoComprar /> </span></Link>
                        </div>
            </div>
            </div>
            <div className='s2'> 
                <div id="kit" className="reveal">
                    <div className="kit_imagem">
                    <img className="dup" src={Dupla}  />
                    <img className="car" src={Acessorio} />
                </div>
                <div className="kit_textos">
                        <p className="ortese">Kit</p>
                        <h2>MoveHand <br />+ acessório</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_kit">MoveHand Par + Separador funcional para posicionamento dos dedos. Facilita a colocação da órtese, mantendo os dedos suavemente separados de forma confortável e segura.</p>
                        <p className="preco">A partir de <br />
                        <span>R$1430</span> <br />
                        ou 12x de R$ 120,00</p>
                        <Link to="/kit"><span className="botao"> <BotaoComprar /> </span></Link>
                        </div>
                </div>
                <div id="carregador" className="reveal">
                    <div className="carregador_imagem">
                    <img src={Acessorio} />
                </div>
                <div className="carregador_textos">
                        <p className="ortese">Acessório</p>
                        <h2>Separador de dedos</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_carregador">Separador funcional para posicionamento dos dedos. Facilita a colocação da órtese, mantendo os dedos suavemente separados de forma confortável e segura.</p>
                        <p className="preco">A partir de <br />
                        <span>R$ 30,00</span> <br />
                        ou 2x de R$ 15,00</p>
                        <Link to="/acessorio"><span className="botao"> <BotaoComprar /> </span></Link>
                        </div>
                </div>
            </div>
        </article>
        <Wave />
        <Footer />
    </main>
    )
}
export default Produtos;