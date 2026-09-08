import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {players} from '../data/players.js';
test('guild crest and every referenced team image exists',()=>{assert.ok(fs.existsSync('assets/images/guild-crest.png'));for(const p of players){if(p.titanImage)assert.ok(fs.existsSync(p.titanImage),p.titanImage)}});
