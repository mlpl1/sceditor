/* eslint no-param-reassign: ["error", {props: false}] */

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @typedef {} ClassValue
 *
 * @typedef {} App
 */

/**
 * Merge the class name inputs.
 *
 * @param {import('clsx').ClassValue[]} inputs The class inputs.
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default {
  /**
   * @param {import('vue').App} app The vue app.
   * @param {any[]} options The plugin options.
   */
  install(app, _options) {
    app.config.globalProperties.cn = cn;
    app.provide('cn', cn);
  },
};
