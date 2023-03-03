import React, { FC, FormEvent } from "react";
import { signOut, useSession } from "next-auth/react";

const SignOut: FC = () => {
  const { data: session, status } = useSession();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signOut({ callbackUrl: process.env.HOST });
  };

  if (!session) {
    return <div>You are not connected.</div>;
  }

  return (
    <form
      className="container mx-auto flex flex-col h-screen justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="m-6 text-center">
        <h2 className="text-3xl"> Welcome {session.user?.email} 😀</h2>
        <h3 className="text-xl"> You have succesfully unlocked your data</h3>
      </div>
      <button className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 duration-300 rounded text-lg">
        Sign out
      </button>
    </form>
  );
};

export default SignOut;
