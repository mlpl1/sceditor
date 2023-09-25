import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** @typedef {import('clsx').ClassValue} ClassValue */

/**
 * Merge the class name inputs.
 *
 * @param {ClassValue[]} inputs The class inputs.
 * @returns {string} The
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default { cn };
