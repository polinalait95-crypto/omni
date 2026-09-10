// Единый источник символа валюты для всего приложения.
// Значение берётся из настроек (Prefs.ui.currency) и применяется при старте.
// По умолчанию — белорусский рубль (Br).

export const CURRENCIES: Record<string, string> = {
  BYN: "Br",   // белорусский рубль (по умолчанию)
  RUB: "₽",
  USD: "$",
  EUR: "€",
  KZT: "₸",
  UAH: "₴",
  PLN: "zł",
};

let symbol = "Br";

export function setCurrency(code: string) {
  symbol = CURRENCIES[code] ?? code;
}

// текущий символ валюты
export function cur(): string {
  return symbol;
}
