import React, { useState } from 'react';
import './App.css'; // Importando o arquivo CSS

const App = () => {
  const [loading, setLoading] = useState(false);
  const [gameLoaded, setGameLoaded] = useState(false);
  const [backgroundGif, setBackgroundGif] = useState(''); // Estado para controlar o fundo

  // Função para carregar o jogo
  const loadGame = async (romUrl) => {
    try {
      setLoading(true);
      setGameLoaded(true);  // Marca que o jogo foi carregado

      const { Nostalgist } = await import('https://esm.run/nostalgist');

      // Carregar o jogo com a URL fornecida
      if (romUrl.endsWith('.md')) {
        await Nostalgist.megadrive(romUrl);
      } else if (romUrl.endsWith('.gba')) {
        await Nostalgist.gba(romUrl);
      }

      console.log('Jogo carregado com sucesso!');
    } catch (error) {
      console.error('Erro ao carregar o jogo:', error);
    } finally {
      setLoading(false);
    }
  };

  // Função para quando um botão for clicado
  const handleButtonClick = (romUrl) => {
    loadGame(romUrl);
  };

  // Funções para mudar o fundo ao passar o mouse sobre os cards
  const handleMouseEnter = (gif) => {
    setBackgroundGif(gif); // Muda o fundo para o GIF correspondente
  };

  const handleMouseLeave = () => {
    setBackgroundGif(''); // Restaura o fundo original
  };

  return (
    <div className="app-container">
      {/* Novo contêiner para o fundo com a classe de blur */}
      <div 
        className={`background-container ${backgroundGif ? 'blur' : ''}`} 
        style={{ 
          backgroundImage: `url(${backgroundGif || '/background.png'})`, // Exibe background.png por padrão
          backgroundSize: 'cover', // Garante que a imagem cubra toda a tela
          backgroundPosition: 'center', // Alinha o fundo ao centro
        }} 
      />

      {/* Container para o título com a faixa preta */}
      <div className="title-container">
        <div className="title-background"></div>
        <img src="/title.png" alt="Título do Jogo" className="title-image" />
      </div>

      {loading && <p className="loading">Carregando o jogo...</p>}

      {/* Exibe o botão de voltar se o jogo estiver carregado */}
      {gameLoaded && (
        <button 
          onClick={() => window.location.reload()} 
          className="back-button"
        >
          <img src="/back.png" alt="Back" className="back-image" />
        </button>
      )}

      {/* Seleção de jogos */}
      {!gameLoaded && (
        <div className="games-container">
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/Sonic3.md')}
            onMouseEnter={() => handleMouseEnter('/sonic3.gif')} // Altera o fundo para o GIF
            onMouseLeave={handleMouseLeave} // Restaura o fundo original
          >
            <img src="/sonic3.jpg" alt="Sonic 3" className="game-image" />
            <div className="game-title">Sonic 3 (Megadrive)</div>
          </div>

          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/sonicadvance2.gba')}
            onMouseEnter={() => handleMouseEnter('/sonicadvance2.gif')} // Altera o fundo para o GIF
            onMouseLeave={handleMouseLeave} // Restaura o fundo original
          >
            <img src="/sonicadvance2.png" alt="Sonic Advance 2" className="game-image" />
            <div className="game-title">Sonic Advance 2 (GBA)</div>
          </div>

          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/firered.gba')}
            onMouseEnter={() => handleMouseEnter('/firered.gif')} // Altera o fundo para o GIF
            onMouseLeave={handleMouseLeave} // Restaura o fundo original
          >
            <img src="/firered.jpeg" alt="Pokémon FireRed" className="game-image" />
            <div className="game-title">Pokémon FireRed (GBA)</div>
          </div>
        </div>
      )}

      {/* Exibe o jogo somente se estiver carregado */}
      {gameLoaded && (
        <div className="game-running">
          <h3>O jogo está rodando...</h3>
        </div>
      )}
    </div>
  );
};

export default App;