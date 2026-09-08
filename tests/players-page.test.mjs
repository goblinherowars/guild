import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {setLanguage} from '../js/i18n.js';

test('Players page entry renders only confirmed hero icons in list and card modes', async () => {
  class Element extends EventTarget {
    innerHTML = '';
    dataset = {};
    classList = {toggle() {}};
  }
  const roster = new Element();
  const search = new Element();
  const sort = new Element();
  const views = ['list', 'cards'].map(view => Object.assign(new Element(), {dataset:{view}}));
  const document = new EventTarget();
  document.documentElement = {lang:'ru'};
  document.querySelector = selector => ({'[data-roster]':roster,'[data-search]':search,'[data-sort]':sort})[selector];
  document.querySelectorAll = selector => selector === '[data-view]' ? views : [];
  globalThis.document = document;
  try {
    const html = fs.readFileSync('players.html','utf8');
    const entry = html.match(/src="(js\/players-page\.js[^" ]*)"/)[1];
    await import(`../${entry}`);
    assert.equal((roster.innerHTML.match(/class="player-card"/g)||[]).length,30);
    assert.equal((roster.innerHTML.match(/assets\/heroes\//g)||[]).length,150);
    assert.equal((roster.innerHTML.match(/class="hero-team"><div class="team-label">[^<]*<\/div><div class="no-data"/g)||[]).length,0);
    assert.doesNotMatch(roster.innerHTML, /-heroes\.webp/);
    assert.match(roster.innerHTML,/assets\/heroes\/Byrna.png/);
    views[1].dispatchEvent(new Event('click'));
    assert.equal(roster.className,'roster cards');
    assert.equal((roster.innerHTML.match(/assets\/heroes\//g)||[]).length,150);
    setLanguage('en');
    assert.match(roster.innerHTML,/alt="Byrna"/);
    search.value = 'Koly';
    search.dispatchEvent(new Event('input'));
    assert.equal((roster.innerHTML.match(/class="player-card"/g)||[]).length,1);
    assert.equal((roster.innerHTML.match(/assets\/heroes\//g)||[]).length,5);
    setLanguage('ru');
  } finally {
    delete globalThis.document;
  }
});
