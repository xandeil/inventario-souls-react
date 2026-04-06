import { useState } from 'react';
import Inventario from './components/Menu/Inventario/index';
import Status from './components/Menu/Status/index'; // Importando o novo componente
import './App.css';

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('INVENTÁRIO');

  // Centralizando os dados do personagem aqui para que todas as abas usem os mesmos valores
  const [personagem, setPersonagem] = useState({
    nome: "Recruta Escamado",
    nivel: 10,
    atributos: {
      vida: 15,
      vigor: 12,
      forca: 18,
      destreza: 14,
      inteligencia: 10,
      fe: 8
    },
    // Cálculos automáticos baseados nos atributos
    hpMax: 150, // vida * 10
    staminaMax: 60, // vigor * 5
    manaMax: 54, // (int + fe) * 3
    pesoMax: 74, // 50 + (vigor * 2)
    danoSoco: 32 // 5 + (forca * 1.5)
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
              
              {/* Renderização do Inventário passando os atributos para checar requisitos */}
              {abaAtiva === 'INVENTÁRIO' && (
                <Inventario statusAtual={personagem.atributos} />
              )}

              {/* Renderização da Aba de Status passando o objeto personagem completo */}
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