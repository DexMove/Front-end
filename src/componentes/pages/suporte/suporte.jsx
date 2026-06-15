import { useState } from "react";
import styles from "./suporte.module.css";
import iconeNavegar from "../../../assets/icons8-navegar-60.png";
import iconeSeta from "../../../assets/weui_arrow-filled.png";
import imagemContato from "../../../assets/image_62.png";
import Footer from "../../Footer";

function Suporte() { 
    const [faqAberto, setFaqAberto] = useState(null);

    // 1. Lista organizada com "conteudo" sendo um array para os mini-cards
    const perguntas = [
        { 
            id: 0, 
            titulo: "Inteligência artificial", 
            conteudo: [
                {
                    q: "Como a IA ajuda?",
                    r: "Monitora seus movimentos em tempo real, ajustando a força da órtese para evitar fadiga e garantir exercícios seguros."
                },
                {
                    q: "A IA substitui o médico?",
                    r: "Não. Ela serve como uma ferramenta assistiva que coleta dados precisos para o seu fisioterapeuta analisar sua evolução."
                },
                {
                    q: "Preciso de internet? ",
                    r: "Não. Todo o processamento da IA e o controle dos movimentos ocorrem localmente no hardware da órtese, garantindo pleno funcionamento em qualquer lugar, sem dependência de Wi-Fi ou dados móveis."
                }
            ]
        },
        { 
            id: 1, 
            titulo: "Como configurar o dispositivo", 
            conteudo: [
                {
                    q: "Passo a passo inicial",
                    r: "Basta ligar o dispositivo, ativar o Bluetooth do seu celular e seguir o guia no app oficial."
                },
                {
                    q: "Problemas de conexão?",
                    r: "Verifique se o Bluetooth do seu celular está ativo para sincronizar os dados com o aplicativo. Se falhar, segure o botão reset por 5 segundos."
                },
                {
                    q: "Como calibrar?",
                    r: "No primeiro uso, o app pedirá para você realizar o movimento máximo de abertura e fechamento. Isso define seus limites anatômicos e garante que a órtese respeite sua amplitude de movimento."
                }
            ]
        },
        { 
            id: 2, 
            titulo: "Funcionalidades da Órtese", 
            conteudo: [
                {
                    q: "Posso usar diariamente?",
                    r: "A MoviHand é um dispositivo de suporte à reabilitação motora. No modo assistido, ela auxilia na execução de movimentos passivos e repetitivos para preservar a mobilidade das articulações, devendo ser utilizada estritamente sob orientação profissional."
                },
                {
                    q: "Quais são os modos?",
                    r: "Possui modo Assistido (suporte ao movimento), Resistivo (estímulo de força) e Passivo (alongamento e mobilização automática)."
                },
                {
                    q: "A órtese é pesada?",
                    r: "Não. Desenvolvida com materiais leves e ergonômicos para não sobrecarregar o punho e garantir o conforto durante as sessões de treino."
                }
            ]
        },
        { 
            id: 3, 
            titulo: "Bateria e Carregamento", 
            conteudo: [
                {
                    q: "Quanto tempo dura a bateria?",
                    r: "Suporta até 8 horas de uso. O carregamento total via USB-C leva aproximadamente 2 horas."
                },
                {
                    q: "Posso usar carregando?",
                    r: "Por segurança, o sistema bloqueia o uso enquanto o cabo está conectado à tomada."
                },
                {
                    q: "Qual o significado das luzes?",
                    r: "Vermelho carregando, Verde carga completa. Laranja piscante indica erro no cabo ou na fonte de energia."
                }
            ]
        },
        { 
            id: 4, 
            titulo: "Garantia e Manutenção", 
            conteudo: [
                {
                    q: "O que a garantia cobre?",
                    r: "Defeitos de fabricação em sensores, motores e bateria por 1 ano. Não cobre quedas ou imersão em líquidos."
                },
                {
                    q: "Como limpar?",
                    r: "Use pano úmido e álcool 70% na carcaça. As luvas de tecido são removíveis e podem ser lavadas com sabão neutro."
                },
                {
                    q: "Onde pedir peças?",
                    r: "Se precisar de novas luvas ou cabos, clique em \"Falar com suporte\" para solicitar peças de reposição originais."
                }
            ]
        }
    ];

    return ( 
        <div className={styles.container}>
            <main>
                {/* SEÇÃO PRINCIPAL */}
                <section className={styles.secaoPrincipal}>
                    <div className={styles.containerOndas}>
                        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#f3e396" d="M0,0 H1440 V400 C1100,400 400,400 0,450 Z"></path>
                            <path fill="#ffb366" d="M0,0 H1440 V350 C1100,450 250,350 0,400 Z"></path>
                            <path fill="#0b5c6a" d="M0,0 H1440 V300 C1100,400 500,400 0,150 Z"></path>
                        </svg>
                    </div>
                    <div className={styles.conteudoPrincipal}>
                        <h1>Encontre o suporte certo <br /> para sua reabilitação.</h1>
                        <p>A DexMove oferece soluções completas para quem <br /> busca recuperar movimento, autonomia e qualidade de vida.</p>
                        <button className={styles.btnSuporte} onClick={() => {
                            const elemento = document.getElementById('secao-contato');
                            if (elemento) {
                                elemento.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                            <img src={iconeNavegar} alt="Ícone" className={styles.btnIcne} />
                            Fale com nosso suporte
                        </button>
                    </div>
                </section>

                {/* CENTRAL DE AJUDA */}
                <section className={styles.centralAjuda}>
                    <h2>Central de Ajuda</h2>
                    <p>Aqui você conhece as principais perguntas sobre as funcionalidades da MoviHand</p>
                    
                    <div className={styles.listaFaq}>
                        {perguntas.map((item) => ( // AQUI o 'item' é criado
                            <div key={item.id} className={styles.containerItem}>
                                <div 
                                    className={styles.itemFaq} 
                                    onClick={() => setFaqAberto(faqAberto === item.id ? null : item.id)}
                                >
                                    {item.titulo}
                                    <img 
                                        src={iconeSeta} 
                                        alt="Seta" 
                                        className={`${styles.setaPng} ${faqAberto === item.id ? styles.setaAtiva : ""}`} 
                                    />
                                </div>

                                <div className={`${styles.resposta} ${faqAberto === item.id ? styles.respostaAberta : ""}`}>
                                    <div className={styles.conteudoResposta}>
                                        {/* Loop interno para os mini-cards */}
                                        {item.conteudo.map((sub, index) => (
                                            <div key={index} className={styles.cardInterno}>
                                                <span className={styles.perguntaInterna}>{sub.q}</span>
                                                <p className={styles.textoInterno}>
                                                    <strong>Resposta:</strong> {sub.r}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                </section>

{/* SEÇÃO CONTATO */}
                <section className={styles.secaoContato} id="secao-contato">
                    {/* AS ONDAS AGORA FICAM DENTRO DA SEÇÃO COMO FUNDO */}
                    <div className={styles.containerOndasInferior}>
                        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleY(-1)' }}>
                            <path fill="#f3e396" d="M0,0 H1440 V400 C1100,400 400,400 0,400 Z"></path>
                            <path fill="#ffb366" d="M0,0 H1440 V350 C1100,445 200,350 0,350 Z"></path>
                            <path fill="#0b5c6a" d="M0,0 H1440 V150 C3000,350 500,70 0,100 Z"></path>
                        </svg>
                    </div>

                    <div className={styles.containerContato}>
                        <div className={styles.imagemContato}>
                            <img src={imagemContato} alt="Suporte técnico" />
                        </div>
                        <div className={styles.conteudoContato}>
                            <div className={styles.cardContato}>
                                <h3>Entre em contato com o suporte técnico</h3>
                                <p>Nossa equipe está pronta para ajudar você com qualquer dúvida sobre a MoviHand.</p>
                                <form className={styles.formularioSuporte}>
                                    <div className={styles.campoEntrada}>
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" id="email" placeholder="exemplo@email.com" />
                                    </div>
                                    <div className={styles.campoEntrada}>
                                        <label htmlFor="tel">Telefone de contato</label>
                                        <input type="tel" id="tel" placeholder="(00) 00000-0000" />
                                    </div>
                                    <div className={styles.campoMensagem}>
                                        <label htmlFor="msg">Como podemos ajudar?</label>
                                        <textarea id="msg" rows="4" placeholder="Descreva sua dúvida ou problema..."></textarea>
                                    </div>
                                    <button type="submit" className={styles.btnEnviar}>Enviar Mensagem</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    );
}

export default Suporte;