"use client";

import React, { useEffect, useState } from "react";
import { InputOTP } from "antd-input-otp";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import type { GetProp } from "antd";
import type { OTPProps } from "antd/es/input/OTP";
import { useVerifyOtp } from "@/services/user/auth/verify-otp";
import OTP from "antd/es/input/OTP";
import { useResendOtp } from "@/services/user/auth/resend-otp";

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

export default function OtpPage() {
  const [Otp, setOtp] = useState("");
  const [Email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    mutate: dataVerifyOTP,
    status: isStatusVerifyOTP,
    isSuccess: isSuccessVerifiyOTP,
    isError: isErrorVerifyOTP,
    error: errorVerifyOTP,
  } = useVerifyOtp();
  const {
    mutate: dataResendOTP,
    status: isStatusResendOTP,
    isSuccess: isSuccessResendOTP,
    isError: isErrorResendOTP,
  } = useResendOtp();

  useEffect(() => {
    const registeredEmail = localStorage.getItem("registeredEmail");
    if (registeredEmail) {
      setEmail(registeredEmail);
    } else {
      toast.error("Email tidak ditemukan. Silakan daftar ulang.");
      setTimeout(() => {
        router.push("/register");
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (isSuccessVerifiyOTP) {
      toast.success("Verfikasi OTP Sukses");
      localStorage.removeItem("registeredEmail");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }

    if (isErrorVerifyOTP) {
      const err = errorVerifyOTP as ErrorResponse;
      const errorMessage =
        err.response?.data?.data?.message || "Terjadi kesalahan";
      setIsLoading(false);
      toast.error(errorMessage);
    }
  }, [isStatusVerifyOTP]);

  useEffect(() => {
    if (isSuccessResendOTP) {
      toast.success("OTP Berhasil Dikirim ulang");
    }
  }, [isStatusResendOTP]);

  const onChange: GetProp<typeof Input.OTP, "onChange"> = (text) => {
    setOtp(text);
    console.log("onChange:", text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Email) {
      toast.error("Email wajib diisi");
      return;
    }
    if (!Otp) {
      toast.error("OTP wajib diisi");
      return;
    }
    setIsLoading(true);
    dataVerifyOTP({
      email: Email,
      otp: Otp,
    });
  };

  const handleResendOTP = () => {
    if (!Email) {
      toast.error("Email wajib diisi");
      return;
    }
    dataResendOTP({
      email: Email,
    });
  };

  // console.log(Email, "Email");
  // console.log(Otp, "OTP");

  return (
    <section className="bg-[#273b83] ">
      <div className="flex flex-col items-center  px-6  mx-auto h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 mt-10 text-2xl font-semibold text-gray-900 dark:text-white"
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
          <div className="p-6 ">
            <h1 className="mb-3 text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Masukkan Kode OTP
            </h1>
            <div className="mb-5">
              <p className="text-xs text-center">
                Masukkan kode OTP yang telah dikirim ke
              </p>
              <p className="text-xs text-center">
                email : <span className="font-bold">{Email}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col  gap-3 w-full ">
                <Input.OTP
                  formatter={(str) => str.toUpperCase()}
                  {...sharedProps}
                />

                <div>
                  <p className="text-xs text-center">
                    Kode OTP tidak terkirim?{" "}
                    <span
                      className="font-bold text-[#273b83] hover:text-[#111e4e]  cursor-pointer"
                      onClick={handleResendOTP}
                    >
                      Resend
                    </span>
                  </p>
                </div>
                <div className="w-full mt-5">
                  <button
                    type="submit"
                    className="w-full text-white bg-[#273b83] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
