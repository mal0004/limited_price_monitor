function aggressive(context) {
  if (!context.observedPrice) return null;
  const discount = context.demand === 1 ? 1 : 3;
  return {
    type: 'aggressive',
    recommendedPrice: Math.max(1, context.observedPrice - discount),
    reason: 'Aggressive undercut based on market competition.'
  };
}
module.exports = aggressive;
