import React, { useEffect } from "react";

const GenesisEmulator = () => {
  useEffect(() => {
    // Carregar o script do EmulatorJS
    const script = document.createElement("script");
    script.src = "/emulatorjs/emulator.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Iniciar o emulador após o script ser carregado
      
      window.EJS_player = "#game-container";
      window.EJS_biosUrl = "/emulatorjs/bios/";
      window.EJS_gameUrl = "/assets/roms/sonic3.md"; // Certifique-se de que o arquivo .md está neste caminho
      window.EJS_core = "genesis";
      window.EJS_pathtodata = "/emulatorjs/";
      window.EJS_load();
    };

    return () => {
      // Remover script e limpar o emulador
      document.body.removeChild(script);
      window.EJS_stop();
    };
  }, []);

  return <div id="game-container" style={{ width: "100%", height: "500px" }} />;
};

export default GenesisEmulator;
