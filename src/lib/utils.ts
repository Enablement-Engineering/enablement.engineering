import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Randomly applies off-kilter rotation classes based on brand system
 * @param probability - Probability of applying rotation (0-1)
 * @returns Random rotation class or empty string
 */
export function randomOffKilter(probability: number = 0.3): string {
  if (Math.random() > probability) return "";

  const rotations = [
    "off-kilter-1",
    "off-kilter-neg-1",
    "off-kilter-0-5",
    "off-kilter-neg-0-5"
  ];

  return rotations[Math.floor(Math.random() * rotations.length)];
}

/**
 * Formats a string to be used as a CSS custom property
 */
export function toCSSVar(value: string): string {
  return `var(--${value.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)})`;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}