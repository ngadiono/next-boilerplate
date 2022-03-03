/**
 * Change to format rupiah
 * @param  value number
 * @return string
 */
export const helperCheckFormat = (value) => {
  if (typeof value === 'number') {
    let val = (value / 1).toFixed(0).replace(',', '.');
    return 'Rp' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return value;
};

/**
 * Change text to ellipsis
 * @param  text string
 * @return string
 */
export const helperFormatEllipsis = (text) => {
  if (text.length > 40) {
    return text.substr(0, 40) + '...';
  }
  return text;
};

/**
 * Change text to capitalize
 * @param  text string
 * @param  textChild string
 * @return string
 */
export const helperCapitalize = (text) => {
  return text.toLowerCase().replace(/\b./g, function (textChild) {
    return textChild.toUpperCase();
  });
};

/**
 * Replace array object with conditional key
 * @param  arr array
 * @param  find string
 * @param  replace object
 * @return string
 */
export const findAndReplace = (arr, find, replace) => {
  let i;
  for (i = 0; i < arr.length && arr[i].id != find.id; i++) {}
  i < arr.length ? (arr[i] = replace) : arr.push(replace);
};

/**
 * Change to format rupiah
 * @param  index number
 * @return string
 */
export const formatElipsis = (index, lenght) => {
  if (index.length > lenght) {
    return index.substr(0, lenght) + '...';
  }
  return index;
};
