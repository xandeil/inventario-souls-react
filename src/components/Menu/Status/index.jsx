import React from 'react';
import './styles/styles.css'; 
import videoPersonagem from '../../../assets/personagemAnimado.mp4'; 

export default function Status({ personagem }) {
  return (
    <div className="status-screen-v4">
      
      {/* --- COLUNA 1: FOCO TOTAL NO PERSONAGEM --- */}
      <div className="status-col status-visual-container">
        <div className="moldura-status-video-full">
          <video autoPlay muted loop playsInline className="video-personagem-full">
            <source src={videoPersonagem} type="video/mp4" />
          </video>
        </div>
        
        <div className="info-basica-overlay">
          <h2>{personagem.nome}</h2>
          <p className="lvl-text">NÍVEL {personagem.nivel}</p>
        </div>
      </div>

      {/* --- COLUNA 2: ATRIBUTOS (PONTOS) --- */}
      <div className="status-col">
        <h3 className="sub-title">Atributos</h3>
        <div className="atrib-item"><span>Vida</span> <strong>{personagem.atributos.vida}</strong></div>
        <div className="atrib-item"><span>Vigor</span> <strong>{personagem.atributos.vigor}</strong></div>
        <div className="atrib-item"><span>Força</span> <strong>{personagem.atributos.forca}</strong></div>
        <div className="atrib-item"><span>Destreza</span> <strong>{personagem.atributos.destreza}</strong></div>
        <div className="atrib-item"><span>Inteligência</span> <strong>{personagem.atributos.inteligencia}</strong></div>
        <div className="atrib-item"><span>Fé</span> <strong>{personagem.atributos.fe}</strong></div>
        
        <h3 className="sub-title" style={{marginTop: '30px'}}>Progresso</h3>
        <div className="atrib-item"><span>Memórias</span> <strong>{personagem.memorias}</strong></div>
        <div className="atrib-item"><span>Prox. Nível</span> <strong>{personagem.memoriasParaProxNivel}</strong></div>
      </div>

      {/* --- COLUNA 3: BASE STATS --- */}
      <div className="status-col">
        <h3 className="sub-title">Base Stats</h3>
        <div className="bar-group">
          <div className="label-bar">HP <span>522 / 522</span></div>
          <div className="progress-bg"><div className="fill hp" style={{ width: '100%' }}></div></div>
        </div>
        <div className="bar-group">
          <div className="label-bar">STM <span>{personagem.staminaMax} / {personagem.staminaMax}</span></div>
          <div className="progress-bg"><div className="fill stm" style={{ width: '100%' }}></div></div>
        </div>
        <div className="bar-group">
          <div className="label-bar">FP <span>{personagem.manaMax} / {personagem.manaMax}</span></div>
          <div className="progress-bg"><div className="fill mana" style={{ width: '100%' }}></div></div>
        </div>

        <div className="atrib-item"><span>Equip Load</span> <strong>30.8 / {personagem.pesoMax}</strong></div>
        <p className="load-status">Med. Load</p>
        
        <div className="atrib-item"><span>Poise</span> <strong>{personagem.poise}</strong></div>
        <div className="atrib-item"><span>Discovery</span> <strong>{personagem.discovery}</strong></div>
      </div>

      {/* --- COLUNA 4: RESISTÊNCIA E DEFESA --- */}
      <div className="status-col">
        <h3 className="sub-title">Resistências</h3>
        <div className="atrib-item"><span>Immunity</span> <strong>{personagem.resistencias.immunity}</strong></div>
        <div className="atrib-item"><span>Robustness</span> <strong>{personagem.resistencias.robustness}</strong></div>

        <h3 className="sub-title" style={{marginTop: '30px'}}>Defesa (%)</h3>
        <div className="atrib-item"><span>Físico</span> <strong>{personagem.defesas.fisico}</strong></div>
        <div className="atrib-item"><span>Magia</span> <strong>{personagem.defesas.magia}</strong></div>
        <div className="atrib-item"><span>Fogo</span> <strong>{personagem.defesas.fogo}</strong></div>
        <div className="atrib-item"><span>Raio</span> <strong>{personagem.defesas.raio}</strong></div>
      </div>

    </div>
  );
}