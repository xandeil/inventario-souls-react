import { useState } from 'react';
import Inventario from './components/Menu/Inventario/index';
import Status from './components/Menu/Status/index';
import './App.css';

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('INVENTÁRIO');

  // O "SAVE" COMPLETO DO PERSONAGEM
  const [personagem, setPersonagem] = useState({
    nome: "Recruta Escamado",
    nivel: 9,
    memorias: 0,
    memoriasParaProxNivel: 811,
    
    // Atributos que o jogador distribui
    atributos: {
      vida: 15,
      vigor: 12,
      forca: 18,
      destreza: 14,
      inteligencia: 10,
      fe: 8
    },

    // Status derivados (Base Stats)
    hpMax: 522,
    staminaMax: 94,
    manaMax: 68,
    pesoMax: 49.8,
    poise: 30,
    discovery: 107.0,

    // Resistências do corpo
    resistencias: {
      immunity: 173,   // Veneno
      robustness: 225, // Sangramento/Congelamento
    },

    // Defesas da armadura (%)
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
      
      {/* --- MUNDO DO JOGO (FUNDO) --- */}
      <div className="game-world-mockup">
        <h2 style={{ color: '#444' }}>[ O JOGO ESTÁ RODANDO ]</h2>
        {!menuAberto && (
          <button className="btn-start" onClick={() => setMenuAberto(true)}>
            MENU (START)
          </button>
        )}
      </div>

      {/* --- MENU DE PAUSA --- */}
      {menuAberto && (
        <div className="overlay-menu">
          <div className="caixa-principal-menu">
            
            {/* Cabeçalho */}
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

            {/* Conteúdo das Abas */}
            <div className="conteudo-dinamico">
              
              {/* Passando os atributos para o Inventário checar os requisitos das armas */}
              {abaAtiva === 'INVENTÁRIO' && (
                <Inventario statusAtual={personagem.atributos} />
              )}

              {/* Passando o objeto personagem completo para a Aba de Status */}
              {abaAtiva === 'STATUS' && (
                <Status personagem={personagem} />
              )}

              {/* Outras abas (Placeholder) */}
              {(abaAtiva === 'EQUIPAMENTO' || abaAtiva === 'CONFIG') && (
                <div className="placeholder-text">
                  <h2>{abaAtiva}</h2>
                  <p>Aguardando implementação...</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;