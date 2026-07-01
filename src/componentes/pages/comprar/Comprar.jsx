import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  User,
  MapPin,
  CreditCard,
  CheckCircle,
  ArrowLeft,
  Loader2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  QrCode,
  FileText
} from "lucide-react";
import Footer from "../../Footer";
import styles from "./Comprar.module.css";
import vector22 from '../../../assets/Vector22.svg';
import vector23 from '../../../assets/Vector23.svg';
import vector24 from '../../../assets/Vector24.svg';
import vector25 from '../../../assets/Vector25.svg';
// Usando imagens do projeto para o resumo do pedido
import Direita from '../../../assets/direita1.png';
import Esquerda from '../../../assets/esquerda.png';
import Dupla from '../../../assets/dupla.png';
import Acessorio from '../../../assets/acessorio.png';

function Comprar() {
  const navigate = useNavigate();
  const location = useLocation();

  const produtosInfo = {
    direita: {
      titulo: "Órtese MoveHand - Mão Direita",
      subtitulo: "Tamanho: M | Qtd: 1",
      imagem: Direita,
      preco: 700.00,
      precoFormatado: "R$ 700,00",
      parcelas: [
        { value: "1", label: "1x de R$ 700,00 sem juros" },
        { value: "2", label: "2x de R$ 350,00 sem juros" },
        { value: "3", label: "3x de R$ 233,33 sem juros" },
        { value: "4", label: "4x de R$ 175,00 sem juros" },
        { value: "5", label: "5x de R$ 140,00 sem juros" },
        { value: "6", label: "6x de R$ 116,67 sem juros" },
        { value: "12", label: "12x de R$ 58,33 sem juros" }
      ]
    },
    esquerda: {
      titulo: "Órtese MoveHand - Mão Esquerda",
      subtitulo: "Tamanho: M | Qtd: 1",
      imagem: Esquerda,
      preco: 700.00,
      precoFormatado: "R$ 700,00",
      parcelas: [
        { value: "1", label: "1x de R$ 700,00 sem juros" },
        { value: "2", label: "2x de R$ 350,00 sem juros" },
        { value: "3", label: "3x de R$ 233,33 sem juros" },
        { value: "4", label: "4x de R$ 175,00 sem juros" },
        { value: "5", label: "5x de R$ 140,00 sem juros" },
        { value: "6", label: "6x de R$ 116,67 sem juros" },
        { value: "12", label: "12x de R$ 58,33 sem juros" }
      ]
    },
    par: {
      titulo: "Órtese MoveHand - Par",
      subtitulo: "Tamanho: M | Qtd: 1",
      imagem: Dupla,
      preco: 1400.00,
      precoFormatado: "R$ 1.400,00",
      parcelas: [
        { value: "1", label: "1x de R$ 1.400,00 sem juros" },
        { value: "2", label: "2x de R$ 700,00 sem juros" },
        { value: "3", label: "3x de R$ 466,67 sem juros" },
        { value: "4", label: "4x de R$ 350,00 sem juros" },
        { value: "5", label: "5x de R$ 280,00 sem juros" },
        { value: "6", label: "6x de R$ 233,33 sem juros" },
        { value: "12", label: "12x de R$ 116,67 sem juros" }
      ]
    },
    kit: {
      titulo: "Kit MoveHand + Acessório",
      subtitulo: "Tamanho: M | Qtd: 1",
      imagem: Dupla,
      preco: 1430.00,
      precoFormatado: "R$ 1.430,00",
      parcelas: [
        { value: "1", label: "1x de R$ 1.430,00 sem juros" },
        { value: "2", label: "2x de R$ 715,00 sem juros" },
        { value: "3", label: "3x de R$ 476,67 sem juros" },
        { value: "4", label: "4x de R$ 357,50 sem juros" },
        { value: "5", label: "5x de R$ 286,00 sem juros" },
        { value: "6", label: "6x de R$ 238,33 sem juros" },
        { value: "12", label: "12x de R$ 119,17 sem juros" }
      ]
    },
    acessorio: {
      titulo: "Separador de dedos (Acessório)",
      subtitulo: "Tamanho: Único | Qtd: 1",
      imagem: Acessorio,
      preco: 30.00,
      precoFormatado: "R$ 30,00",
      parcelas: [
        { value: "1", label: "1x de R$ 30,00 sem juros" },
        { value: "2", label: "2x de R$ 15,00 sem juros" }
      ]
    }
  };

  const produtoKey = location.state?.produto || "direita";
  const produto = produtosInfo[produtoKey] || produtosInfo.direita;

  const [etapa, setEtapa] = useState(1);
  const [metodoPagamento, setMetodoPagamento] = useState("cartao"); // "cartao", "pix", "boleto"

  // Form States
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cartaoNumero: "",
    cartaoNome: "",
    cartaoValidade: "",
    cartaoCvv: "",
    parcelas: "1"
  });

  // Simulando progresso automático do processamento (Etapa 4 -> 5)
  useEffect(() => {
    if (etapa === 4) {
      const timer = setTimeout(() => {
        setEtapa(5);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [etapa]);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handlesNext = (e) => {
    e.preventDefault();
    if (etapa < 3) {
      setEtapa(etapa + 1);
    } else if (etapa === 3) {
      setEtapa(4); // Vai para o processamento
    }
  };

  const handleBack = () => {
    if (etapa > 1 && etapa < 4) {
      setEtapa(etapa - 1);
    } else {
      navigate(-1);
    }
  };

  const stepsList = [
    { id: 1, label: "Dados pessoais", icon: <User size={18} /> },
    { id: 2, label: "Endereço", icon: <MapPin size={18} /> },
    { id: 3, label: "Pagamento", icon: <CreditCard size={18} /> },
    { id: 4, label: "Confirmação", icon: <CheckCircle size={18} /> }
  ];

  return (

    <div className={styles.paginaWrapper}>

    {/* Top Wave */}
    <svg
      viewBox="0 0 1000 150"
      preserveAspectRatio="none"
      className={styles.topWave}
    >
      ...
    </svg>

    <main className={styles.conteudoPrincipal}>

      <img src={vector22} alt="" className={styles.vector22} />
      <img src={vector23} alt="" className={styles.vector23} />
      <img src={vector24} alt="" className={styles.vector24} />
      <img src={vector25} alt="" className={styles.vector25} />

      {etapa <= 3 && (
        <div className={styles.cabecalhoCheckout}>
          <h1>Finalizar compra</h1>
          <p>Preencha seus dados para continuar</p>
        </div>
      )}
        {/* Barra de etapas (só aparece nas etapas de preenchimento 1 a 3) */}
        {etapa <= 3 && (
          <div className={styles.etapasBarra}>
            {stepsList.map((step) => {
              let stepClass = styles.etapaPendente;
              if (etapa === step.id) {
                stepClass = styles.etapaAtiva;
              } else if (etapa > step.id) {
                stepClass = styles.etapaConcluida;
              }
              return (
                <div key={step.id} className={`${styles.etapaItem} ${stepClass}`}>
                  <div className={styles.etapaIconBox}>
                    {etapa > step.id ? <CheckCircle size={16} /> : step.icon}
                  </div>
                  <span className={styles.etapaLabel}>{step.label}</span>
                  {step.id < 4 && <div className={styles.etapaLinhaConnector}></div>}
                </div>
              );
            })}
          </div>
        )}

        <div className={styles.checkoutLayoutGrid}>
          {/* LADO ESQUERDO: Formulários ou Telas de Status */}
          <div className={`${styles.cardPainelEsquerdo} ${etapa >= 4 ? styles.cardCentralizado : ""}`}>

            {/* ETAPA 1: Dados Pessoais */}
            {etapa === 1 && (
              <form onSubmit={handlesNext} className={styles.formSection}>
                <h2 className={styles.tituloSecao}>Dados pessoais</h2>
                <div className={styles.formGridDuplo}>
                  <div className={styles.campoForm}>
                    <label>Nome completo</label>
                    <input
                      required
                      type="text"
                      name="nome"
                      value={dados.nome}
                      onChange={handleChange}
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  <div className={styles.campoForm}>
                    <label>Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={dados.email}
                      onChange={handleChange}
                      placeholder="Digite seu e-mail"
                    />
                  </div>
                  <div className={styles.campoForm}>
                    <label>Telefone</label>
                    <input
                      required
                      type="text"
                      name="telefone"
                      value={dados.telefone}
                      onChange={handleChange}
                      placeholder="(00) 90000-0000"
                    />
                  </div>
                  <div className={styles.campoForm}>
                    <label>CPF</label>
                    <input
                      required
                      type="text"
                      name="cpf"
                      value={dados.cpf}
                      onChange={handleChange}
                      placeholder="000.000.000-00"
                    />
                  </div>
                </div>

                <div className={styles.botoesAcoes}>
                  <button type="button" className={styles.btnVoltar} onClick={handleBack}>
                    <ArrowLeft size={16} /> VOLTAR
                  </button>
                  <button type="submit" className={styles.btnContinuar}>
                    Continuar
                  </button>
                </div>
              </form>
            )}

            {/* ETAPA 2: Endereço de Entrega */}
            {etapa === 2 && (
              <form onSubmit={handlesNext} className={styles.formSection}>
                <h2 className={styles.tituloSecao}>Endereço de entrega</h2>
                <div className={styles.formGridDuplo}>
                  <div className={styles.campoForm}>
                    <label>CEP</label>
                    <input
                      required
                      type="text"
                      name="cep"
                      value={dados.cep}
                      onChange={handleChange}
                      placeholder="00000-000"
                    />
                  </div>
                  <div className={styles.campoForm}>
                    <label>Endereço (Rua/Avenida)</label>
                    <input
                      required
                      type="text"
                      name="endereco"
                      value={dados.endereco}
                      onChange={handleChange}
                      placeholder="Digite seu endereço"
                    />
                  </div>
                  <div className={styles.campoForm}>
                    <label>Número</label>
                    <input
                      required
                      type="text"
                      name="numero"
                      value={dados.numero}
                      onChange={handleChange}
                      placeholder="Nº"
                    />
                  </div>
                  <div className={styles.campoForm}>
                    <label>Complemento</label>
                    <input
                      type="text"
                      name="complemento"
                      value={dados.complemento}
                      onChange={handleChange}
                      placeholder="Apto, Bloco, etc."
                    />
                  </div>
                  <div className={styles.campoForm}>
                    <label>Bairro</label>
                    <input
                      required
                      type="text"
                      name="bairro"
                      value={dados.bairro}
                      onChange={handleChange}
                      placeholder="Digite seu bairro"
                    />
                  </div>
                  <div className={styles.campoForm}>
                    <label>Cidade</label>
                    <input
                      required
                      type="text"
                      name="cidade"
                      value={dados.cidade}
                      onChange={handleChange}
                      placeholder="Digite sua cidade"
                    />
                  </div>
                  <div className={styles.campoForm}>
                    <label>Estado</label>
                    <input
                      required
                      type="text"
                      name="estado"
                      value={dados.estado}
                      onChange={handleChange}
                      placeholder="Estado"
                    />
                  </div>
                </div>

                <div className={styles.botoesAcoes}>
                  <button type="button" className={styles.btnVoltar} onClick={handleBack}>
                    <ArrowLeft size={16} /> VOLTAR
                  </button>
                  <button type="submit" className={styles.btnContinuar}>
                    Continuar
                  </button>
                </div>
              </form>
            )}

            {/* ETAPA 3: Forma de Pagamento */}
            {etapa === 3 && (
              <form onSubmit={handlesNext} className={styles.formSection}>
                <h2 className={styles.tituloSecao}>Forma de pagamento</h2>

                {/* Abas/Opções de Pagamento */}
                <div className={styles.metodosPagamentoAbas}>
                  <button
                    type="button"
                    className={`${styles.abaMetodo} ${metodoPagamento === "cartao" ? styles.abaMetodoAtiva : ""}`}
                    onClick={() => setMetodoPagamento("cartao")}
                  >
                    <CreditCard size={18} />
                    <span>Cartão de crédito</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.abaMetodo} ${metodoPagamento === "pix" ? styles.abaMetodoAtiva : ""}`}
                    onClick={() => setMetodoPagamento("pix")}
                  >
                    <QrCode size={18} />
                    <span>Pix</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.abaMetodo} ${metodoPagamento === "boleto" ? styles.abaMetodoAtiva : ""}`}
                    onClick={() => setMetodoPagamento("boleto")}
                  >
                    <FileText size={18} />
                    <span>Boleto bancário</span>
                  </button>
                </div>

                {/* Conteúdo dinâmico dependendo do método */}
                {metodoPagamento === "cartao" && (
                  <div className={styles.formGridDuplo}>
                    <div className={`${styles.campoForm} ${styles.campoFormCheio}`}>
                      <label>Número do cartão</label>
                      <input
                        required
                        type="text"
                        name="cartaoNumero"
                        value={dados.cartaoNumero}
                        onChange={handleChange}
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className={`${styles.campoForm} ${styles.campoFormCheio}`}>
                      <label>Nome no cartão</label>
                      <input
                        required
                        type="text"
                        name="cartaoNome"
                        value={dados.cartaoNome}
                        onChange={handleChange}
                        placeholder="Nome como está no cartão"
                      />
                    </div>
                    <div className={styles.campoForm}>
                      <label>Validade</label>
                      <input
                        required
                        type="text"
                        name="cartaoValidade"
                        value={dados.cartaoValidade}
                        onChange={handleChange}
                        placeholder="MM/AA"
                      />
                    </div>
                    <div className={styles.campoForm}>
                      <label>Código de segurança</label>
                      <input
                        required
                        type="text"
                        name="cartaoCvv"
                        value={dados.cartaoCvv}
                        onChange={handleChange}
                        placeholder="CVV"
                      />
                    </div>
                    <div className={`${styles.campoForm} ${styles.campoFormCheio}`}>
                      <label>Parcelas</label>
                      <select
                        name="parcelas"
                        value={dados.parcelas}
                        onChange={handleChange}
                        className={styles.selectForm}
                      >
                        {produto.parcelas.map((p) => (
                          <option key={p.value} value={p.value}>{p.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {metodoPagamento === "pix" && (
                  <div className={styles.infoPagamentoAlternativo}>
                    <div className={styles.badgeSeguroMetodo}>Aprovação imediata</div>
                    <QrCode size={64} className={styles.iconMetodoGrande} />
                    <p>O código Pix será gerado após finalizar o pedido. Você poderá pagar escaneando o QR Code ou copiando o código "Pix Copia e Cola".</p>
                  </div>
                )}

                {metodoPagamento === "boleto" && (
                  <div className={styles.infoPagamentoAlternativo}>
                    <div className={styles.badgeSeguroMetodo}>Aprovação em 1 dia útil</div>
                    <FileText size={64} className={styles.iconMetodoGrande} />
                    <p>O boleto bancário será gerado após a confirmação do pedido. Você poderá imprimir ou pagar diretamente com o código de barras no seu internet banking.</p>
                  </div>
                )}

                <div className={styles.botoesAcoes}>
                  <button type="button" className={styles.btnVoltar} onClick={handleBack}>
                    <ArrowLeft size={16} /> VOLTAR
                  </button>
                  <button type="submit" className={`${styles.btnContinuar} ${styles.btnFinalizar}`}>
                    Finalizar compra
                  </button>
                </div>
              </form>
            )}

            {/* ETAPA 4: Processando o Pedido */}
            {etapa === 4 && (
              <div className={styles.telaStatusProcessando}>
                <div className={styles.statusIconLoaderBox}>
                  <ShoppingBag size={40} className={styles.bagIconLoader} />
                  <Loader2 size={80} className={styles.spinnerIconLoader} />
                </div>
                <h2>Processando seu pedido...</h2>
                <p>Aguarde, estamos processando sua compra de forma segura.</p>

                <div className={styles.caixaSegurancaAmbiente}>
                  <ShieldCheck size={20} />
                  <span>Ambiente 100% seguro. Suas informações estão criptografadas.</span>
                </div>
              </div>
            )}

            {/* ETAPA 5: Sucesso no Pedido */}
            {etapa === 5 && (
              <div className={styles.telaStatusSucesso}>
                <div className={styles.sucessoIconBox}>
                  <CheckCircle size={80} />
                </div>
                <h2>Pedido realizado com sucesso!</h2>
                <p className={styles.sucessoTxtSub}>Obrigado por comprar na DexMove.</p>
                <p className={styles.sucessoMensagem}>Você acaba de dar um passo muito importante para melhorar sua qualidade de vida.</p>

                <div className={styles.botoesSucesso}>
                  <button onClick={() => navigate("/pedidos")} className={styles.btnAcompanhar}>
                    Acompanhar pedido
                  </button>
                  <button onClick={() => navigate("/home2")} className={styles.btnIrInicio}>
                    Ir para a página inicial
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* LADO DIREITO: Resumo do Pedido (só aparece nas etapas 1 a 3) */}
          {etapa <= 3 && (
            <div className={styles.cardResumoPedido}>
              <h3>Resumo do pedido</h3>

              <div className={styles.itemResumoFlex}>
                <div className={styles.itemResumoImagemBox}>
                  <img src={produto.imagem} alt={produto.titulo} />
                </div>
                <div className={styles.itemResumoDetalhes}>
                  <h4>{produto.titulo}</h4>
                  <p className={styles.subtextItemResumo}>{produto.subtitulo}</p>
                </div>
                <div className={styles.itemResumoPrecoTotal}>
                  {produto.precoFormatado}
                </div>
              </div>

              <div className={styles.divisorResumo}></div>

              <div className={styles.detalhesLinhasValores}>
                <div className={styles.linhaValorFila}>
                  <span>Subtotal</span>
                  <span>{produto.precoFormatado}</span>
                </div>
                <div className={styles.linhaValorFila}>
                  <span>Frete</span>
                  <span className={styles.freteGratisTxt}>Grátis</span>
                </div>
                <div className={styles.divisorResumo}></div>
                <div className={`${styles.linhaValorFila} ${styles.linhaTotalDestaque}`}>
                  <span>Total</span>
                  <span>{produto.precoFormatado}</span>
                </div>
              </div>

              <div className={styles.compraSeguraSeloLateral}>
                <ShieldCheck size={16} />
                <span>Compra 100% segura e garantida</span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Wave divider antes do Footer */}
      <svg viewBox="0 0 1000 150" preserveAspectRatio="none" className={styles.bottomWaveDivider}>
        <path d="M0,150 L0,100 Q250,40 500,80 T1000,60 L1000,150 Z" fill="#0a5c61" />
        <path d="M0,150 L0,110 Q300,150 600,100 T1000,90 L1000,150 Z" fill="#f6d04c" opacity="0.4" />
      </svg>

      <Footer />
    
    </div>
  );
}

export default Comprar;