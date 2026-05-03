function normalizeRobloxPrice(data) {
  const first = data?.data?.[0] || null;
  return {
    bestPrice: first ? first.price : null,
    sellerCount: Array.isArray(data?.data) ? data.data.length : null
  };
}

module.exports = { normalizeRobloxPrice };
