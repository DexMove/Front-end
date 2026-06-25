import { useNavigate } from 'react-router-dom';
import { Ruler } from 'lucide-react';
import styles from '../css.par/Par.module.css';
import ortesem1 from '../../../assets/imag/ortesen11.svg';
import ortesem2 from '../../../assets/imag/ortesen21.svg';
import ortesem3 from '../../../assets/imag/ortesen31.svg';
import ortesem4 from '../../../assets/imag/2ortese.png';
import ortese from '../../../assets/imag/2par.png';
import celular from '../../../assets/imag/celular.png';
import bateria from '../../../assets/imag/bateria.png';
import bluet from '../../../assets/imag/bluet.png';
import mao from '../../../assets/imag/mao.png';
import guiaTamanhos from '../../../assets/imag/guia.png';
import { useState } from 'react';

const imagens = [
  ortesem1,
  ortesem2,
  ortesem3,
  ortesem4,
];

function Par() {
    const navigate = useNavigate();
    const [imagemSelecionada, setImagemSelecionada] = useState(ortese);
    const [showRulerImage, setShowRulerImage] = useState(false);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('M');
    return (
        <section className={styles.section8}>

            <div className={styles.esquerda}>
                <div className={styles.orteses}>
                    {imagens.map((img, index) => (
                        <div
                            key={index}
                            className={`${styles.caixa} ${imagemSelecionada === img ? styles.ativa : ''}`}
                            onClick={() => setImagemSelecionada(img)}
                        >
                            <img src={img} alt={`Imagem ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className={styles.imagemPrincipal}>
                    <img src={imagemSelecionada} alt="Órtese principal" />
                </div>
            </div>

            <div className={styles.info}>

                <h2 className={styles.titulo}>Órtese do par</h2>


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

                <div className={styles.preco}>
                    <h3>R$1.400,00</h3>
                    <p>  6x de R$233,33 sem juros</p>
                </div>

                <div className={styles.tamanhos}>
                    <p>Tamanho:</p>
                    <div className={styles.botoesTomanho}>
                        {['PP', 'P', 'M', 'G', 'GG'].map((t) => (
                            <button
                                key={t}
                                className={`${styles.tamanho} ${tamanhoSelecionado === t ? styles.tamanhoAtivo : ''}`}
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
                                <img
                                    src={guiaTamanhos}
                                    alt="Guia de tamanhos"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <button className={styles.Comprar} onClick={() => navigate('/comprar')}>
                    Comprar
                </button>
                <p className={styles.seguro}> COMPRA 100% SEGURA E PROTEGIDA</p>

            </div>
        </section>
    );
}
export default Par