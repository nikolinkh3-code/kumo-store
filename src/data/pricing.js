// ============================================
// KUMO PRICE RULES — change these numbers any time
// ============================================

export const PRICE_RULES = {
  yuanRate: 20,          // 1 yuan (¥) = 20 taka
  cargoPerKg: 850,       // cargo charge per kg
  buyChargeSmall: 50,    // buying agent charge for small items
  buyChargeBig: 100,     // buying agent charge for big items
  bigItemFromKg: 0.5,    // items this weight or heavier count as "big"

  // profit
  fixedProfitBelow: 500, // if cost is under 500 taka...
  fixedProfit: 200,      // ...profit is 200 taka
  midProfitUpTo: 1500,   // if cost is 500–1500 taka...
  midProfitRate: 0.35,   // ...profit is 35%
  highProfitRate: 0.25,  // above 1500 taka, profit is 25%
};

// Total cost to bring the product to Bangladesh
export function getCost(cny, weightKg) {
  const r = PRICE_RULES;
  const product = cny * r.yuanRate;
  const cargo = weightKg * r.cargoPerKg;
  const buyCharge = weightKg >= r.bigItemFromKg ? r.buyChargeBig : r.buyChargeSmall;
  return product + cargo + buyCharge;
}

export function getProfit(cost) {
  const r = PRICE_RULES;
  if (cost < r.fixedProfitBelow) return r.fixedProfit;
  if (cost <= r.midProfitUpTo) return cost * r.midProfitRate;
  return cost * r.highProfitRate;
}

// Round up to a price ending in 9 (e.g. 1276 -> 1279, 380 -> 389)
export function roundTo9(amount) {
  let p = Math.ceil(amount / 10) * 10 - 1;
  if (p < amount) p += 10;
  return p;
}

export function calculatePrice(cny, weightKg) {
  if (!cny) return 0;
  const cost = getCost(cny, weightKg || 0);
  return roundTo9(cost + getProfit(cost));
}
