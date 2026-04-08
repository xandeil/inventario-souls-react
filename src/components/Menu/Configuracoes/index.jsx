import React, { useState } from 'react';
import './styles/styles.css';

export default function Config() {
  const [abaAtiva, setAbaAtiva] = useState('Vídeo');

  const mudarResolucao = (res) => {
    localStorage.setItem('gameRes', res);
    // Dispara um evento para o App.jsx perceber a mudança na hora
    window.dispatchEvent(new Event('storage')); 
    window.location.reload(); // Recarrega para aplicar a nova escala
  };

  return (
    <div className="config-container">
      <div className="config-sidebar">
        <button>Jogabilidade</button>
        <button className="active">Vídeo</button>
        <button>Áudio</button>
        <button className="btn-sair">Sair</button>
      </div>

      <div className="config-content">
        <h3>Resolução de Tela</h3>
        <div className="res-options">
          {['1920x1080', '1366x768', '1360x768'].map(res => (
            <button key={res} className="res-btn" onClick={() => mudarResolucao(res)}>
              {res}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}