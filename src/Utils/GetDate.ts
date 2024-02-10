export function getDate() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

  // const months = [
  //   "January",
  //   "February",
  //   "Maret",
  //   "April",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  const date = new Date();
  const dateToString = date.toLocaleDateString();
  const day = hari[date.getDay()];

  return `${day} ${dateToString}`;
}
