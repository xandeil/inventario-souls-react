import React from 'react';
import '../Status/styles/styles.css';
import videoPersonagem from '../../../assets/personagemAnimado.mp4'; 

export default function Status({ personagem }) {
  return (
    <div className="status-screen">
      
      {/* LADO ESQUERDO: O PERSONAGEM */}
      <div className="status-visual">
        <div className="moldura-status-video">
          <video autoPlay muted loop playsInline className="video-personagem">
            <source src={videoPersonagem} type="video/mp4" />
          </video>
        </div>
        <div className="info-basica">
            <h2>{personagem.nome}</h2>
            <p className="txt-nivel">NÍVEL {personagem.nivel}</p>
        </div>
      </div>

      {/* LADO DIREITO: ATRIBUTOS E BARRAS */}
      <div className="status-detalhes">
        
        <div className="secao-stats">
          <h3 className="sub-title">vitals</h3>
          <div className="bar-group">
            <div className="label-bar">HP <span>{personagem.hpMax}/{personagem.hpMax}</span></div>
            <div className="progress-bg"><div className="fill hp" style={{width: '100%'}}></div></div>
          </div>
          <div className="bar-group">
            <div className="label-bar">STM <span>{personagem.staminaMax}/{personagem.staminaMax}</span></div>
            <div className="progress-bg"><div className="fill stm" style={{width: '100%'}}></div></div>
          </div>
          <div className="bar-group">
            <div className="label-bar">MANA <span>{personagem.manaMax}/{personagem.manaMax}</span></div>
            <div className="progress-bg"><div className="fill mana" style={{width: '100%'}}></div></div>
          </div>
        </div>

        <div className="secao-atributos">
          <h3 className="sub-title">atributos</h3>
          
          <div className="atrib-item" title="Aumenta HP total">
            <span>VIDA</span> <strong>{personagem.atributos.vida}</strong>
          </div>
          
          <div className="atrib-item" title="Aumenta HP e Peso Máximo">
            <span>VIGOR</span> <strong>{personagem.atributos.vigor}</strong>
          </div>

          <div className="atrib-item" title="Dano de armas pesadas e combate desarmado">
            <span>FORÇA</span> <strong>{personagem.atributos.forca}</strong>
          </div>

          <div className="atrib-item" title="Dano de armas leves e velocidade de ataque">
            <span>DESTREZA</span> <strong>{personagem.atributos.destreza}</strong>
          </div>

          <div className="atrib-item" title="Dano de magias e Mana">
            <span>INTELIGÊNCIA</span> <strong>{personagem.atributos.inteligencia}</strong>
          </div>

          <div className="atrib-item" title="Dano de milagres e Mana">
            <span>FÉ</span> <strong>{personagem.atributos.fe}</strong>
          </div>
        </div>

        <div className="info-adicional">
            <div className="atrib-item"><span>CARGA MÁX</span> <strong>{personagem.pesoMax}kg</strong></div>
            <div className="atrib-item"><span>DANO DESARMADO</span> <strong>{Math.floor(personagem.danoSoco)}</strong></div>
        </div>

      </div>
    </div>
  );
}