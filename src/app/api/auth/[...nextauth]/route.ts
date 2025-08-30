import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as "user" | "admin" | undefined;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
