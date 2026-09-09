import {titans} from '../data/titans.js?v=titan-catalog-1';
import {getLanguage, t} from './i18n.js';

const elements = {
  fire: {ru:'Огонь',en:'Fire'},
  water: {ru:'Вода',en:'Water'},
  earth: {ru:'Земля',en:'Earth'},
  light: {ru:'Свет',en:'Light'},
  dark: {ru:'Тьма',en:'Darkness'},
  elarite: {ru:'Эларит',en:'Elarite'}
};
function render() {
  const language = getLanguage() === 'en' ? 'en' : 'ru';
  const nav = document.querySelector('[data-titan-elements]');
  nav.setAttribute('aria-label', language === 'ru' ? 'Стихии' : 'Elements');
  nav.innerHTML = Object.entries(elements).map(([id,name]) => `<a href="#${id}">${name[language]}</a>`).join('');
  document.querySelector('[data-titan-catalog]').innerHTML = Object.entries(elements).map(([element,name]) => {
    const group = titans.filter(titan => titan.element === element);
    return `<section class="titan-element" id="${element}"><h2>${name[language]} <small>${group.length}</small></h2><div class="titan-catalog">${group.map(titan => `<article class="titan-card">
      <img src="${titan.image}" alt="${titan.name[language]}" width="112" height="112" loading="lazy" decoding="async">
      <div><h3>${titan.name[language]}</h3><p>${titan.description[language]}</p><a class="hero-source" href="${titan.source}">${language === 'ru' ? 'Подробнее о навыках' : 'Skill details'}</a></div>
    </article>`).join('')}</div></section>`;
  }).join('');
  document.title = `Goblins · ${t('titans')}`;
}
document.addEventListener('languagechange',render);
render();
