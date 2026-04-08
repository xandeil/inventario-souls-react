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

        <div className="hero-info-compact" style={{ marginTop: '20px', textAlign: 'left' }}>
          <h2 style={{
            fontSize: '1.6rem',
            textTransform: 'uppercase',
            margin: 0,
            fontFamily: 'serif', /* Ou a fonte que você estiver usando no Status */
            letterSpacing: '1px'
          }}>
            {personagem.nome}
          </h2>

          <div className="level-badge" style={{
            color: '#c1a35f',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            marginTop: '5px',
            textTransform: 'uppercase'
          }}>
            Nível {personagem.nivel}
          </div>
        </div>
      </div>

      {/* COLUNA 2: SLOTS PRINCIPAIS EMPILHADOS */}
      <div className="main-slots-stack">
        {/* CONTAINER DE ATAQUE (ARMAS + MUNIÇÃO) */}
        <div className="ataque-container">
          <div className="equip-group">
            <p className="group-label">Mão Direita</p>
            {/* Ajuste de gap para 18px para esticar os 3 slots */}
            <div className="slots-row" style={{ gap: '18px' }}>
              <div className="slot-sq"></div>
              <div className="slot-sq"></div>
              <div className="slot-sq"></div>
            </div>
            <p className="group-label">Mão Esquerda</p>
            <div className="slots-row" style={{ gap: '18px' }}>
              <div className="slot-sq"></div>
              <div className="slot-sq"></div>
              <div className="slot-sq"></div>
            </div>
          </div>

          <div className="equip-group">
            <p className="group-label">Flechas</p>
            {/* Ajuste de gap para 25px para esticar os 2 slots até a borda */}
            <div className="slots-row" style={{ gap: '25px' }}>
              <div className="slot-sq ammo"></div>
              <div className="slot-sq ammo"></div>
            </div>
            <p className="group-label" style={{ marginTop: '5px' }}>Setas</p>
            <div className="slots-row" style={{ gap: '25px' }}>
              <div className="slot-sq bolt"></div>
              <div className="slot-sq bolt"></div>
            </div>
          </div>
        </div>

        {/* ARMADURA */}
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

        {/* CONSUMÍVEIS (DUAS LINHAS) */}
        <div className="equip-group">
          <p className="group-label">Consumíveis</p>
          <div className="slots-row">
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
          </div>
          {/* Adicionado marginTop para descolar da linha de cima e gap para alinhar */}
          <div className="slots-row" style={{ marginTop: '8px' }}>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
            <div className="slot-sq"></div>
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