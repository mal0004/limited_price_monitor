const undercutSafe = require('./strategies/undercutSafe');
const hold = require('./strategies/hold');
const aggressive = require('./strategies/aggressive');

function makeFingerprint(rec) {
  return `${rec.type}:${rec.recommendedPrice}:${rec.reason}`;
}

function getRecommendation(strategy, context) {
  const map = { undercut_safe: undercutSafe, hold, aggressive };
  const fn = map[strategy] || hold;
  const recommendation = fn(context);
  if (!recommendation) return null;
  recommendation.fingerprint = makeFingerprint(recommendation);
  return recommendation;
}

module.exports = { getRecommendation };
