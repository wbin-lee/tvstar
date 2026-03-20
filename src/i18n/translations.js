const translations = {
  en: {
    siteTitle: "Character Personality Test",
    siteSubtitle: "Pick a series and discover which character you are!",
    questionOf: (c, t) => `Question ${c} of ${t}`,
    youAre: "You are...",
    restart: "Take Another Quiz",
    seriesNotFound: "Series not found.",
  },
  ko: {
    siteTitle: "캐릭터 성격 테스트",
    siteSubtitle: "시리즈를 선택하고 어떤 캐릭터인지 알아보세요!",
    questionOf: (c, t) => `${t}개 중 ${c}번째 질문`,
    youAre: "당신은...",
    restart: "다른 퀴즈 풀기",
    seriesNotFound: "시리즈를 찾을 수 없습니다.",
  },
  ja: {
    siteTitle: "キャラクター性格診断",
    siteSubtitle: "シリーズを選んで、自分がどのキャラか診断しよう！",
    questionOf: (c, t) => `${t}問中 ${c}問目`,
    youAre: "あなたは...",
    restart: "もう一度診断する",
    seriesNotFound: "シリーズが見つかりません。",
  },
  zh: {
    siteTitle: "角色性格测试",
    siteSubtitle: "选择一个系列，看看你是哪个角色！",
    questionOf: (c, t) => `第 ${c} 题，共 ${t} 题`,
    youAre: "你是...",
    restart: "再测一次",
    seriesNotFound: "未找到该系列。",
  },
  fr: {
    siteTitle: "Test de Personnalité",
    siteSubtitle: "Choisissez une série et découvrez quel personnage vous êtes !",
    questionOf: (c, t) => `Question ${c} sur ${t}`,
    youAre: "Vous êtes...",
    restart: "Refaire un quiz",
    seriesNotFound: "Série introuvable.",
  },
  es: {
    siteTitle: "Test de Personalidad",
    siteSubtitle: "¡Elige una serie y descubre qué personaje eres!",
    questionOf: (c, t) => `Pregunta ${c} de ${t}`,
    youAre: "Tú eres...",
    restart: "Hacer otro quiz",
    seriesNotFound: "Serie no encontrada.",
  },
  de: {
    siteTitle: "Charakter-Persönlichkeitstest",
    siteSubtitle: "Wähle eine Serie und finde heraus, welcher Charakter du bist!",
    questionOf: (c, t) => `Frage ${c} von ${t}`,
    youAre: "Du bist...",
    restart: "Neues Quiz starten",
    seriesNotFound: "Serie nicht gefunden.",
  },
};

export const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default translations;
