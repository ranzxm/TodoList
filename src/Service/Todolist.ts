import Cookies from "js-cookie";

export function getTodolist(): User {
  const res = Cookies.get("user");
  return res !== undefined && JSON.parse(res);
}
