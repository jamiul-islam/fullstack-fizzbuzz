import { getStaticProps } from "@/pages";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

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
  return (
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
      <ul className="grid grid-cols-10 gap-5">
        {data?.map((item, index) => (
          <li key={index}>
            {index + 1}. <span style={getFizzBuzzStyle(item)}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FizzBuzz;
