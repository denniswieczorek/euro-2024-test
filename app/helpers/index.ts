import { Country, countries } from "euro-2024/models/countries";

export function getCountry(id: string) {
  return countries.find(entry => entry.id === id) as Country
}

export function addOne(n: number) {
  return n + 1
}

export function isIn(a: string, b: string[]) {
  return b.includes(a)
}