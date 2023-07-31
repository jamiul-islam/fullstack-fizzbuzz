import { useSession, signIn, signOut } from "next-auth/react";
import { getStaticProps } from "@/pages";
import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import profileImage from "@/public/profile-img.png";

// dynamic styling for FizzBuzz
function getFizzBuzzStyle(item: string | number): React.CSSProperties {
  if (item === "Fizz") {
    return { color: "#ff4a02dc " };
  } else if (item === "Buzz") {
    return { color: "pink" };
  } else if (item === "FizzBuzz") {
    return { color: "#3F8077" };
  } else {
    return { color: "white" };
  }
}

const FizzBuzz = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // useSession hook from next-auth
  const { data: session } = useSession();

  return (
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
      {!session?.user?.email ? (
        <div>
          <Image
            src={profileImage}
            alt="profile-img"
            width="400"
            height="400"
          />
          <h1 className="text-center border rounded-full py-2">
            <button onClick={() => signIn("google")}>
              Login to see FizzBuzz
            </button>
          </h1>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <ul className="grid grid-cols-10 gap-5">
            {data?.map((item, index) => (
              <li key={index}>
                {index + 1}. <span style={getFizzBuzzStyle(item)}>{item}</span>
              </li>
            ))}
          </ul>
          <h1 className="text-center border rounded-full py-2 w-1/5 mt-4">
            <button onClick={() => signOut()}>Logout</button>
          </h1>
        </div>
      )}
    </div>
  );
};

export default FizzBuzz;
