/**
 * Check if key exists in local storage
 * @param  string key
 * @return boolean
 */
export const lsHas = (key) => {
  let item = localStorage.getItem(key);
  return item !== null;
};

/**
 * Retrive an object from local storage.
 * @param  string key
 * @return mixed
 */
export const lsGet = (key) => {
  let item = localStorage.getItem(key);
  if (!item) return;
  if (item[0] === '{' || item[0] === '[') return JSON.parse(item);
  return item;
};

/**
 * Save some value to local storage.
 * @param string key
 * @param string value
 */
export const lsSave = (key, value) => {
  if (value === undefined) $.error("Can't store undefinded value");
  if (typeof value === 'object' || typeof value === 'array') {
    value = JSON.stringify(value);
  }
  if (typeof value !== 'string') $.error("Can't store unrecognized format value");
  localStorage.setItem(key, value);
};

/**
 * Remove element from local storage.
 * @param string key
 */
export const lsRemove = (key) => {
  localStorage.removeItem(key);
};

// LS with expiry time
export const lsSaveExpiry = (key, value, ttl) => {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const lsGetExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
