function hold(context) {
  return {
    type: 'hold',
    recommendedPrice: context.observedPrice,
    reason: 'No strong move detected. Hold your price.'
  };
}
module.exports = hold;
