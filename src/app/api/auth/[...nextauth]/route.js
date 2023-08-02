import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   id: "credentials",
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username",
    //       type: "text",
    //       placeholder: "Username",
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //       placeholder: "Password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     //Check if user exists
    //     const user = { id: 1, username: "random", password: "notrandom" };
    //     if (
    //       credentials?.username === user.username &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  callbacks: {
    async session({ session, token }) {
      //storing user id from JWT token to session
      session.accessToken = token.accessToken;
      session.user.id = token.id.toString();
      return session;
    },
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    error: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
