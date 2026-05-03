const cache = {
  data: null,
  expiresAt: 0
};

async function fetchRolimonsItemDetails() {
  const res = await fetch('https://www.rolimons.com/itemapi/itemdetails', {
    headers: { 'User-Agent': 'limited-price-monitor/1.0' }
  });

  if (!res.ok) {
    throw new Error(`Rolimons API error: ${res.status}`);
  }

  return res.json();
}

async function getRolimonsItem(assetId, ttlMs = 300000) {
  const now = Date.now();

  if (cache.data && cache.expiresAt > now) {
    return parseItem(cache.data, assetId);
  }

  try {
    const data = await fetchRolimonsItemDetails();
    cache.data = data;
    cache.expiresAt = now + ttlMs;
    return parseItem(data, assetId);
  } catch (_err) {
    if (cache.data) {
      return parseItem(cache.data, assetId);
    }
    return null;
  }
}

function parseItem(payload, assetId) {
  const items = payload?.items || {};
  const row = items[String(assetId)];
  if (!row) return null;

  return {
    rap: row[2] ?? null,
    value: row[3] ?? null,
    demand: row[4] ?? null,
    trend: row[5] ?? null,
    projected: row[7] === 1,
    sellerCount: row[13] ?? null,
    bestPrice: row[14] ?? null
  };
}

module.exports = { fetchRolimonsItemDetails, getRolimonsItem };
