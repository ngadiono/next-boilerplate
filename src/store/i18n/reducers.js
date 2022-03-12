import * as types from './types';

// Initial state i18n
const initialI18nState = {
  locales: ['id-ID', 'en-EN'],
  defaultLocale: 'id-ID',
};

// i18n reducer
export default (state = initialI18nState, { type, payload }) => {
  switch (type) {
    case types.LOCALES:
      return {
        ...state,
        locales: payload.locales,
      };
    case types.DEFAULT_LOCALE:
      return {
        ...state,
        defaultLocales: payload.defaultLocales,
      };
    default:
      return state;
  }
};
