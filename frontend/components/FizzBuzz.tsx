import { Player } from "@lottiefiles/react-lottie-player";
import { useSession, signIn, signOut } from "next-auth/react";
import { getStaticProps } from "@/pages";
import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import profileImage from "@/public/profile-img.png";
import congrats from "@/public/congrats.json";

// dynamic styling for FizzBuzz
function getFizzBuzzStyle(item: string | number): React.CSSProperties {
  if (item === "Fizz") {
    return { color: "#ff4a02dc " };
  } else if (item === "Buzz") {
    return { color: "#ff6781" };
  } else if (item === "FizzBuzz") {
    return { color: "#4c9d92" };
  } else {
    return { color: "#c4c4c4" };
  }
}

const FizzBuzz = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // useSession hook from next-auth
  const { status } = useSession();

  return (
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
      {status === "loading" ? (
        <div>loading...</div>
      ) : status === "unauthenticated" ? (
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
        <div className="relative">
          <div className="fixed top-0 left-0 right-0">
            <Player
              autoplay
              speed={1.5}
              loop
              src={congrats}
              style={{ height: "500px", width: "500px" }}
            />
          </div>
          <div className="flex flex-col items-center" style={{ zIndex: "100" }}>
            <ul className="grid grid-cols-10 gap-5">
              {data?.map((item, index) => (
                <li key={index}>
                  {index + 1}.{" "}
                  <span style={getFizzBuzzStyle(item)}>{item}</span>
                </li>
              ))}
            </ul>
            <h1 className="text-center border rounded-full py-2 w-1/5 mt-4">
              <button onClick={() => signOut()}>Logout</button>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default FizzBuzz;
