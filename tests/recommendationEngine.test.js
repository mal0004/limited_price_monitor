const test = require('node:test');
const assert = require('node:assert');
const { getRecommendation } = require('../src/pricing/recommendationEngine');

test('undercut safe should recommend one less than observed', () => {
  const rec = getRecommendation('undercut_safe', { observedPrice: 100 });
  assert.equal(rec.recommendedPrice, 99);
});
