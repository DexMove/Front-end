import { useNavigate } from "react-router-dom";
import { Ruler } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

import styles from "./ProdutoDetalhes.module.css";

// Assets imports
import ortesem1 from "../../../assets/ortesen11.svg";
import ortesem2 from "../../../assets/ortesen21.svg";
import ortesem3 from "../../../assets/ortesen31.svg";
import ortesem4 from "../../../assets/2ortese.png";
import celular from "../../../assets/celular.png";
import bateria from "../../../assets/bateria.png";
import bluet from "../../../assets/bluet.png";
import mao from "../../../assets/mao.png";
import guiaTamanhos from "../../../assets/guia.png";

import vector16 from "../../../assets/Vector16.svg";
import vector17 from "../../../assets/Vector17.svg";
import vector18 from "../../../assets/Vector18.svg";
import iconedt from "../../../assets/iconedt.png";
import iconedt1 from "../../../assets/iconedt1.png";
import iconedt2 from "../../../assets/iconedt2.png";
import iconedt3 from "../../../assets/iconedt3.png";

import vector19 from "../../../assets/Vector19.svg";
import ajuste from "../../../assets/ajuste.png";
import pena from "../../../assets/pena.png";
import coracao from "../../../assets/coracao.png";

import vector20 from "../../../assets/Vector20.svg";
import vector21 from "../../../assets/Vector21.svg";
import carregador from "../../../assets/acessorio.png";
import orteseDireita from "../../../assets/2ortese.png";
import orteseEsquerda from "../../../assets/3ortese.png";
import ortesePar from "../../../assets/2par.png";

const imagensThumbnails = [ortesem1, ortesem2, ortesem3, ortesem4];

const cardsData = [
  {
    icone: iconedt,
    titulo: "Estrutura reforçada",
    descricao: "Material resistente que garante durabilidade e segurança no uso diário.",
  },
  {
    icone: iconedt1,
    titulo: "Articulações ajustáveis.",
    descricao: "Ajuste preciso para cada paciente, permitindo maior mobilidade e conforto.",
  },
  {
    icone: iconedt2,
    titulo: "Fácil de vestir.",
    descricao: "Design pensado para colocar e retirar com facilidade, sem ajuda.",
  },
  {
    icone: iconedt3,
    titulo: "Conforto prolongado",
    descricao: "Pode ser usado por longas horas sem causar desconforto ou pressão.",
  },
];

