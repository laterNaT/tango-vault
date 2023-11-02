export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/((?!about|register|favicon.ico|logo).*)"],
};
