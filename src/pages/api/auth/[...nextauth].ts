import NextAuth, { NextAuthOptions } from "next-auth";

import StravaProvider from "next-auth/providers/strava";

const stravaClientId = process.env.STRAVA_CLIENT_ID;
const stravaClientSecret = process.env.STRAVA_CLIENT_SECRET;

if ([stravaClientId, stravaClientSecret].some((txt) => !txt)) {
  throw Error("Please provide valid Strava client and secret ID");
}

export const authOptions: NextAuthOptions = {
  providers: [
    StravaProvider({
      clientId: stravaClientId!,
      clientSecret: stravaClientSecret!,
    }),
  ],
  callbacks: {
    // signIn: async ({ user, account, profile, email }) => {
    //   return true;
    // },
    session: async ({ session, token }) => {
      return session;
    },
  },
};

export default NextAuth(authOptions);
