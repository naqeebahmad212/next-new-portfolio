"use client";
import { FormEventHandler, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";

const SignInPageComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const handelSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      // callbackUrl: "/",
    });
    setLoading(false);
    if (res?.error) {
      const error = JSON.parse(res.error);
      setErr(error.error);
      setLoading(false);
    }
    if (res?.ok) {
      window.location.replace("/admin/projects");
    }
  };
  return (
    <div className="w-full h-screen bg-dark-1 bg-dotted-pattern pt-12 ">
      <div className="bg-dark-2 shadow-md border m-auto border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
          <form onSubmit={handelSubmit}>
            <h3 className="text-heading3-bold font-medium t text-white">
              Sign in
            </h3>
            <div className="py-3">
              <label
                htmlFor="email"
                className="text-sm font-medium  block mb-2 text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="py-3">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 text-white"
                required
              />
            </div>
            <div className="flex items-start">
              {/* <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="text-sm ml-3">
                <label
                  htmlFor="remember"
                  className="font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div> */}
            </div>

            <p className="text-gray-300 mb-2 text-xs">{err}</p>

            <button
              type="submit"
              className="w-full text-white bg-primary-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div className="flex items-center ">
                <span className="mx-auto ">Login</span>
                {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              </div>
            </button>
          </form>
          <div>
            {/* <div className="h-[1px] my-3 w-full bg-gray-300 relative">
              {" "}
              <p className="absolute -top-3 left-[47%] bg-white px-2">or</p>
            </div>
            <button
              className="w-full mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={async () => {
                await signIn("google", { callbackUrl: "/admin/dashboard" });
              }}
            >
              <GoogleIcon fontSize="small" className="mr-2" />
              Google
            </button> */}
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              href={"/register"}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>

      {/* <p className="mt-5">
        This card component is part of a larger, open-source library of Tailwind
        CSS components. Learn more by going to the official{" "}
        <a className="text-blue-600 hover:underline" href="#" target="_blank">
          Flowbite Documentation
        </a>
        .
      </p> */}
    </div>
  );
};

export default SignInPageComp;
