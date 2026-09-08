import {players,knownCompositionCount} from '../data/players.js?v=hero-icons-5';import {t} from './i18n.js';
import {heroTeamMarkup} from './hero-team.js?v=hero-icons-5';
const fmt=n=>new Intl.NumberFormat(document.documentElement.lang==='en'?'en-US':'ru-RU').format(n||0);
function render(){const hero=players.reduce((s,p)=>s+(p.heroPower||0),0), titan=players.reduce((s,p)=>s+(p.titanPower||0),0),activity=players.reduce((s,p)=>s+p.activityTotal,0);
 document.querySelector('[data-stat-members]').textContent=players.length;document.querySelector('[data-stat-hero]').textContent=fmt(hero);document.querySelector('[data-stat-titan]').textContent=fmt(titan);document.querySelector('[data-stat-known]').textContent=knownCompositionCount;
 const root=document.querySelector('[data-known]');if(root) root.innerHTML=players.filter(p=>p.heroTeam?.length).sort((a,b)=>(b.heroPower+b.titanPower)-(a.heroPower+a.titanPower)).slice(0,6).map(p=>`<a class="mini-player" href="players.html"><b>${p.nickname}</b>${heroTeamMarkup(p.heroTeam)}<div class="meta">${t('totalPower')}: ${fmt((p.heroPower||0)+(p.titanPower||0))}</div></a>`).join('');
}
render();document.addEventListener('languagechange',render);
