// Types
import * as types from './types';

export const actionI18nLocales = (locales) => (dispatch) => {
  return dispatch({
    type: types.LOCALES,
    payload: {
      locales,
    },
  });
};

export const actionI18nDefaultLocale = (defaultLocales) => (dispatch) => {
  return dispatch({
    type: types.DEFAULT_LOCALE,
    payload: {
      defaultLocales,
    },
  });
};
