import Cookies, { CookieSetOptions, CookieGetOptions,  } from "universal-cookie";

const cookies = new Cookies();

export const CookiesKey = {
  AuthToken: "TokenUser",
  User: "User",
  TokenAdmin: "TokenAdmin",
  Admin: "Admin",
};

const CookiesOptions: CookieSetOptions = {
  path: "/",
  secure: true,
};

export const CookiesStorage = {
  set: (key: string, data: any, options?: CookieSetOptions) => {
    return cookies.set(key, data, { ...CookiesOptions, ...options });
  },
  get: (key: string, options?: CookieGetOptions) => {
    return cookies.get(key, { ...CookiesOptions, ...options });
  },
  remove: (key: string, options?: any) => {
    return cookies.remove(key, { ...CookiesOptions, ...options });
  },
};
