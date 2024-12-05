const currency = (value, currency = "BRL", language = null) => {
  language = language === null ? navigator.language : language;
  return new Intl.NumberFormat(language, {
    style: "currency",
    currency,
  })
    .format(value)
    .replace(/\,/g, "-")
    .replace(/\./g, ",")
    .replace(/\-/g, ".");
};

export default { currency };
