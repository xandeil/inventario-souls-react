import { useState } from 'react'
import Inventario from './components/Menu/Inventario/index';
// Importações futuras (quando você criar os arquivos):
// import Equipamento from './components/menu/equipamento/index';
// import Status from './components/menu/status/index';
// import Configuracoes from './components/menu/configuracoes/index';

import './App.css'

function App() {
  // 1. Estado para saber se o Menu de Pausa está visível
  const [menuAberto, setMenuAberto] = useState(false);
  
  // 2. Estado para saber qual aba do menu estamos vendo
  const [abaAtiva, setAbaAtiva] = useState('EQUIPAMENTO');

  return (
    <div style={styles.gameWorld}>
      {/* --- TELA DE FUNDO (SIMULAÇÃO DO JOGO) --- */}
      <div style={styles.backgroundFake}>
        <h2 style={{ color: '#444', margin: 0 }}>[ O JOGO ESTÁ RODANDO NO FUNDO ]</h2>
        <p style={{ color: '#333' }}>Pressione o botão para pausar e abrir o menu</p>
        
        {!menuAberto && (
          <button style={styles.btnMenuPrincipal} onClick={() => setMenuAberto(true)}>
            MENU (ESC / START)
          </button>
        )}
      </div>

      {/* --- CAIXA DO MENU DE PAUSA (OVERLAY) --- */}
      {menuAberto && (
        <div style={styles.overlayMenu}>
          <div style={styles.caixaMenu}>
            
            {/* Cabeçalho com Abas do Menu */}
            <div style={styles.headerAbas}>
              {['EQUIPAMENTO', 'INVENTÁRIO', 'STATUS', 'CONFIG'].map(aba => (
                <button 
                  key={aba}
                  onClick={() => setAbaAtiva(aba)}
                  style={{
                    ...styles.tabBtn,
                    color: abaAtiva === aba ? '#c1a35f' : '#888',
                    borderBottom: abaAtiva === aba ? '2px solid #c1a35f' : 'none'
                  }}
                >
                  {aba}
                </button>
              ))}
              <button style={styles.btnClose} onClick={() => setMenuAberto(false)}>X</button>
            </div>

            {/* Conteúdo Dinâmico da Aba Selecionada */}
            <div style={styles.conteudoAba}>
              {/* Renderização Condicional dos Componentes */}
              
              {abaAtiva === 'INVENTÁRIO' && <Inventario />}

              {abaAtiva === 'EQUIPAMENTO' && (
                <div style={styles.placeholderText}>
                  <h2>EQUIPAMENTO</h2>
                  <p>Aguardando componente em: <code>menu/equipamento/index.jsx</code></p>
                </div>
              )}

              {abaAtiva === 'STATUS' && (
                <div style={styles.placeholderText}>
                  <h2>STATUS DO PERSONAGEM</h2>
                  <p>Aguardando componente em: <code>menu/status/index.jsx</code></p>
                </div>
              )}

              {abaAtiva === 'CONFIG' && (
                <div style={styles.placeholderText}>
                  <h2>CONFIGURAÇÕES</h2>
                  <p>Aguardando componente em: <code>menu/configuracoes/index.jsx</code></p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  gameWorld: {
    backgroundColor: '#050505',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'serif',
    overflow: 'hidden'
  },
  backgroundFake: {
    textAlign: 'center'
  },
  btnMenuPrincipal: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    backgroundColor: '#c1a35f',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
  },
  overlayMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
  caixaMenu: {
    width: '90%',
    height: '80%',
    backgroundColor: '#111',
    border: '1px solid #333',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 30px rgba(0,0,0,1)'
  },
  headerAbas: {
    display: 'flex',
    backgroundColor: '#000',
    padding: '0 20px',
    gap: '20px',
    alignItems: 'center',
    borderBottom: '1px solid #c1a35f33'
  },
  tabBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '20px 10px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    transition: '0.2s'
  },
  btnClose: {
    marginLeft: 'auto',
    background: 'none',
    border: '1px solid #c1a35f',
    color: '#c1a35f',
    cursor: 'pointer',
    padding: '5px 15px',
    fontWeight: 'bold'
  },
  conteudoAba: {
    flex: 1,
    color: '#eee',
    overflow: 'hidden' // Garante que o scroll fique dentro do componente
  },
  placeholderText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: '#444'
  }
};

export default App;