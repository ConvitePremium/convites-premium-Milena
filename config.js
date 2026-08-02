/* ==========================================================================
   CONFIG.JS  —  ÚNICO ARQUIVO QUE VOCÊ EDITA PARA CRIAR UM NOVO CONVITE
   ==========================================================================

   COMO USAR:
   1. Troque apenas os arquivos usados na pasta /assets (mantendo os mesmos nomes).
   2. Edite os valores abaixo (nome, WhatsApp, mapa, cores, etc.).
   3. Suba no GitHub. Pronto — não precisa mexer no index.html.

   As cores no campo "tema" podem ser nome ('pink'), hexadecimal ('#f6c1cd')
   ou rgb('rgb(246,193,205)'). Use o formato que preferir.

   DICA: para reposicionar os botões da tela principal, abra o convite no
   navegador com ?editor=1 no final do link (ex.: .../index.html?editor=1),
   arraste os botões e clique em "Copiar código". Cole o resultado no campo
   "hotspots" aqui embaixo.
   ========================================================================== */

window.CONFIG = {

  // ENGINE V4 MODULAR

  // ----- IDENTIDADE DO CONVITE -------------------------------------------
  // Nome do aniversariante. Aparece no título da aba do navegador e nos
  // textos automáticos do convite.
  nome: "Milena",

  // ----- WHATSAPP (CONFIRMAR PRESENÇA) -----------------------------------
  // numero: DDI + DDD + número, SÓ DÍGITOS (sem +, espaço, parênteses ou traço).
  //         Ex.: 55 (Brasil) + 31 (DDD) + 985657116 -> "5531985657116"
  // mensagem: texto que já vem pré-preenchido quando a pessoa abre o WhatsApp.
  whatsapp: {
    numero: "5511968658529",
    mensagem: "Olá! Confirmo minha presença no aniversário de 15 anos da Milena."
  },

  // ----- LOCALIZAÇÃO (BOTÃO MAPA) ----------------------------------------
  // Link completo do Google Maps. Abra o local no Maps, clique em "Compartilar"
  // -> "Copiar link" e cole aqui (mantenha as aspas).
  mapa: "https://maps.app.goo.gl/WKsVP6mXFh3DHTYB6",

  // ----- DUAS LOCALIZAÇÕES (OPCIONAL) ------------------------------------
  // Preencha os dois links abaixo para o botão Localização abrir um menu
  // com as opções Missa e Festa. Se não quiser usar duas localizações,
  // apague este bloco ou deixe um dos links vazio; a Engine usará "mapa" acima.
  localizacoes: {
    missa: {
      texto: "Missa",
      link: "https://www.google.com/maps?q=-21.2345217,-44.9913317&z=17&hl=pt-BR"
    },
    festa: {
      texto: "Festa",
      link: "https://maps.app.goo.gl/WKsVP6mXFh3DHTYB6"
    }
  },

  // ----- QUAIS TELAS APARECEM --------------------------------------------
  // video:     true  -> toca o vídeo (assets/video.mp4) depois da abertura.
  //            false  -> pula direto da abertura para a tela principal.
  // Cada opção pode ser true ou false.
  // Quando estiver false, o hotspot, a tela e a opção do editor são removidos.
  telas: {
    video: true,
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: true,
    manual: true,
    contagem: false
  },

  // ----- TEXTOS DOS BOTÕES -----------------------------------------------
  // Rótulos que aparecem nos botões. Edite livremente.
  textos: {
    abrir: "Toque para abrir",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },

  // ----- TEMA / CORES ----------------------------------------------------
  // cor:                 cor principal (barra do navegador mobile, acentos).
  // corBotaoVoltar:      fundo do botão "Voltar" (tela de presentes).
  // corTextoBotaoVoltar: texto do botão "Voltar".
  tema: {
    cor: "#f6c1cd",
    corBotaoVoltar: "rgba(255,255,255,.76)",
    corTextoBotaoVoltar: "#6b3a21"
  },


  // ----- BOTÕES DE VOLTAR -------------------------------------------------
  // mostrarTexto: true mostra “Voltar”; false deixa apenas a área clicável.
  // A posição pode ser alterada no editor ?editor=1.
  botoesVoltar: {
    presentes: { mostrarTexto:false, posicao: {"left":30.690409095447283,"top":90.91313045553281,"width":38.811495357428115,"height":5.6547699035228405} }
  },

  // ----- POSIÇÃO DOS BOTÕES NA TELA PRINCIPAL ----------------------------
  // Valores em PORCENTAGEM da imagem (0 a 100). Para evitar mexer à mão,
  // use o editor (?editor=1) e cole o resultado aqui.
  //   left/top: canto superior esquerdo do botão
  //   width/height: tamanho do botão
    hotspots: {
        confirm: { left:13.385800780551847, top:59.66051059081367, width:19.64355312204473, height:11.449252034014982 },
        map: { left:40.491117772523374, top:59.54541978412351, width:19.292465283626143, height:11.399863780795407 },
        gift: { left:66.8695855250401, top:59.53459410174959, width:19.567092651757186, height:11.52034966267883 },
        manual: { left:13.385800780551847, top:59.66051059081367, width:19.64355312204473, height:11.449252034014982 },
        dresscode: { left:40.491117772523374, top:59.54541978412351, width:19.292465283626143, height:11.399863780795407 }
  },

  // ----- CONTAGEM REGRESSIVA ---------------------------------------------
  // Formato da data: ANO-MÊS-DIAT HORA:MINUTO:SEGUNDO (sem espaço antes do T).
  // Exemplo: "2026-10-03T16:00:00"
  // A posição pode ser ajustada no editor escolhendo "Contador (na tela)".
  contagem: {
    dataEvento: "2026-10-03T16:00:00",
    textoFinal: "A festa começou!",
    corNumero: "#ffffff",
    corLegenda: "#ffffff",
    posicao: {
      left: 8,
      top: 48,
      width: 84,
      height: 16
    }
  },

  // ----- MÚSICA DE FUNDO -------------------------------------------------
  // volume: de 0 (mudo) a 1 (máximo). O padrão 0.30 é agradável e não
  //         briga com o áudio do vídeo.
  musica: {
    volume: 0.30
  }
};
