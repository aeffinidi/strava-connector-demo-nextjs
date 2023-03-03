import { signOut, useSession } from "next-auth/react";

import { FormEvent } from "react";
import { useRouter } from "next/router";

const Strava = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signOut({ callbackUrl: process.env.HOST });
  };

  if (status === "loading") {
    return (
      <div className="container mx-auto flex flex-col h-screen justify-center items-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }
  if (!session) {
    router.push("/");
  }

  return (
    <div className="container mx-auto flex flex-col h-screen justify-center items-center">
      <div className="m-6 text-center">
        <h1 className="text-2xl">Welcome {session?.user?.name}</h1>
        <h2 className="text-xl">
          You have successfully unlocked a new power 💪{" "}
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <button className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 duration-300 rounded text-lg">
          Sign out
        </button>
      </form>
    </div>
  );
};

export default Strava;
