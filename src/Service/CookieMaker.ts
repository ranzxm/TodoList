import Cookies from "js-cookie";
import { BadWordCensoring } from "./BadWordCensoring";

export function CookieMaker(username: string) {
  const user: User = {
    name: BadWordCensoring(username),
    todolist: [],
  };
  Cookies.set("user", JSON.stringify(user), { expires: 999 });
}
