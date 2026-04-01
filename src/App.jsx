import { useState } from 'react';
import Inventario from './components/Menu/Inventario/index';
import './App.css';

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('INVENTÁRIO');

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
              {abaAtiva === 'INVENTÁRIO' && <Inventario />}

              {abaAtiva !== 'INVENTÁRIO' && (
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