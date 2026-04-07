import { useState, useEffect } from 'react';
import Inventario from './components/Menu/Inventario/index';
import Status from './components/Menu/Status/index';
import Equipamento from './components/Menu/Equipamento/index';
import Config from "./components/Menu/Configuracoes/index"; 
import './App.css';

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('EQUIPAMENTO'); // Mudei para começar no Equipamento para você testar

  // Esta função lê a resolução salva e ajusta o tamanho da interface
  useEffect(() => {
    const aplicarRes = () => {
      const res = localStorage.getItem('gameRes') || '1920x1080';
      const largura = window.innerWidth;
      let escala = 1;

      if (res === '1920x1080') escala = largura / 1920;
      else if (res === '1366x768') escala = largura / 1366;
      else if (res === '1360x768') escala = largura / 1360;

      document.documentElement.style.setProperty('--game-scale', escala);
    };

    aplicarRes();
    window.addEventListener('resize', aplicarRes);
    return () => window.removeEventListener('resize', aplicarRes);
  }, []);

  const [personagem, setPersonagem] = useState({
    nome: "Recruta Escamado",
    nivel: 9,
    memorias: 0,
    memoriasParaProxNivel: 811,
    atributos: {
      vida: 15,
      vigor: 12,
      forca: 18,
      destreza: 14,
      inteligencia: 10,
      fe: 8
    },
    hpMax: 522,
    staminaMax: 94,
    manaMax: 68,
    pesoMax: 49.8,
    poise: 30,
    discovery: 107.0,
    resistencias: {
      immunity: 173,
      robustness: 225,
    },
    defesas: {
      fisico: 79,
      magia: 93,
      fogo: 85,
      raio: 75,
      sagrado: 89
    },
    danoSoco: 32
  });

  return (
    <div className="game-viewport">
      <div className="game-world-mockup">
        <h2 style={{ color: '#444' }}>[ O JOGO ESTÁ RODANDO ]</h2>
        {!menuAberto && (
          <button className="btn-start" onClick={() => setMenuAberto(true)}>
            MENU (START)
          </button>
        )}
      </div>

      {menuAberto && (
        <div className="overlay-menu">
          <div className="caixa-principal-menu">

            <div className="header-abas">
              {['EQUIPAMENTO', 'INVENTÁRIO', 'STATUS', 'CONFIG'].map(aba => (
                <button
                  key={aba}
                  className={`tab-button ${abaAtiva === aba ? 'ativa' : ''}`}
                  onClick={() => setAbaAtiva(aba)}
                >
                  {aba}
                </button>
              ))}
              <button className="btn-fechar" onClick={() => setMenuAberto(false)}>X</button>
            </div>

            <div className="conteudo-dinamico">

              {/* 2. ADICIONAR A RENDERIZAÇÃO DO EQUIPAMENTO */}
              {abaAtiva === 'EQUIPAMENTO' && (
                <Equipamento personagem={personagem} />
              )}

              {abaAtiva === 'INVENTÁRIO' && (
                <Inventario statusAtual={personagem.atributos} />
              )}

              {abaAtiva === 'STATUS' && (
                <Status personagem={personagem} />
              )}

              {abaAtiva === 'CONFIG' && (
                <Config />
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;