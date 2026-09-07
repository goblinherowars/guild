import test from 'node:test'; import assert from 'node:assert/strict';
import {players,knownCompositionCount} from '../data/players.js';
test('roster has exactly 30 unique members',()=>{assert.equal(players.length,30);assert.equal(new Set(players.map(p=>p.nickname)).size,30)});
test('weekly activity totals match seven day values',()=>{for(const p of players) assert.equal(p.activity.reduce((a,b)=>a+b,0),p.activityTotal,p.nickname)});
test('twelve composition screenshots are represented',()=>assert.equal(knownCompositionCount,12));
