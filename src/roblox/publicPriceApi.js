async function fetchRobloxResellerData(assetId) {
  const url = `https://economy.roblox.com/v1/assets/${assetId}/resellers?limit=10`;
  const res = await fetch(url, { headers: { 'User-Agent': 'limited-price-monitor/1.0' } });
  if (!res.ok) {
    throw new Error(`Roblox API error: ${res.status}`);
  }
  return res.json();
}

module.exports = { fetchRobloxResellerData };
