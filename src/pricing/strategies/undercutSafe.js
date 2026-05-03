function undercutSafe(context) {
  if (!context.observedPrice) return null;
  return {
    type: 'undercut_safe',
    recommendedPrice: Math.max(1, context.observedPrice - 1),
    reason: 'Conservative undercut of current best public price.'
  };
}
module.exports = undercutSafe;
