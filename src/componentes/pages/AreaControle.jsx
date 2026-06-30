import React, { useEffect, useState, useCallback } from 'react';
import api from '../services/api'; // Importa a configuração do Axios

const AreaControle = () => {
    // 1. Estados para guardar os dados que vêm do Java
    const [configuracao, setConfiguracao] = useState(null);
    const [carregando, setCarregando] = useState(true);

    // Estados específicos para os ângulos (iniciados com valores padrão)
    const [posicaoInicial, setPosicaoInicial] = useState(45);
    const [movimento, setMovimento] = useState(77);
    const [posicaoFinal, setPosicaoFinal] = useState(32);

    // Simulando o ID do paciente (depois pegaremos do login)
    const pacienteId = 1;

    const fetchDashboard = useCallback(() => {
        setCarregando(true);
        api.get(`/api/prescricoes/dashboard/${pacienteId}`)
            .then(response => {
                setConfiguracao(response.data);
                // Atualiza os estados dos ângulos com os valores do backend
                if (response.data) {
                    if (typeof response.data.posicaoInicial !== 'undefined') setPosicaoInicial(response.data.posicaoInicial);
                    if (typeof response.data.movimento !== 'undefined') setMovimento(response.data.movimento);
                    if (typeof response.data.posicaoFinal !== 'undefined') setPosicaoFinal(response.data.posicaoFinal);
                }
                setCarregando(false);
            })
            .catch(error => {
                console.error("Erro ao buscar dados do Java:", error);
                setCarregando(false);
            });
    }, [pacienteId]);

    // 2. useEffect: Executa assim que a tela abre e quando um evento de upload acontece
    useEffect(() => {
        fetchDashboard();

        const onUpload = () => {
            fetchDashboard();
        };

        window.addEventListener('planilhaUploaded', onUpload);
        return () => window.removeEventListener('planilhaUploaded', onUpload);
    }, [fetchDashboard]);

    if (carregando) return <p>Carregando dados da MoveHand...</p>;
    if (!configuracao) return <p>Nenhuma prescrição ativa encontrada.</p>;

    return (
        <div className="movehand-container">
            {/* PARTE DAS ORIENTAÇÕES (O card do topo da sua imagem) */}
            <section className="orientacoes-section">
                <h2>Orientação para esta sessão</h2>
                {configuracao.orientacoes.map((texto, index) => (
                    <p key={index}>{texto}</p>
                ))}
            </section>

            {/* PARTE DOS ÂNGULOS (Os 3 valores da sua imagem) */}
            <section className="configuracoes-ativas">
                <div className="card">
                    <span>Posição Inicial</span>
                    <h3>{posicaoInicial}°</h3>
                </div>
                <div className="card">
                    <span>Movimento</span>
                    <h3>{movimento}°</h3>
                </div>
                <div className="card">
                    <span>Posição Final</span>
                    <h3>{posicaoFinal}°</h3>
                </div>
            </section>

            {/* STATUS DA BATERIA E CONEXÃO */}
            <div className="status-bar">
                <span>Status: {configuracao.statusDispositivo}</span>
                <span>Bateria: {configuracao.bateria}%</span>
            </div>
        </div>
    );
};

export default AreaControle;