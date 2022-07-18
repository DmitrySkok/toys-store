export const discountPrice = (price, discount, save) => {
  const discountPercent = price / 100 * discount;
  const priceWithDiscount = (price  - discountPercent);
  if (save) {
    if (Number.isInteger(discountPercent)) {
      return discountPercent;
    } else {
      return discountPercent.toFixed(2);
    }  
  } else if (Number.isInteger(priceWithDiscount)) {
    return priceWithDiscount;
  } else {
    return priceWithDiscount.toFixed(2);
  }
}