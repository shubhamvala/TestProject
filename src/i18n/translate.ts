import { memoize } from 'lodash'; // Use for caching/memoize for better performance
import i18n from 'i18n-js';

export const translate = memoize(
  (key: any, config?: any) => {
    const translated = i18n.t(key, {
      ...config,
      defaults: [{ message: 'No translation' }],
    });
    return translated;
  },
  (key: any, config?: any) => (config ? key + JSON.stringify(config) : key),
);
