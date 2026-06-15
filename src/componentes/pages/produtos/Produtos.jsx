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
import Carregador from "../../../assets/carregador.png"
function Produtos(){
    return(
    <main>
        <section id="hero">
        </section>
        <article id='article'>
            <img src={Ondafina} alt="onda" />
            <h1 className='produtos'>Nossos produtos</h1>
            <div id="dupla">
                <div className="dupla_imagem">
                    <p className="maisvendido_p">Mais vendido</p>
                    <img src={Dupla}  />
                </div>
                <div className="dupla_textos">
                        <p className="ortese">Órtese Robótica</p>
                        <h2>MoveHand Par</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_dupla">Nossa órtese mais completa. Estimulação elétrica funcional integrada, 5 níveis de intensidade, bateria de 6h e controle total pelo aplicativo. Indicada para paralisia cerebral.</p>
                        <div className="compra">
                        <p className="preco">A partir de <br />
                        <span>R$ 000</span> <br />
                        ou 12x de R$ 000</p>
                        <span className="botao"> <BotaoComprar /> </span>
                        </div>
                    </div>
            </div>
            <div className='s1'>
            <div id="direita">
                <div className="direita_imagem">
                     <img src={Direita}  />
                </div>
                <div className="direita_textos">
                        <p className="ortese">Órtese Robótica</p>
                        <h2>MoveHand <br />Mão direita</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_direita">A versão padrão da MoveHand, desenvolvida para a mão direita. Tecnologia robótica completa para reabilitação contínua em casa.</p>
                        <p className="preco">A partir de <br />
                        <span>R$ 000</span> <br />
                        ou 12x de R$ 000</p>
                        <span className="botao"> <BotaoComprar /> </span>
                        </div>
            </div>
            <div id="esquerda">
                <div className="esquerda_imagem">
                    <img src={Esquerda}  />
                </div>
                <div className="esquerda_textos">
                        <p className="ortese">Órtese Robótica</p>
                        <h2>MoveHand <br />Mão esquerda</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_esquerda">A versão padrão da MoveHand, desenvolvida para a mão esquerda. Tecnologia robótica completa para reabilitação contínua em casa.</p>
                        <p className="preco">A partir de <br />
                        <span>R$ 000</span> <br />
                        ou 12x de R$ 000</p>
                        <span className="botao"> <BotaoComprar /> </span>
                        </div>
            </div>
            </div>
            <div className='s2'> 
                <div id="kit">
                    <div className="kit_imagem">
                    <img className="dup" src={Dupla}  />
                    <img className="car" src={Carregador} />
                </div>
                <div className="kit_textos">
                        <p className="ortese">Kit</p>
                        <h2>MoveHand <br />+ acessório</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_kit">MoveHand Pro + carregador de 30W compatível com todos os modelos MoveHand. Carga completa em menos de 90 minutos.</p>
                        <p className="preco">A partir de <br />
                        <span>R$ 000</span> <br />
                        ou 12x de R$ 000</p>
                        <span className="botao"> <BotaoComprar /> </span>
                        </div>
                </div>
                <div id="carregador">
                    <div className="carregador_imagem">
                    <img src={Carregador} />
                </div>
                <div className="carregador_textos">
                        <p className="ortese">Acessório</p>
                        <h2>Carregador USB-C</h2>
                        <p className="avaliacao"><span>★★★★★</span>4.9 (128 avaliações)</p>
                        <p className="texto_carregador">Carregador de 30W compatível com todos os modelos MoveHand. <br /> Carga completa em menos de 90 minutos.</p>
                        <p className="preco">A partir de <br />
                        <span>R$ 000</span> <br />
                        ou 12x de R$ 000</p>
                        <span className="botao"> <BotaoComprar /> </span>
                        </div>
                </div>
            </div>
        </article>
        <Footer />
    </main>
    )
}
export default Produtos