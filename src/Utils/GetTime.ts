export function getTime() {
  const date = new Date();

  const underTen = (num: number) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const hour = underTen(date.getHours());
  const minute = underTen(date.getMinutes());

  const time = `${hour}:${minute}`;

  return time;
}
