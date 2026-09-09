import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {titans} from '../data/titans.js';
import {setLanguage} from '../js/i18n.js';

test('titan catalog covers 28 icons and renders six elements in both languages',async()=>{
  assert.equal(titans.length,28);
  assert.equal(new Set(titans.map(t=>t.id)).size,28);
  for(const titan of titans){
    assert.ok(fs.existsSync(titan.image));
    assert.ok(titan.description.ru && titan.description.en);
    assert.match(titan.source,/support-hwa.nexters.com/);
  }
  assert.deepEqual(titans.filter(t=>t.element==='elarite').map(t=>t.id),['alecto','orm','pallant']);
  const nav={innerHTML:'',setAttribute(){}};
  const catalog={innerHTML:''};
  const doc=new EventTarget();
  doc.documentElement={lang:'ru'};
  doc.querySelector=s=>s==='[data-titan-elements]'?nav:catalog;
  doc.querySelectorAll=()=>[];
  globalThis.document=doc;
  try{
    await import('../js/titans-page.js');
    assert.equal((catalog.innerHTML.match(/class="titan-card"/g)||[]).length,28);
    assert.equal((catalog.innerHTML.match(/class="titan-element"/g)||[]).length,6);
    assert.match(catalog.innerHTML,/Эларит/);
    assert.match(catalog.innerHTML,/Ангус/);
    setLanguage('en');
    assert.match(catalog.innerHTML,/Elarite/);
    assert.match(catalog.innerHTML,/Angus/);
    assert.doesNotMatch(catalog.innerHTML,/Ангус/);
    assert.equal((catalog.innerHTML.match(/class="titan-card"/g)||[]).length,28);
  }finally{setLanguage('ru');delete globalThis.document;}
});