function ProdutoDetalhes({ lado = "direita" }) {
  const navigate = useNavigate();
  const [showRulerImage, setShowRulerImage] = useState(false);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("M");

  // Determine main image based on side
  const getMainImage = () => {
    if (lado === "par") return ortesePar;
    return orteseDireita; // Default is right hand style, also used for left hand default in Section_8
  };

  const [imagemSelecionada, setImagemSelecionada] = useState(getMainImage());

  // Reset main image when 'lado' changes
  useEffect(() => {
    setImagemSelecionada(getMainImage());
  }, [lado]);

  // Determine texts and prices
  const getProductData = () => {
    switch (lado) {
      case "esquerda":
        return {
          titulo: "Órtese da mão Esquerda",
          preco: "R$700,00",
          parcelas: "6x de R$116,67 sem juros",
          similares: [
            {
              nome: "Acessorio RB000V216",
              preco: "R$000,00",
              img: carregador,
              path: "/suporte",
            },
            {
              nome: "Órtese Dexmove Par RB000V130",
              preco: "R$1.400,00",
              img: ortesePar,
              path: "/par",
            },
            {
              nome: "Órtese Dexmove direita RB000V048",
              preco: "R$700,00",
              img: orteseDireita,
              path: "/detalhes",
            },
          ],
        };
      case "par":
        return {
          titulo: "Órtese do par",
          preco: "R$1.400,00",
          parcelas: "6x de R$233,33 sem juros",
          similares: [
            {
              nome: "Acessorio RB000V216",
              preco: "R$000,00",
              img: carregador,
              path: "/suporte",
            },
            {
              nome: "Órtese Dexmove esquerda RB000V130",
              preco: "R$700,00",
              img: orteseEsquerda,
              path: "/mao-esquerda",
            },
            {
              nome: "Órtese Dexmove direita RB000V048",
              preco: "R$700,00",
              img: orteseDireita,
              path: "/detalhes",
            },
          ],
        };
      case "direita":
      default:
        return {
          titulo: "Órtese da mão direita",
          preco: "R$700,00",
          parcelas: "6x de R$116,67 sem juros",
          similares: [
            {
              nome: "Acessorio RB000V216",
              preco: "R$000,00",
              img: carregador,
              path: "/suporte",
            },
            {
              nome: "Órtese Dexmove esquerda RB000V130",
              preco: "R$700,00",
              img: orteseEsquerda,
              path: "/mao-esquerda",
            },
            {
              nome: "Órtese Dexmove Par RB000V048",
              preco: "R$1.400,00",
              img: ortesePar,
              path: "/par",
            },
          ],
        };
    }
  };

  const productData = getProductData();

  return (
    <>
      <Header />

      {/* Section 8 (Hero do Produto) */}
      <section className={styles.section8}>
        <div className={styles.esquerda}>
          <div className={styles.orteses}>
            {imagensThumbnails.map((img, index) => (
              <div
                key={index}
                className={`${styles.caixa} ${imagemSelecionada === img ? styles.ativa : ""}`}
                onClick={() => setImagemSelecionada(img)}
              >
                <img src={img} alt={`Thumb ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className={styles.imagemPrincipal}>
            <img src={imagemSelecionada} alt="Órtese principal" />
          </div>
        </div>

        <div className={styles.info}>
          <h2 className={styles.prodTitulo}>{productData.titulo}</h2>

          <div className={styles.icones}>
            <div className={styles.icone}>
              <img src={mao} alt="Design Ergonômico" />
              <p>Design Ergonômico</p>
            </div>
            <div className={styles.icone}>
              <img src={bluet} alt="Conexão Bluetooth" />
              <p>Conexão Bluetooth</p>
            </div>
            <div className={styles.icone}>
              <img src={celular} alt="Controle via APP" />
              <p>Controle via APP</p>
            </div>
            <div className={styles.icone}>
              <img src={bateria} alt="Longa Duração" className={styles.bateria} />
              <p>Longa Duração</p>
            </div>
          </div>

          <div className={styles.prodPreco}>
            <h3>{productData.preco}</h3>
            <p>{productData.parcelas}</p>
          </div>

          <div className={styles.tamanhos}>
            <p>Tamanho:</p>
            <div className={styles.botoesTomanho}>
              {["PP", "P", "M", "G", "GG"].map((t) => (
                <button
                  key={t}
                  className={`${styles.tamanho} ${tamanhoSelecionado === t ? styles.tamanhoAtivo : ""}`}
                  type="button"
                  onClick={() => setTamanhoSelecionado(t)}
                >
                  {t}
                </button>
              ))}
              <button
                className={styles.rulerBtn}
                type="button"
                title="Guia de tamanhos"
                onClick={() => setShowRulerImage(!showRulerImage)}
              >
                <Ruler size={20} />
              </button>
            </div>

            {showRulerImage && (
              <div className={styles.rulerImageOverlay} onClick={() => setShowRulerImage(false)}>
                <div className={styles.rulerImageBox} onClick={(e) => e.stopPropagation()}>
                  <button
                    className={styles.closeRulerImage}
                    type="button"
                    onClick={() => setShowRulerImage(false)}
                    aria-label="Fechar guia de tamanhos"
                  >
                    ×
                  </button>
                  <img src={guiaTamanhos} alt="Guia de tamanhos" />
                </div>
              </div>
            )}
          </div>

          <button className={styles.Comprar} onClick={() => navigate("/comprar")}>
            Comprar
          </button>
          <p className={styles.seguro}>COMPRA 100% SEGURA E PROTEGIDA</p>
        </div>
      </section>

      {/* Section 9 (Flip Cards) */}
      <section className={styles.section9}>
        <img src={vector16} alt="vector16" className={styles.vector16} />
        <img src={vector17} alt="vector17" className={styles.vector17} />
        <img src={vector18} alt="vector18" className={styles.vector18} />

        <div className={styles.cards2}>
          {cardsData.map((card, index) => (
            <div key={index} className={styles.cardFlip}>
              <div className={styles.cardInner}>
                <div className={styles.cardFrente}>
                  <img src={card.icone} alt={card.titulo} />
                  <h3>{card.titulo}</h3>
                </div>
                <div className={styles.cardVerso}>
                  <p>{card.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 10 (Tecnologia que cuida) */}
      <section className={styles.section10}>
        <img src={vector19} alt="vector19" className={styles.vector19} />
        <h2 className={styles.techTitulo}>
          Tecnologia que cuida hoje <br />
          para transformar o amanhã.
        </h2>
        <div className={styles.meio}>
          <h3>Benefício que você sente</h3>
        </div>
        <div className={styles.beneficios}>
          <div className={styles.beneficio}>
            <img src={ajuste} alt="ajuste" />
            <h3>
              Ajuste anatômico.
              <br />
              É confortável.
            </h3>
          </div>
          <div className={styles.beneficio}>
            <img src={pena} alt="pena" />
            <h3>
              Materiais leves
              <br />e resistentes.
            </h3>
          </div>
          <div className={styles.beneficio}>
            <img src={coracao} alt="coração" />
            <h3>
              Mais qualidade
              <br />
              de vida
            </h3>
          </div>
        </div>
      </section>

      {/* Section 11 (Opções similares) */}
      <section className={styles.section11}>
        <img src={vector20} alt="vector20" className={styles.vector20} />
        <img src={vector21} alt="vector21" className={styles.vector21} />
        <h2>Opções similares:</h2>

        <div className={styles.similarGrid}>
          {productData.similares.map((similar, index) => (
            <div key={index} className={styles.card3}>
              <div className={styles.cardImg}>
                <img src={similar.img} alt={similar.nome} />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.nome}>{similar.nome}</p>
                <p className={styles.similarPreco}>{similar.preco}</p>
                <button className={styles.btnComprar} onClick={() => navigate(similar.path)}>
                  COMPRAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProdutoDetalhes;
