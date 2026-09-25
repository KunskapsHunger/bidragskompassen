'use strict';
const core = require('../js/core.js');

let seq = 0;
/** Build a sanitised grant with sensible defaults; overrides win. */
function grant(overrides) {
  seq += 1;
  return core.sanitizeGrant(Object.assign({
    id: 'g' + seq,
    namn: 'Statsbidrag nummer ' + seq,
    kortnamn: 'Bidrag ' + seq,
    myndighet: 'Skolverket',
    sammanfattning: '',
    omraden: [],
    skolformer: ['grundskola'],
    sokande: { fristaende: 'ja', kommun: 'ja', region: 'nej', stat: 'nej', ovriga: 'nej' },
    typ: 'ansokan',
    perioder: [],
    nyckelord: []
  }, overrides));
}

module.exports = { grant };
