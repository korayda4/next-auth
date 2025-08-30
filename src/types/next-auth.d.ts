import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: "user" | "admin";
    } & DefaultSession["user"];
  }

  interface JWT {
    role?: "user" | "admin";
  }
}
