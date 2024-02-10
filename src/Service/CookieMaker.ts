import Cookies from "js-cookie";

export function CookieMaker(username: string) {
  const user: User = {
    name: username,
    todolist: [],
  };
  Cookies.set("user", JSON.stringify(user), { expires: 999 });
}
