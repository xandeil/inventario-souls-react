import React, { useState } from 'react';
import './styles/styles.css';
import videoPersonagem from '../../../assets/personagemAnimado.mp4';

// Simulando um banco de dados de itens que você possui
const MEUS_ITENS = [
  // --- LÂMINAS ---
{ 
    id: 1, 
    cat: "lâminas", 
    nome: "Sanguinária de Escamas", 
    desc: "O metal desta lâmina não foi temperado em água, mas no sangue fervente daqueles que reduziram o mundo de seu mestre a cinzas. Ela não busca justiça, apenas o fim de uma linhagem. O sangue de dragão é o único banquete que sacia sua sede.", 
    icon: "🩸",
    passiva: "Ao derrotar inimigos do tipo Dragão, o dano desta arma aumenta permanentemente." 
  },
  { id: 2, cat: "lâminas", nome: "espc1", desc: "cimitarra leve para ataques rápidos.", icon: "🗡️" },
  { id: 3, cat: "lâminas", nome: "esp2", desc: "espada longa usada por cavaleiros de elite.", icon: "⚔️" },
  { id: 4, cat: "lâminas", nome: "esp_luxo", desc: "lâmina adornada com ouro e joias.", icon: "✨" },

  // --- LANÇAS (Nova Categoria Separada) ---
  { id: 5, cat: "lanças", nome: "lan1", desc: "lança de caça com ponta de pedra polida.", icon: "🍴" },
  { id: 6, cat: "lanças", nome: "lanc1", desc: "pique longo de infantaria para deter cargas.", icon: "🎋" },
  { id: 7, cat: "lanças", nome: "lan2", desc: "lança alada de cavaleiro, equilibrada e letal.", icon: "🔱" },
  { id: 8, cat: "lanças", nome: "lan_raio", desc: "uma lança lendária que emana eletricidade.", icon: "⚡" },

  // --- MARTELOS / CLAVAS ---
  { id: 9, cat: "martelos", nome: "clav1", desc: "pedaço de carvalho com pregos enferrujados.", icon: "🪵" },
  { id: 10, cat: "martelos", nome: "clavc1", desc: "clava reforçada com anéis de bronze.", icon: "🦴" },
  { id: 11, cat: "martelos", nome: "mar1", desc: "martelo de guerra para esmagar placas.", icon: "🔨" },
  { id: 12, cat: "martelos", nome: "mar_gigante", desc: "pesado demais para um humano comum.", icon: "⚒️" },

  // --- ARCOS / BESTAS ---
  { id: 13, cat: "arcos", nome: "arc1", desc: "arco de madeira flexível e simples.", icon: "🏹" },
  { id: 14, cat: "arcos", nome: "arcc1", desc: "arco composto com reforço de osso.", icon: "🏹" },
  { id: 15, cat: "arcos", nome: "bes1", desc: "besta leve de disparo rápido.", icon: "🎯" },
  { id: 16, cat: "arcos", nome: "bes_pesada", desc: "besta de cerco com alto poder de impacto.", icon: "🏹" },
  { id: 25, cat: "arcos", nome: "arc1", desc: "arco de madeira flexível e simples.", icon: "🏹" },
  { id: 26, cat: "arcos", nome: "arcc1", desc: "arco composto com reforço de osso.", icon: "🏹" },
  { id: 27, cat: "arcos", nome: "bes1", desc: "besta leve de disparo rápido.", icon: "🎯" },
  { id: 28, cat: "arcos", nome: "bes_pesada", desc: "besta de cerco com alto poder de impacto.", icon: "🏹" },
  { id: 29, cat: "arcos", nome: "arc1", desc: "arco de madeira flexível e simples.", icon: "🏹" },
  { id: 30, cat: "arcos", nome: "arcc1", desc: "arco composto com reforço de osso.", icon: "🏹" },
  { id: 31, cat: "arcos", nome: "bes1", desc: "besta leve de disparo rápido.", icon: "🎯" },
  { id: 32, cat: "arcos", nome: "bes_pesada", desc: "besta de cerco com alto poder de impacto.", icon: "🏹" },
  { id: 33, cat: "arcos", nome: "arc1", desc: "arco de madeira flexível e simples.", icon: "🏹" },
  { id: 34, cat: "arcos", nome: "arcc1", desc: "arco composto com reforço de osso.", icon: "🏹" },
  { id: 35, cat: "arcos", nome: "bes1", desc: "besta leve de disparo rápido.", icon: "🎯" },
  { id: 36, cat: "arcos", nome: "bes_pesada", desc: "besta de cerco com alto poder de impacto.", icon: "🏹" },

  // --- CAJADOS ---
  { id: 17, cat: "cajados", nome: "caj1", desc: "cajado de aprendiz feito de freixo.", icon: "🪄" },
  { id: 18, cat: "cajados", nome: "cajc1", desc: "canalizador com uma pequena gema azul.", icon: "🔮" },
  { id: 19, cat: "cajados", nome: "caj2", desc: "cajado de mestre em artes arcanas.", icon: "🪄" },
  { id: 20, cat: "cajados", nome: "caj_cristal", desc: "focado em magias de puro brilho.", icon: "💎" },

  // --- SELOS / TALISMÃS ---
  { id: 21, cat: "selos", nome: "sel1", desc: "selo sagrado esculpido em pedra branca.", icon: "📜" },
  { id: 22, cat: "selos", nome: "selc1", desc: "talisman de proteção contra o mal.", icon: "🧿" },
  { id: 23, cat: "selos", nome: "sel2", desc: "emblema de ouro de uma ordem antiga.", icon: "☀️" },
  { id: 24, cat: "selos", nome: "sel_caos", desc: "emana um calor inquietante e sombrio.", icon: "🔥" },
];

// Pegamos apenas as categorias que existem nos nossos itens
const CATEGORIAS = [...new Set(MEUS_ITENS.map(item => item.cat))];

export default function Inventario() {
  const [selecionado, setSelecionado] = useState(MEUS_ITENS[0]);

  return (
    <div className="inventario-container">
      {/* COLUNA 1: EXIBIÇÃO DO PERSONAGEM */}
      <div className="coluna-personagem">
        <div className="moldura-personagem">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="video-personagem"
          >
            {/* USANDO A VARIÁVEL IMPORTADA AQUI: */}
            <source src={videoPersonagem} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          <span className="label-pixel">personagem</span>
        </div>
      </div>

      {/* COLUNA 2: GRADE DINÂMICA */}
      <div className="coluna-grid">
        {CATEGORIAS.map(cat => (
          <div key={cat} className="categoria-section">
            <h3 className="sub-title">{cat}</h3>
            <div className="grid-slots">
              {MEUS_ITENS.filter(item => item.cat === cat).map(item => (
                <div
                  key={item.id}
                  className={`slot ${selecionado?.id === item.id ? 'selecionado' : ''}`}
                  onClick={() => setSelecionado(item)}
                >
                  <span className="item-icon">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* COLUNA 3: DETALHES */}
      <div className="coluna-detalhes">
        {selecionado ? (
          <div className="painel-info">
            <div className="detalhe-icon-large">
              <span>{selecionado.icon}</span>
            </div>
            <h2 className="item-name">{selecionado.nome}</h2>
            <h3 className="sub-title">sobre</h3>
            <p className="lore-text">{selecionado.desc}</p>
            <h3 className="sub-title">efeitos</h3>
            <p className="lore-text">{selecionado.passiva || "nenhum"}</p>
          </div>
        ) : (
          <div className="placeholder-vazio">selecione um item</div>
        )}
      </div>
    </div>
  );
}