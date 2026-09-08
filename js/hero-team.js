import {heroes} from '../data/heroes.js';
import {getLanguage, t} from './i18n.js';

const byId = new Map(heroes.map(hero => [hero.id, hero]));
const escape = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function heroTeamMarkup(ids) {
  const language = getLanguage() === 'en' ? 'en' : 'ru';
  return `<div class="hero-portraits" role="group" aria-label="${escape(t('heroTeam'))}">${ids.map(id => {
    const hero = byId.get(id);
    const name = escape(hero.name[language]);
    return `<img src="${hero.image}" alt="${name}" title="${name}" width="64" height="64" loading="lazy" decoding="async">`;
  }).join('')}</div>`;
}
