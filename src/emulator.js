import React, { useState, useEffect } from 'react';
import './emulator.css'; // Importando o arquivo CSS

const App = () => {
  const [rom, setRom] = useState(null);  // Estado para armazenar a ROM carregada
  const [loading, setLoading] = useState(false);
  const [gameLoaded, setGameLoaded] = useState(false);
  const [backgroundGif, setBackgroundGif] = useState(''); // Estado para controlar o fundo
  const [introPlayed, setIntroPlayed] = useState(false); // Estado para controlar se a intro foi exibida
  const [state, setState] = useState(null); // Para salvar o estado do jogo

  useEffect(() => {
    // Adiciona um listener para a tecla Enter para pular a intro
    const handleSkipIntro = (e) => {
      if (e.key === 'Enter' && !introPlayed) {
        setIntroPlayed(true);
      }
    };

    window.addEventListener('keydown', handleSkipIntro);
    return () => {
      window.removeEventListener('keydown', handleSkipIntro);
    };
  }, [introPlayed]);

  // Função para carregar o jogo
  const loadGame = async (romUrl) => {
    try {
      setLoading(true);
      setGameLoaded(true); // Marca que o jogo foi carregado

      const { Nostalgist } = await import('https://esm.run/nostalgist');

      // Carregar o jogo com a URL fornecida
      if (romUrl.endsWith('.md')) {
        await Nostalgist.megadrive(romUrl);
      } else if (romUrl.endsWith('.gba')) {
        await Nostalgist.gba(romUrl);
      } else if (romUrl.endsWith('.smc')) {
        await Nostalgist.snes(romUrl);
      }

      console.log('Jogo carregado com sucesso!');
    } catch (error) {
      console.error('Erro ao carregar o jogo:', error);
    } finally {
      setLoading(false);
    }
  };


  const saveState = async () => {
    try {
      if (!rom) {
        console.error('Nenhuma ROM carregada para salvar o estado.');
        return;
      }
  
      const { Nostalgist } = await import('https://esm.run/nostalgist');
      
      // Passa a ROM carregada, ao invés de usar 'flappybird.nes'
      const nostalgist = await Nostalgist.nes({ rom }); 
      const { state } = await nostalgist.saveState();
      setState(state);  // Atualiza o estado com o estado salvo
      console.log('Estado do jogo salvo.');
    } catch (error) {
      console.error('Erro ao salvar estado:', error);
    }
  };

  const loadState = async () => {
    try {
      if (!state) {
        console.error('Nenhum estado salvo para carregar.');
        return;
      }
      if (!rom) {
        console.error('Nenhuma ROM carregada para carregar o estado.');
        return;
      }
  
      const { Nostalgist } = await import('https://esm.run/nostalgist');
      
      // Passa a ROM carregada, ao invés de usar 'flappybird.nes'
      const nostalgist = await Nostalgist.nes({ rom }); 
      await nostalgist.loadState(state);
      console.log('Estado do jogo carregado.');
    } catch (error) {
      console.error('Erro ao carregar estado:', error);
    }
  };

  const selectRom = async () => {
    try {
      // Verifica se a API 'showOpenFilePicker' é suportada
      if (!window.showOpenFilePicker) {
        alert("A API 'showOpenFilePicker' não é suportada no seu navegador.");
        return;
      }
  
      // Abre o seletor de arquivos e obtém a ROM
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
  
      // Atualiza o estado da ROM
      setRom(file);  // Guarda a ROM carregada no estado
  
      // Importa o Nostalgist dinamicamente
      const { Nostalgist } = await import('https://esm.run/nostalgist');
      
      // Carrega a ROM dependendo da extensão do arquivo
      const romUrl = file.name;
  
      if (romUrl.endsWith('.nes')) {
        await Nostalgist.nes({ rom: file });
      } else if (romUrl.endsWith('.md')) {
        await Nostalgist.megadrive({ rom: file });
      } else if (romUrl.endsWith('.gba')) {
        await Nostalgist.gba({ rom: file });
      } else if (romUrl.endsWith('.smc')) {
        await Nostalgist.snes({ rom: file });
      } else {
        throw new Error("Formato de ROM não suportado");
      }
  
      console.log('ROM carregada com sucesso!');
  
      // Atualiza o estado para indicar que o jogo foi carregado
      setGameLoaded(true);
  
    } catch (error) {
      console.error('Erro ao carregar ROM:', error);
    }
  };  

  const handleBackButton = () => { // Aqui está definida a função associada ao erro 'handleBackButton is not defined'
    window.location.reload(); // Linha do erro 317:28
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
  
  if (!introPlayed) {
    return (
      <div className="intro-container">
        <video 
          src="/intro.mp4" 
          className="intro-video" 
          autoPlay 
          muted 
          onEnded={() => setIntroPlayed(true)} // Quando o vídeo terminar, a intro será considerada concluída
        />
        <p className="skip-intro">Pressione Enter para pular</p>
      </div>
    );
  }

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
      <div className="title-container2">
        <div className="title-background2"></div>
        <img src="/title2.png" alt="Título do Jogo" className="title-image2" />
        <button onClick={selectRom} className="rom-button">
            <img src="/select.png" alt="Selecionar ROM" className="rom-image" />
          </button>
      </div>


      {loading && <p className="loading">Carregando o jogo...</p>}


      {/* Seleção de jogos */}
      {!gameLoaded && (
        <div className="games-container">
          {/* Sonic 3 */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/Sonic3.md')}
            onMouseEnter={() => handleMouseEnter('/sonic3.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/sonic3.jpg" alt="Sonic 3" className="game-image" />
            <div className="game-title">Sonic 3 (Megadrive)</div>
          </div>

          {/* Sonic Advance 2 */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/sonicadvance2.gba')}
            onMouseEnter={() => handleMouseEnter('/sonicadvance2.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/sonicadvance2.png" alt="Sonic Advance 2" className="game-image" />
            <div className="game-title">Sonic Advance 2 (GBA)</div>
          </div>

          {/* Pokémon FireRed */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/firered.gba')}
            onMouseEnter={() => handleMouseEnter('/firered.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/firered.jpeg" alt="Pokémon FireRed" className="game-image" />
            <div className="game-title">Pokémon FireRed (GBA)</div>
          </div>

          {/* Street Fighter Alpha 3 */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/StreetFA2.gba')}
            onMouseEnter={() => handleMouseEnter('/street.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/streetfighter3.jpg" alt="Street Fighter Alpha 3" className="game-image" />
            <div className="game-title">Street Fighter Alpha 3 (GBA)</div>
          </div>

          {/* Castlevania: Bloodlines */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/CastlevaniaBlood.md')}
            onMouseEnter={() => handleMouseEnter('/castlevania.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/castlevania.jpg" alt="Castlevania: Bloodlines" className="game-image" />
            <div className="game-title">Castlevania: Bloodlines (Megadrive)</div>
          </div>

          {/* Kirby Nightmare in Dreamland */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/kirbynightmareindreamland.gba')}
            onMouseEnter={() => handleMouseEnter('/kirbynightmareindreamland.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/kirbynightmareindreamland.jpeg" alt="Kirby Nightmare in Dreamland" className="game-image" />
            <div className="game-title">Kirby: Nightmare in Dreamland (GBA)</div>
          </div>

          {/* Legend of Zelda: Minish Cap */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/legendzeldaminishcap.gba')}
            onMouseEnter={() => handleMouseEnter('/legendzeldaminishcap.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/legendzeldaminishcap.jpeg" alt="Legend of Zelda: Minish Cap" className="game-image" />
            <div className="game-title">Legend of Zelda: Minish Cap (GBA)</div>
          </div>

          {/* Mortal Kombat 3 */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/mortalkombat3.md')}
            onMouseEnter={() => handleMouseEnter('/mortalkombat3.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/mortalkombat3.jpeg" alt="Mortal Kombat 3" className="game-image" />
            <div className="game-title">Mortal Kombat 3 (Megadrive)</div>
          </div>

          {/* Pokémon Emerald */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/pokemonemerald.gba')}
            onMouseEnter={() => handleMouseEnter('/pokemonemerald.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/pokemonemerald.jpeg" alt="Pokémon Emerald" className="game-image" />
            <div className="game-title">Pokémon Emerald (GBA)</div>
          </div>

          {/* Sonic 3D Blast */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/sonic3dblast.md')}
            onMouseEnter={() => handleMouseEnter('/sonic3dblast.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/sonic3dblast.jpeg" alt="Sonic 3D Blast" className="game-image" />
            <div className="game-title">Sonic 3D Blast (Megadrive)</div>
          </div>

          {/* Super Mario Advance 2: Super Mario World */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/supermarioadvance2supermarioworld.gba')}
            onMouseEnter={() => handleMouseEnter('/supermarioadvance2supermarioworld.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/supermarioadvance2supermarioworld.jpeg" alt="Super Mario Advance 2" className="game-image" />
            <div className="game-title">Super Mario Advance 2: Super Mario World (GBA)</div>
          </div>

          {/* Mega Man X */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/megamanx.smc')}
            onMouseEnter={() => handleMouseEnter('/megamanx.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/megamanx.png" alt="Mega Man X" className="game-image" />
            <div className="game-title">Mega Man X (Super Nintendo)</div>
          </div>

          {/* Final Fantasy Tactics Advance */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/finalfantasytacticsadvance.gba')}
            onMouseEnter={() => handleMouseEnter('/finalfantasytacticsadvance.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/finalfantasytacticsadvance.jpeg" alt="Final Fantasy Tactics Advance" className="game-image" />
            <div className="game-title">Final Fantasy Tactics Advance (GBA)</div>
          </div>

          {/* Metroid Fusion */}
          <div 
            className="game-card" 
            onClick={() => handleButtonClick('https://raw.githubusercontent.com/joelysom/git-test/main/assets/roms/metroidfusion.gba')}
            onMouseEnter={() => handleMouseEnter('/metroidfusion.gif')}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/metroidfusion.jpg" alt="Metroid Fusion" className="game-image" />
            <div className="game-title">Metroid Fusion (GBA)</div>
          </div>

        </div>
      )}

      {gameLoaded && (
        <div className="game-controls">
          <button onClick={handleBackButton} className="back-button">
            <img src="/back.png" alt="Voltar" className="back-image" />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
