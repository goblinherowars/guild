export const translations={
 ru:{
 guideLoading:"Загрузка инструкции…",guideLoadError:"Не удалось загрузить инструкцию. Обновите страницу или откройте файл:",guideOpen:"Открыть инструкцию",
 dungeonGuideTitle:"Инструкция по прохождению Подземелья Титанов",
brand:'Гоблины',home:'Главная',players:'Игроки',dungeon:'Подземелье',heroes:'Герои',titans:'Титаны',guildVs:'Схватка',about:'О гильдии',
 motto:'Маленькие. Шумные. Опасные.',heroTitle:'Гильдия Гоблины',heroText:'Боевые составы, прогресс и гайды для Hero Wars: Alliance.',members:'Игроков',heroPower:'Сила героев',titanPower:'Сила титанов',activity:'Активность',weekly:'за 7 дней',knownTeams:'Составов внесено',openPlayers:'Открыть список игроков',
 rosterTitle:'Игроки гильдии',search:'Поиск игрока…',sort:'Сортировка',sortActivity:'Активность',sortTotal:'Общая сила',sortHero:'Сила героев',sortTitan:'Сила титанов',sortName:'Ник',list:'Список',cards:'Карточки',heroTeam:'Команда героев',titanTeam:'Команда титанов',noData:'Состав пока не добавлен',totalPower:'Общая сила',rank:'Место',
 coming:'Раздел готовится',dungeonText:'Лечение титанов, выбор комнат, приоритеты прокачки и советы для долгого прохождения.',heroesText:'Здесь будут советы по изменению команд героев и приоритеты прокачки.',titansText:'Здесь будут советы по прокачке титанов, обликов, артефактов и составов.',guildVsText:'Здесь будет инструкция по правилам события Схватка (Guild VS), стратегия и рекомендации для гильдии.',aboutText:'Внутренний портал гильдии «Гоблины». Данные игроков перенесены из предоставленных скриншотов и будут постепенно обновляться.',backPlayers:'К игрокам',footer:'Гоблины · Вместе к победам',quick:'Разделы портала',topPlayers:'Известные боевые составы',viewAll:'Все игроки'},
 en:{
 guideLoading:"Loading guide…",guideLoadError:"Could not load the guide. Refresh the page or open the file:",guideOpen:"Open guide",
 dungeonGuideTitle:"Titan Dungeon Guide",
brand:'Goblins',home:'Home',players:'Players',dungeon:'Dungeon',heroes:'Heroes',titans:'Titans',guildVs:'Guild VS',about:'About',
 motto:'Small. Loud. Dangerous.',heroTitle:'Goblins Guild',heroText:'War teams, progress and guides for Hero Wars: Alliance.',members:'Players',heroPower:'Hero power',titanPower:'Titan power',activity:'Activity',weekly:'7 days',knownTeams:'Teams added',openPlayers:'Open player roster',
 rosterTitle:'Guild Players',search:'Search player…',sort:'Sort by',sortActivity:'Activity',sortTotal:'Total power',sortHero:'Hero power',sortTitan:'Titan power',sortName:'Nickname',list:'List',cards:'Cards',heroTeam:'Hero team',titanTeam:'Titan team',noData:'Composition not added yet',totalPower:'Total power',rank:'Rank',
 coming:'Coming soon',dungeonText:'Titan healing, room selection, upgrade priorities, and tips for longer Dungeon runs.',heroesText:'This page will contain hero-team change suggestions and upgrade priorities.',titansText:'This page will contain titan, skin, artifact and team upgrade priorities.',guildVsText:'This page will contain Guild VS event rules, guild strategy and practical recommendations.',aboutText:'Internal portal for the Goblins guild. Player data was transcribed from the supplied screenshots and will be updated over time.',backPlayers:'Back to players',footer:'Goblins · Together to victory',quick:'Portal sections',topPlayers:'Known war compositions',viewAll:'All players'}
};
const storage=typeof localStorage==='undefined'?{getItem:()=>null,setItem:()=>{}}:localStorage;
let lang=storage.getItem('goblins-lang')||'ru';
export const getLanguage=()=>lang;
export const t=(key)=>translations[lang]?.[key]??key;
export function setLanguage(next){lang=next==='en'?'en':'ru';storage.setItem('goblins-lang',lang);document.documentElement.lang=lang;document.dispatchEvent(new CustomEvent('languagechange',{detail:{lang}}));applyTranslations();}
export function applyTranslations(){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.textContent=t(key)});document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));}
