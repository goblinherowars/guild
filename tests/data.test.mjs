import test from 'node:test'; import assert from 'node:assert/strict';
import {players,knownCompositionCount} from '../data/players.js';
import {heroes} from '../data/heroes.js';
import {heroTeamMarkup} from '../js/hero-team.js';
test('roster has exactly 30 unique members',()=>{assert.equal(players.length,30);assert.equal(new Set(players.map(p=>p.nickname)).size,30)});
test('weekly activity totals match seven day values',()=>{for(const p of players) assert.equal(p.activity.reduce((a,b)=>a+b,0),p.activityTotal,p.nickname)});
test('all thirty confirmed hero compositions are counted independently of titan images',()=>assert.equal(knownCompositionCount,30));
test('every known hero team uses five catalog icons, never a team screenshot',()=>{
  const known=players.filter(p=>p.heroTeam?.length);
  assert.equal(known.length,30);
  for(const player of known){
    assert.equal(player.heroTeam.length,5,player.nickname);
    assert.equal(new Set(player.heroTeam).size,5,player.nickname);
    assert.equal(player.heroImage,undefined);
    const markup=heroTeamMarkup(player.heroTeam);
    assert.equal((markup.match(/assets\/heroes\//g)||[]).length,5);
    assert.ok(!markup.includes('assets/teams/'));
  }
});
test('updated player teams match supplied screenshot and resolve to catalog portraits',()=>{
  const expected = {
    PhysicalOfficer: {ids:['iris','morrigan','tempus','drayne','electra-von-grave'],heroPower:583283,titanPower:183714},
    Koly: {ids:['dorian','iris','tempus','byrna','corvus'],heroPower:533562,titanPower:180190}
  };
  for(const [nickname, team] of Object.entries(expected)){
    const player=players.find(p=>p.nickname===nickname);
    assert.deepEqual(player.heroTeam,team.ids);
    assert.equal(player.heroPower,team.heroPower);
    assert.equal(player.titanPower,team.titanPower);
    assert.equal(player.heroImage,undefined);
    const markup=heroTeamMarkup(player.heroTeam);
    assert.equal((markup.match(/<img /g)||[]).length,5);
    let previous=-1;
    for(const id of team.ids){
      const hero=heroes.find(h=>h.id===id);
      assert.ok(hero,id);
      const position=markup.indexOf(hero.image);
      assert.ok(position>previous);
      assert.ok(markup.includes(hero.name.ru));
      previous=position;
    }
  }
});
