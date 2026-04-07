import React from 'react';
import './styles/styles.css';
import videoPersonagem from '../../../assets/personagemAnimado.mp4';

export default function Equipamento({ personagem }) {
  return (
    <div className="equip-container-compact">
      
      {/* COLUNA 1: PERSONAGEM */}
      <div className="side-hero">
        <div className="moldura-hero-compact">
          <video autoPlay muted loop playsInline className="video-compact">
            <source src={videoPersonagem} type="video/mp4" />
          </video>
        </div>
        <div className="hero-name-compact">
          <h2>{personagem.nome}</h2>
          <span>LVL {personagem.nivel}</span>
        </div>
      </div>

      {/* COLUNA 2: SLOTS PRINCIPAIS EMPILHADOS */}
      <div className="main-slots-stack">
        
        <div className="equip-group">
          <p className="group-label">Mão Direita</p>
          <div className="slots-row">
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
          </div>
          <p className="group-label">Mão Esquerda</p>
          <div className="slots-row">
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
          </div>
        </div>

        <div className="equip-group">
          <p className="group-label">Armadura</p>
          <div className="slots-row">
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
          </div>
        </div>

        <div className="equip-group">
          <p className="group-label">Munição</p>
          <div className="slots-row">
            <div className="slot-sq ammo"></div>
            <div className="slot-sq ammo"></div>
            <div className="slot-sq bolt"></div>
            <div className="slot-sq bolt"></div>
          </div>
        </div>
      </div>

      {/* COLUNA 3: ACESSÓRIOS (VERTICAL) */}
      <div className="accessories-vertical">
        <p className="vertical-label">Acessórios</p>
        <div className="slots-column">
          <div className="slot-sq circle" title="Colar"></div>
          <div className="slot-sq ring" title="Anel 1"></div>
          <div className="slot-sq ring" title="Anel 2"></div>
          <div className="slot-sq ring" title="Anel 3"></div>
          <div className="slot-sq ring" title="Anel 4"></div>
        </div>
      </div>

      {/* COLUNA 4: STATUS (DIREITA) */}
      <div className="side-stats-compact">
        <p className="group-label">Status</p>
        <div className="stat-line"><span>HP</span> <strong>{personagem.hpMax}</strong></div>
        <div className="stat-line"><span>STM</span> <strong>{personagem.staminaMax}</strong></div>
        <div className="stat-line"><span>FP</span> <strong>{personagem.manaMax}</strong></div>
        <div className="stat-line"><span>LOAD</span> <strong>30.8</strong></div>
      </div>

    </div>
  );
}