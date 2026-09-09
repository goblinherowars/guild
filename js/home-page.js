import {players,knownCompositionCount} from '../data/players.js?v=titan-bounds-4';
const fmt=n=>new Intl.NumberFormat(document.documentElement.lang==='en'?'en-US':'ru-RU').format(n||0);
function render(){const hero=players.reduce((s,p)=>s+(p.heroPower||0),0), titan=players.reduce((s,p)=>s+(p.titanPower||0),0);
 document.querySelector('[data-stat-members]').textContent=players.length;document.querySelector('[data-stat-hero]').textContent=fmt(hero);document.querySelector('[data-stat-titan]').textContent=fmt(titan);document.querySelector('[data-stat-known]').textContent=knownCompositionCount;
}
render();document.addEventListener('languagechange',render);
