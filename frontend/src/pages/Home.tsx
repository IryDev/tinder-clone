import { Link } from "react-router-dom";
import { Loader, Nav } from "../components";

export const Home = () => {
  return (
    <>
      <Loader />
      <Nav />

      <section className="flex min-h-screen w-full flex-col items-center justify-center bg-home bg-cover p-5 text-center">
        <h1 className="text-[10vw] font-[700] text-white">Swipe Right</h1>
        <h2 className="my-3 text-[5vw] font-[100] italic text-white">
          love at first
        </h2>
        <Link
          to="/register"
          title="Create an account"
          className="block rounded-[30px] bg-gradient-to-r from-darkPink to-coralRed px-16 py-3 text-xl font-bold text-white lg:inline-block lg:border-0"
        >
          Create account
        </Link>

        <Link
          to="/login"
          title="Login page"
          className="my-2 block rounded-[30px] border-2 border-white bg-transparent py-3 text-xl font-bold text-white lg:hidden"
        >
          Login
        </Link>
      </section>
    </>
  );
};
