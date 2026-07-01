import React, { useEffect, useState } from 'react';
import api from '../../services/api'; // Importa a configuração do Axios

const AreaControle = () => {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [dashboardId, setDashboardId] = useState('');

    const tipoUsuario = (localStorage.getItem('tipoUsuario') || '').toString().toLowerCase();
    const idUser = localStorage.getItem('idUser');
    const pacienteIdSalvo = localStorage.getItem('pacienteId');

    useEffect(() => {
        let idParaDashboard = '';

        if (tipoUsuario.includes('paciente')) {
            idParaDashboard = idUser || '';
        } else if (tipoUsuario.includes('responsavel')) {
            idParaDashboard = pacienteIdSalvo || '';
            if (!idParaDashboard) {
                const promptId = window.prompt('Informe o ID do paciente vinculado para acessar a área de controle:');
                if (promptId) {
                    idParaDashboard = promptId.trim();
                    localStorage.setItem('pacienteId', idParaDashboard);
                }
            }
        } else {
            idParaDashboard = idUser || '';
        }

        if (idParaDashboard) {
            setDashboardId(idParaDashboard);
        } else {
            setDashboardId('');
            setCarregando(false);
            console.warn('ID para dashboard não encontrado. Faça login novamente ou informe o ID do paciente vinculado.');
        }
    }, [tipoUsuario, idUser, pacienteIdSalvo]);

    useEffect(() => {
        if (!dashboardId) return;

        const fetchDashboard = () => {
            setCarregando(true);
            console.log(`🔍 Buscando dados para dashboardId: ${dashboardId}`);

            api.get(`/api/prescricoes/dashboard/${dashboardId}`)
                .then(response => {
                    console.log("✅ Dados recebidos do backend:", response.data);
                    setDados(response.data);
                    setCarregando(false);
                })
                .catch(error => {
                    console.error("❌ Erro ao buscar dados:", error.message);
                    console.error("❌ URL tentada:", `/api/prescricoes/dashboard/${dashboardId}`);
                    console.error("❌ Status HTTP:", error.response?.status);
                    console.error("❌ Resposta do erro:", error.response?.data);

                    alert(`Erro ao carregar dados. Verifique se o backend está rodando em http://localhost:8081`);
                    setCarregando(false);
                });
        };

        fetchDashboard();

        const onUpload = () => {
            console.log("📤 Planilha foi enviada! Recarregando dados...");
            fetchDashboard();
        };

        window.addEventListener('planilhaUploaded', onUpload);
        return () => window.removeEventListener('planilhaUploaded', onUpload);
    }, [dashboardId]);

    if (carregando) return <p>Carregando dados da MoveHand...</p>;
    if (!dados) return <p>Nenhuma prescrição ativa encontrada.</p>;

    return (
        <div className="movehand-container">
            {/* PARTE DAS ORIENTAÇÕES (O card do topo da sua imagem) */}
            <section className="orientacoes-section">
                <h2>Orientação para esta sessão</h2>
                {dados.orientacoes && dados.orientacoes.map((texto, index) => (
                    <p key={index}>{texto}</p>
                ))}
            </section>

            {/* PARTE DOS ÂNGULOS (Os 3 valores da sua imagem) */}
            <section className="configuracoes-ativas">
                <div className="card">
                    <span>Posição Inicial</span>
                    <h3>{dados.posicaoInicial}°</h3>
                </div>
                <div className="card">
                    <span>Movimento</span>
                    <h3>{dados.movimento}°</h3>
                </div>
                <div className="card">
                    <span>Posição Final</span>
                    <h3>{dados.posicaoFinal}°</h3>
                </div>
            </section>

            {/* STATUS DA BATERIA E CONEXÃO */}
            <div className="status-bar">
                <span>Status: {dados.statusDispositivo}</span>
                <span>Bateria: {dados.bateria}%</span>
            </div>
        </div>
    );
};

export default AreaControle;