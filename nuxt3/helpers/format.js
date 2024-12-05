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

const slug = (text) => {
  if (!text) return "";

  // make lower case and trim
  var slug = text.toLowerCase().trim();

  // remove accents from charaters
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();

  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, "-");

  return slug;
};

export default { currency, slug };
