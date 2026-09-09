import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {players} from '../data/players.js';
import {titans} from '../data/titans.js';

test('all 30 titan teams resolve to five distinct available portraits',()=>{
  assert.ok(fs.existsSync('assets/images/guild-crest.png'));
  const catalog = new Map(titans.map(t=>[t.id,t]));
  for(const p of players){
    assert.equal(p.titanTeam.length,5,p.nickname);
    assert.equal(new Set(p.titanTeam).size,5,p.nickname);
    assert.ok(!('titanImage' in p));
    for(const id of p.titanTeam){
      const titan=catalog.get(id);
      assert.ok(titan,id);
      assert.ok(fs.existsSync(titan.image),titan.image);
      assert.ok(titan.name.ru && titan.name.en);
    }
  }
  assert.deepEqual(players.find(p=>p.nickname==='eiei1313').titanTeam,['hyperion','mairi','tydus','nova','sigurd']);
  assert.deepEqual(players.find(p=>p.nickname==='LjRash').titanTeam,['sylva','eden','verdoc','angus','pallant']);
});
