import {titans} from '../data/titans.js?v=titan-bounds-4';
import {getLanguage, t} from './i18n.js';

const byId = new Map(titans.map(titan => [titan.id, titan]));
const escape = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function titanTeamMarkup(ids) {
  const language = getLanguage() === 'en' ? 'en' : 'ru';
  return `<div class="titan-portraits" role="group" aria-label="${escape(t('titanTeam'))}">${ids.map(id => {
    const titan = byId.get(id);
    const name = escape(titan.name[language]);
    const b = titan.portraitBounds;
    const viewport = `aspect-ratio:${b.width}/${b.height}`;
    const crop = `left:${-100*b.x/b.width}%;top:${-100*b.y/b.height}%;width:${100*b.sourceWidth/b.width}%;height:${100*b.sourceHeight/b.height}%`;
    return `<span class="titan-portrait" style="${viewport}"><img style="${crop}" src="${titan.image}?v=titan-icons-1" alt="${name}" title="${name}" width="64" height="64" loading="lazy" decoding="async"></span>`;
  }).join('')}</div>`;
}
