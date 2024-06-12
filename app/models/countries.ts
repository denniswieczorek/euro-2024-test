export const Albania = { code: 'al', id: "Albania", shortName: "Alb", name: "Albania" }
export const Austria = { code: 'at', id: "Austria", shortName: "Aus", name: "Austria" }
export const Belgium = { code: 'be', id: "Belgium", shortName: "Bel", name: "Belgium" }
export const Croatia = { code: 'hr', id: "Croatia", shortName: "Cro", name: "Croatia" }
export const Czechia = { code: 'cz', id: "Czechia", shortName: "Cze", name: "Czechia" }
export const Denmark = { code: 'dk', id: "Denmark", shortName: "Den", name: "Denmark" }
export const England = { code: 'gb-eng', id: "England", shortName: "Eng", name: "England" }
export const France = { code: 'fr', id: "France", shortName: "Fra", name: "France" }
export const Georgia = { code: 'ge', id: "Georgia", shortName: "Geo", name: "Georgia" }
export const Germany = { code: 'de', id: "Germany", shortName: "Ger", name: "Germany" }
export const Hungary = { code: 'hu', id: "Hungary", shortName: "Hun", name: "Hungary" }
export const Italy = { code: 'it', id: "Italy", shortName: "Ita", name: "Italy" }
export const Netherlands = { code: 'nl', id: "Netherlands", shortName: "Net", name: "Netherlands" }
export const Poland = { code: 'pl', id: "Poland", shortName: "Pol", name: "Poland" }
export const Portugal = { code: 'pt', id: "Portugal", shortName: "Por", name: "Portugal" }
export const Romania = { code: 'ro', id: "Romania", shortName: "Rom", name: "Romania" }
export const Scotland = { code: 'gb-sct', id: "Scotland", shortName: "Sco", name: "Scotland" }
export const Serbia = { code: 'rs', id: "Serbia", shortName: "Ser", name: "Serbia" }
export const Slovakia = { code: 'sk', id: "Slovakia", shortName: "Svk", name: "Slovakia" }
export const Slovenia = { code: 'si', id: "Slovenia", shortName: "Slo", name: "Slovenia" }
export const Spain = { code: 'es', id: "Spain", shortName: "Spa", name: "Spain" }
export const Switzerland = { code: 'ch', id: "Switzerland", shortName: "Swi", name: "Switzerland" }
export const Turkey = { code: 'tr', id: "Turkey", shortName: "Tur", name: "Turkey" }
export const Ukraine = { code: 'ua', id: "Ukraine", shortName: "Ukr", name: "Ukraine" }

export interface Country {
  id: string
  name: string
  code: string
  shortName: string
}

export const countries: Country[] = [
  Albania,
  Austria,
  Belgium,
  Croatia,
  Czechia,
  Denmark,
  England,
  France,
  Georgia,
  Germany,
  Hungary,
  Italy,
  Netherlands,
  Poland,
  Portugal,
  Romania,
  Scotland,
  Serbia,
  Slovakia,
  Slovenia,
  Spain,
  Switzerland,
  Turkey,
  Ukraine,
]
