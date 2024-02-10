import Cookies from "js-cookie";

export function CookieChecker(): boolean | User {
  const cookie = Cookies.get("user");
  if (cookie == undefined) {
    return false;
  } else {
    const userCookie: User = JSON.parse(cookie);
    return userCookie;
  }
}
