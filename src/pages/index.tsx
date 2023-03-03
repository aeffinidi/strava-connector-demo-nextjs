import Head from "next/head";
import Image from "next/image";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Strava connector</title>
        <meta
          name="description"
          content="Strava connector powered by next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <Image
              className="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded"
              alt="hero"
              src="https://cdn.worldvectorlogo.com/logos/strava-2.svg"
              width={1500}
              height={1500}
            />
            <form className="w-full md:w-2/3 flex flex-col items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl m-6 font-medium text-gray-900">
                Unlock your digital 6 pack
              </h1>
              <div className="flex w-full justify-center items-end">
                <button className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Connect now
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
