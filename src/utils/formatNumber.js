export function formatNumber(num) {
  return parseInt(num).toLocaleString("de-DE");
}

export function countSalePercent(higherPrice, lowerPrice) {
  const parsedHigherPrice = Number(higherPrice);
  const parsedLowerPrice = Number(lowerPrice);
  const discount = parsedHigherPrice - parsedLowerPrice;
  const discountPercentage = (discount / parsedHigherPrice) * 100;
  return discountPercentage.toFixed();
}
