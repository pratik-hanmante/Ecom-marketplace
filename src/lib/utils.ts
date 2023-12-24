import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice (
  price: number | string,
  options : {
    currency?: "INR" | "USD" | "EUR" | "GBP",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const { currency = "INR", notation='compact'} = options

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price

  // conditions of displaying the numeric price of assets
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericPrice)
}