import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* This function add commas, for example:
    10000000.123456 => "10,000,000.123456"
*/
export function formatNumberWithCommas(x: number | string) {
  if (!x) return "";
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


/* This function change color for profit or loss */
export function changeColor(value: number | string, colorProfit: string, colorLoss: string) {
  let result;

  if (typeof value === "number") {
    result = Number(value) >= 0 ? colorProfit : colorLoss;
  } else {
    result = value.startsWith("+") ? colorProfit : colorLoss;
  }

  return result;
}

