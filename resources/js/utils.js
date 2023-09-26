/* eslint no-param-reassign: ["error", {props: false}] */

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @typedef {import('clsx').ClassValue} ClassValue
 *
 * @typedef {import('vue').App} App
 */

/**
 * Merge the class name inputs.
 *
 * @param {ClassValue[]} inputs The class inputs.
 * @returns {string} The
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default {
  /**
   * @param {App} app The vue app.
   * @param {any[]} options The plugin options.
   */
  install(app, _options) {
    app.config.globalProperties.cn = cn;
    app.provide('cn', cn);
  },
};
