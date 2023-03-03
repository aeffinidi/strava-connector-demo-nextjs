import { signIn, useSession } from "next-auth/react";

import { useEffect } from "react";

const StravaSignIn = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!(status === "loading") && !session) {
      signIn("strava");
    }
    if (session) {
      window.close();
    }
  }, [session, status]);

  return <div className="h-screen w-screen" />;
};

export default StravaSignIn;
