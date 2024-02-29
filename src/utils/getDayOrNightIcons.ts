export function getDayOrNightIcons(
  iconName: string,
  dataTimgString: string
): string {
  const hours = new Date(dataTimgString).getHours();
  const isDayTime = hours >= 6 && hours < 18;
  return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}
