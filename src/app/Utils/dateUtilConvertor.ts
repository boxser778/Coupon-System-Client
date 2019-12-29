export function dateStringToNumber(date: string) {
  const [day, month, year] = date.split("-");

  return Date.UTC(+year, +month - 1, +day);
}

export function reverseDate(date: string) {
  const splittedDate = date.split("-");
  return splittedDate.reverse().join("-");
}
