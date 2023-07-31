import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import FizzBuzz from "@/components/FizzBuzz";
import Footer from "@/components/Footer";
import Head from "next/head";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: { data: (string | number)[] }) {
  return (
    <>
      <Head>
        <title>fizz buzz</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Navigation />
        <FizzBuzz data={data} />
        <Footer />
      </main>
    </>
  );
}

interface FizzBuzzData {
  data: (string | number)[];
}

export const getStaticProps: GetStaticProps<FizzBuzzData> = async () => {
  const res = await fetch("https://fizzbuzz-lucifer1112k.vercel.app/fizzbuzz");
  const data = await res.json();
  return { props: { data } };
};
