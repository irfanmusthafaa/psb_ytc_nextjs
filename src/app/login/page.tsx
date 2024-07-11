"use client";

import { useLoginUser } from "@/services/user/auth/login";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ErrorResponse {
  response?: {
    data?: {
      data?: {
        message?: string;
      };
    };
  };
  message?: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    mutate: dataLogin,
    status,
    isSuccess,
    isError,
    error,
  } = useLoginUser();

  const handleInput = (e: any) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Berhasil");
      router.push("/psb/profil");
    }

    if (isError) {
      const err = error as ErrorResponse;
      const errorMessage =
        err.response?.data?.data?.message || "Terjadi kesalahan";
      setIsLoading(false);
      toast.error(errorMessage);
      console.log(err, "error ada");
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email wajib diisi");
      return;
    }
    if (!password) {
      toast.error("Password wajib diisi");
      return;
    }
    setIsLoading(true);
    dataLogin({
      email: email,
      password: password,
    });
  };

  return (
    <section className="bg-[#273b83]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              className="w-[5rem] h-[5rem] mr-2"
              src="/images/logo3.png"
              alt="logo"
            />
            <div className="text-center">
              <p className="text-white text-xs">Young Tahfizh</p>
              <p className="text-white text-xs">Center</p>
            </div>
          </div>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  onChange={handleInput}
                  id="email"
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={handleInput}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="/forgot-password"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Lupa password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Belum punya akun?{" "}
                <a
                  href="/register"
                  className="font-medium text-black hover:underline"
                >
                  Daftar disini
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
