const { fetchRobloxResellerData } = require('../roblox/publicPriceApi');
const { normalizeRobloxPrice } = require('../roblox/normalizePriceData');
const { getRolimonsItem } = require('./rolimons');

async function getMarketContext(assetId, rolimonsTtlMs) {
  const robloxRaw = await fetchRobloxResellerData(assetId);
  const roblox = normalizeRobloxPrice(robloxRaw);
  const rolimons = await getRolimonsItem(assetId, rolimonsTtlMs);

  return {
    observedPrice: roblox.bestPrice,
    sellerCount: roblox.sellerCount,
    rap: rolimons?.rap ?? null,
    value: rolimons?.value ?? null,
    demand: rolimons?.demand ?? null,
    trend: rolimons?.trend ?? null,
    projected: rolimons?.projected ?? null,
    rolimonsBestPrice: rolimons?.bestPrice ?? null
  };
}

module.exports = { getMarketContext };
