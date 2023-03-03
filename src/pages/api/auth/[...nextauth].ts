import NextAuth from "next-auth";
import StravaProvider from "next-auth/providers/strava";

const stravaClientId = process.env.STRAVA_CLIENT_ID;
const stravaClientSecret = process.env.STRAVA_CLIENT_SECRET;

if ([stravaClientId, stravaClientSecret].some((txt) => !txt)) {
  throw Error("Please provide valid Strava client and secret ID");
}

export const authOptions = {
  providers: [
    StravaProvider({
      clientId: stravaClientId!,
      clientSecret: stravaClientSecret!,
    }),
  ],
};

export default NextAuth(authOptions);
