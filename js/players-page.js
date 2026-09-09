import {titanTeamMarkup} from './titan-team.js?v=titan-bounds-4';
import {players} from '../data/players.js?v=titan-bounds-4';import {t} from './i18n.js';
import {heroTeamMarkup} from './hero-team.js?v=titan-bounds-4';
let state={q:'',sort:'total',view:'list'};const fmt=n=>n==null?'—':new Intl.NumberFormat(document.documentElement.lang==='en'?'en-US':'ru-RU').format(n);
function team(p,type){
 const ids=type==='hero'?p.heroTeam:p.titanTeam;
 const markup=ids?.length?(type==='hero'?heroTeamMarkup(ids):titanTeamMarkup(ids)):`<div class="no-data">${t('noData')}</div>`;
 return `<div class="${type}-team"><div class="team-label">${t(type==='hero'?'heroTeam':'titanTeam')}</div>${markup}</div>`;
}
function render(){let arr=players.filter(p=>p.nickname.toLocaleLowerCase().includes(state.q.toLocaleLowerCase()));const sorts={total:(a,b)=>((b.heroPower||0)+(b.titanPower||0))-((a.heroPower||0)+(a.titanPower||0)),hero:(a,b)=>(b.heroPower||0)-(a.heroPower||0),titan:(a,b)=>(b.titanPower||0)-(a.titanPower||0),name:(a,b)=>a.nickname.localeCompare(b.nickname)};arr=[...arr].sort(sorts[state.sort]);const root=document.querySelector('[data-roster]');root.className=`roster ${state.view==='cards'?'cards':''}`;root.innerHTML=arr.map(p=>`<article class="player-card"><div><div class="nick">${p.nickname}</div></div>${team(p,'hero')}<div class="power"><span>${t('heroPower')}</span><strong>${fmt(p.heroPower)}</strong></div>${team(p,'titan')}<div class="power titan-power"><span>${t('titanPower')}</span><strong>${fmt(p.titanPower)}</strong></div></article>`).join('');}
document.querySelector('[data-search]').addEventListener('input',e=>{state.q=e.target.value;render()});document.querySelector('[data-sort]').addEventListener('change',e=>{state.sort=e.target.value;render()});document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{state.view=b.dataset.view;document.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('active',x===b));render()}));render();document.addEventListener('languagechange',render);
