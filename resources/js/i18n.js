import axios from 'axios';
import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en/index';

// the available locales
export const SUPPORT_LOCALES = [
  { locale: 'en', currency: 'USD' },
  { locale: 'it', currency: 'EUR' },
];

export const DEFAULT_OPTIONS = {
  legacy: false,
  messages: {
    en,
  },
  numberFormats: SUPPORT_LOCALES.reduce(
    (acc, { locale, currency }) => ({
      ...acc,
      [locale]: {
        currency: {
          style: 'currency',
          currency,
        },
        decimal: {
          style: 'decimal',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
        percent: {
          style: 'percent',
          useGrouping: false,
        },
      },
    }),
    {}
  ),
  datetimeFormats: SUPPORT_LOCALES.reduce(
    (acc, { locale }) => ({
      ...acc,
      [locale]: {
        short: { year: 'numeric', month: 'short', day: 'numeric' },
        long: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
        },
        date: {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        },
        datetime: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        },
        time: { hour: 'numeric', minute: 'numeric' },
        time_full: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
      },
    }),
    {}
  ),
};

/**
 * Setup i18n.
 *
 * @param {{locale: string}} options The i18n options.
 * @returns The i18n object.
 */
export function setupI18n(options = { locale: 'en' }) {
  options = { ...DEFAULT_OPTIONS, ...options };
  const i18n = createI18n(options);
  setLocale(i18n, options.locale);
  return i18n;
}

/**
 * Check if the locale is supported by the app.
 *
 * @param {string} locale The locale.
 * @returns {boolean}
 */
export function isLocaleSupported(locale) {
  return SUPPORT_LOCALES.find((l) => locale == l.locale) != undefined;
}

/**
 * Check if a given locale is available from a given i18n object.
 *
 * @param {Object} i18n The i18n object.
 * @param {string} locale The locale.
 * @returns {boolean}
 */
export function isLocaleAvailable(i18n, locale) {
  i18n = i18n.isGlobal ? i18n : i18n.global;
  return i18n.availableLocales.includes(locale);
}
/**
 * Set the i18n language.
 *
 * @param {Object} i18n The i18n object.
 * @param {string} locale The locale.
 */
export async function setLocale(i18n, locale) {
  i18n = i18n.isGlobal ? i18n : i18n.global;

  if (!isLocaleAvailable(i18n, locale)) {
    await loadLocaleMessages(i18n, locale);
  }

  i18n.locale.value = locale;
  axios.defaults.headers.common['Accept-Language'] = locale;
  document.querySelector('html').setAttribute('lang', locale);
}

/**
 * Set the i18n language.
 *
 * @param {Object} i18n The i18n object.
 * @param {string} locale The locale.
 */
export async function loadLocaleMessages(i18n, locale) {
  const messages = (await import(`./locales/${locale}/index.js`)).default;
  i18n = i18n.isGlobal ? i18n : i18n.global;
  i18n.setLocaleMessage(locale, messages);
  return nextTick();
}
