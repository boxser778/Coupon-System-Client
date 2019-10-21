export function dateStringToNumber(date: string) {
  const [year, month, day] = date.split("-");

  return Date.UTC(+year, +month - 1, +day);
}
